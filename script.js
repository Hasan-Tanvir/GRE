const STORAGE_STATUS = 'vocabMountainStatus';
const STORAGE_NOTES = 'vocabMountainNotes';

const studyNotes = document.getElementById('study-notes');

const bankSearch = document.getElementById('bank-search');
const groupBar = document.getElementById('group-bar');
const groupSelectionLabel = document.getElementById('group-selection-label');
const modeSingle = document.getElementById('mode-single');
const modeMulti = document.getElementById('mode-multi');
const statusButtons = Array.from(document.querySelectorAll('.status-button'));
const clearFilterButton = document.getElementById('clear-filter-button');
const shuffleButton = document.getElementById('shuffle-button');
const bankList = document.getElementById('bank-list');
const bankCount = document.getElementById('bank-count');
const wordDetail = document.getElementById('word-detail');
const closePopup = document.getElementById('close-popup');
const popupBackdrop = document.getElementById('popup-backdrop');
const detailWord = document.getElementById('detail-word');
const detailPhonetic = document.getElementById('detail-phonetic');
const detailPos = document.getElementById('detail-pos');
const detailGroup = document.getElementById('detail-group');
const detailDefinition = document.getElementById('detail-definition');
const detailSynonyms = document.getElementById('detail-synonyms');
const detailExample = document.getElementById('detail-example');
const knowButton = document.getElementById('know-button');
const dontKnowButton = document.getElementById('dontknow-button');
const revealButton = document.getElementById('reveal-button');
const speakButton = document.getElementById('speak-button');
const resetButton = document.getElementById('reset-button');
const knownCount = document.getElementById('known-count');
const forgotCount = document.getElementById('forgot-count');
const totalCount = document.getElementById('total-count');
const knownList = document.getElementById('known-list');

let filteredBank = VOCAB_DATA.slice();
let wordStatus = JSON.parse(localStorage.getItem(STORAGE_STATUS) || '{}');
let selectedWord = null;
let selectedGroups = [];
let multiSelectMode = true;
let activeStatusFilter = 'all';
let rangeStartGroup = null;
let pronunciationMap = {};

const SUPABASE_URL = 'https://jwqyenqxyhiqbvywznxb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3cXllbnF4eWhpcWJ2eXd6bnhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NzE1ODYsImV4cCI6MjA5NzQ0NzU4Nn0.tDhdEB7LxGrH_dDitdo9yU4oSb7b6IwWdH6CMFVjrGw';
const SUPABASE_TABLE = 'vocab_progress';
let supabaseClient = null;
let remoteSyncEnabled = true;
let currentUser = null;

async function initSupabase() {
  if (!window.supabase || !window.supabase.createClient) {
    remoteSyncEnabled = false;
    console.warn('Supabase library not available; remote sync disabled.');
    return;
  }

  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const {
      data: { session },
      error: sessionError,
    } = await supabaseClient.auth.getSession();

    if (sessionError) {
      console.warn('Supabase session restore failed:', sessionError.message || sessionError);
    }

    currentUser = session?.user || null;
    updateAuthUi();

    supabaseClient.auth.onAuthStateChange((event, session) => {
      currentUser = session?.user || null;
      updateAuthUi();
      if (currentUser) {
        loadRemoteProgress();
      }
    });

    if (currentUser) {
      await loadRemoteProgress();
    }
  } catch (error) {
    remoteSyncEnabled = false;
    console.warn('Supabase initialization failed:', error.message || error);
  }
}

async function loadRemoteProgress() {
  if (!remoteSyncEnabled || !supabaseClient || !currentUser) return;

  const { data, error } = await supabaseClient
    .from(SUPABASE_TABLE)
    .select('status,notes')
    .eq('id', currentUser.id)
    .maybeSingle();

  if (error && error.code !== 'PGRST116') {
    console.warn('Supabase load error:', error.message || error);
    return;
  }

  if (data) {
    if (data.status && typeof data.status === 'object') {
      wordStatus = data.status;
      saveStatus(false);
    }
    if (typeof data.notes === 'string') {
      studyNotes.value = data.notes;
      saveNotes(false);
    }
    renderBank();
    updatePracticeStats();
  } else if (Object.keys(wordStatus).length > 0 || studyNotes.value.trim()) {
    await saveRemoteProgress();
  }
}

async function saveRemoteProgress() {
  if (!remoteSyncEnabled || !supabaseClient || !currentUser) return;

  const payload = {
    id: currentUser.id,
    status: wordStatus,
    notes: studyNotes.value,
  };

  const { error } = await supabaseClient
    .from(SUPABASE_TABLE)
    .upsert(payload, { onConflict: 'id' });

  if (error) {
    console.warn('Supabase save error:', error.message || error);
  }
}

async function signInWithCredentials(email, password) {
  if (!remoteSyncEnabled || !supabaseClient) return;
  if (!email || !password) {
    updateAuthStatus('Enter both email and password.');
    return;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.warn('Supabase sign-in error:', error.message || error);
    updateAuthStatus('Sign-in failed. Check your credentials.');
    return;
  }

  if (data?.session) {
    currentUser = data.session.user;
    updateAuthUi();
    await loadRemoteProgress();
  }
}

async function signOutSupabase() {
  if (!remoteSyncEnabled || !supabaseClient) return;
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    console.warn('Supabase sign-out error:', error.message || error);
  }
  currentUser = null;
  updateAuthUi();
}

function updateAuthUi() {
  const authStatus = document.getElementById('auth-status');
  const signInButton = document.getElementById('sign-in-button');
  const signOutButton = document.getElementById('sign-out-button');
  const authEmail = document.getElementById('auth-email');
  const authPassword = document.getElementById('auth-password');

  if (!authStatus || !signInButton || !signOutButton || !authEmail || !authPassword) return;

  if (currentUser) {
    authStatus.textContent = `Signed in as ${currentUser.email || currentUser.id}. Your progress syncs only for you.`;
    authEmail.classList.add('hidden');
    authPassword.classList.add('hidden');
    signInButton.classList.add('hidden');
    signOutButton.classList.remove('hidden');
  } else {
    authStatus.textContent = 'Sign in with your Supabase email and password to sync only your progress.';
    authEmail.classList.remove('hidden');
    authPassword.classList.remove('hidden');
    signInButton.classList.remove('hidden');
    signOutButton.classList.add('hidden');
  }
}

function updateAuthStatus(message) {
  const authStatus = document.getElementById('auth-status');
  if (authStatus) authStatus.textContent = message;
}

function loadSavedData() {
  const savedStatus = localStorage.getItem(STORAGE_STATUS);
  const savedNotes = localStorage.getItem(STORAGE_NOTES);

  if (savedStatus) {
    try {
      wordStatus = JSON.parse(savedStatus);
    } catch (error) {
      wordStatus = {};
    }
  }

  if (savedNotes) {
    studyNotes.value = savedNotes;
  }

  updatePracticeStats();
}

function saveNotes() {
  localStorage.setItem(STORAGE_NOTES, studyNotes.value);
  saveRemoteProgress();
}


function renderBank() {
  bankList.innerHTML = '';

  if (filteredBank.length === 0) {
    bankList.innerHTML = '<li class="word-item">No vocabulary entries match your search or group filter.</li>';
    bankCount.textContent = '0';
    hideDetail();
    return;
  }

  filteredBank.forEach((entry) => {
    const item = document.createElement('li');
    item.className = 'word-item bank-word-item';
    const status = wordStatus[entry.word] || 'unmarked';
    const statusClass = status === 'learned' ? 'learned' : status === 'forgot' ? 'forgot' : '';

    item.innerHTML = `
      <button class="word-select-button ${statusClass}" data-word="${escapeHtml(entry.word)}">${escapeHtml(entry.word)}</button>
    `;

    bankList.appendChild(item);
  });

  bankCount.textContent = String(filteredBank.length);
  updateGroupBar();
}

function showDetail(entry) {
  selectedWord = entry;
  detailWord.textContent = entry.word;
  detailGroup.textContent = `Group ${entry.group}`;
  // Part of speech (prefer explicit field, fallback to nested definitions)
  const pos = entry.part_of_speech || (entry.definitions && entry.definitions[0] && entry.definitions[0].part_of_speech) || '';
  detailPos.textContent = pos ? `Part of speech: ${pos}` : '';

  // Pronunciation: show play button if we have an audio URL from remote data
  const audioUrl = pronunciationMap[entry.word] || pronunciationMap[entry.slug] || null;
  // If the entry includes a phonetic/IPA string, show it plainly (preferred)
  if (entry.phonetic) {
    detailPhonetic.textContent = entry.phonetic;
    // if audio also available, add a small play button after the text
    if (audioUrl) {
      detailPhonetic.innerHTML = `${escapeHtml(entry.phonetic)} <button class="play-pronunciation" data-src="${audioUrl}">Play audio</button>`;
      const btn = detailPhonetic.querySelector('.play-pronunciation');
      btn.addEventListener('click', () => {
        try {
          const a = new Audio(btn.dataset.src);
          a.play();
        } catch (e) {
          console.error('Audio play failed', e);
        }
      });
    }
  } else if (audioUrl) {
    // No textual phonetic provided — show audio play button only
    detailPhonetic.innerHTML = 'Pronunciation:' + ` <button class="play-pronunciation" data-src="${audioUrl}">Play audio</button>`;
    const btn = detailPhonetic.querySelector('.play-pronunciation');
    btn.addEventListener('click', () => {
      try {
        const a = new Audio(btn.dataset.src);
        a.play();
      } catch (e) {
        console.error('Audio play failed', e);
      }
    });
  } else {
    detailPhonetic.textContent = '';
  }
  detailDefinition.textContent = '';
  detailSynonyms.textContent = '';
  detailExample.textContent = '';
  wordDetail.classList.remove('hidden');
  updateDetailButtons();
}

function hideDetail() {
  selectedWord = null;
  wordDetail.classList.add('hidden');
}

function updateDetailButtons() {
  if (!selectedWord) return;
  const status = wordStatus[selectedWord.word] || 'unmarked';
  knowButton.classList.toggle('active', status === 'learned');
  dontKnowButton.classList.toggle('active', status === 'forgot');
}

function revealDefinition() {
  if (!selectedWord) return;
  detailDefinition.innerHTML = `<strong>Definition:</strong> ${escapeHtml(selectedWord.definition)}`;
  if (selectedWord.synonyms && selectedWord.synonyms.length) {
    detailSynonyms.innerHTML = `<strong>Synonyms:</strong> ${escapeHtml(selectedWord.synonyms.join(', '))}`;
  } else {
    detailSynonyms.textContent = '';
  }
  if (selectedWord.example) {
    detailExample.innerHTML = `<strong>Example:</strong> ${escapeHtml(selectedWord.example)}`;
  } else {
    detailExample.textContent = '';
  }
}

function speakWord() {
  if (!selectedWord || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(selectedWord.word);
  utterance.lang = 'en-US';
  window.speechSynthesis.speak(utterance);
}

function setPracticeStatus(status) {
  if (!selectedWord) return;
  if (status === 'reset') {
    delete wordStatus[selectedWord.word];
  } else {
    wordStatus[selectedWord.word] = status;
  }
  saveStatus();
  saveRemoteProgress();
  renderBank();
  updateDetailButtons();
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}


function filterBank() {
  const searchValue = bankSearch.value.trim().toLowerCase();
  const selectedGroupIds = selectedGroups.map((group) => String(group));

  filteredBank = VOCAB_DATA.filter((entry) => {
    const matchesGroup = selectedGroupIds.length === 0 || selectedGroupIds.includes(String(entry.group));
    const matchesSearch = searchValue
      ? entry.word.toLowerCase().includes(searchValue) ||
        entry.definition.toLowerCase().includes(searchValue) ||
        (entry.example && entry.example.toLowerCase().includes(searchValue)) ||
        (entry.synonyms && entry.synonyms.some((syn) => syn.toLowerCase().includes(searchValue)))
      : true;
    const status = wordStatus[entry.word] || 'unmarked';
    const matchesStatus =
      activeStatusFilter === 'all' ||
      (activeStatusFilter === 'known' && status === 'learned') ||
      (activeStatusFilter === 'forgot' && status === 'forgot');
    return matchesGroup && matchesSearch && matchesStatus;
  });

  renderBank();
  updatePracticeStats();
}


function saveStatus() {
  localStorage.setItem('vocabMountainStatus', JSON.stringify(wordStatus));
}

function buildGroupBar() {
  if (!groupBar) return;
  groupBar.innerHTML = '';
  for (let i = 1; i <= 34; i += 1) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'group-chip';
    chip.dataset.group = String(i);
    chip.textContent = i;
    chip.addEventListener('click', handleGroupChipClick);
    groupBar.appendChild(chip);
  }
}

function updateGroupBar() {
  if (!groupBar) return;
  groupBar.classList.toggle('single-mode', !multiSelectMode);
  groupBar.classList.toggle('multi-mode', multiSelectMode);

  const chips = Array.from(groupBar.querySelectorAll('.group-chip'));
  chips.forEach((chip) => {
    chip.classList.toggle('selected', selectedGroups.includes(Number(chip.dataset.group)));
  });

  if (groupSelectionLabel) {
    if (selectedGroups.length === 0) {
      groupSelectionLabel.textContent = 'Selected groups: All';
    } else if (selectedGroups.length === 1) {
      groupSelectionLabel.textContent = `Selected group: ${selectedGroups[0]}`;
    } else {
      groupSelectionLabel.textContent = `Selected groups: ${selectedGroups[0]}–${selectedGroups[selectedGroups.length - 1]}`;
    }
  }
}

function setMode(single) {
  multiSelectMode = !single;
  modeSingle.classList.toggle('active', single);
  modeMulti.classList.toggle('active', !single);
  if (single && selectedGroups.length > 1) {
    selectedGroups = [selectedGroups[selectedGroups.length - 1]];
  }
  rangeStartGroup = null;
  updateGroupBar();
  filterBank();
}

function handleGroupChipClick(event) {
  const group = Number(event.currentTarget.dataset.group);

  if (multiSelectMode) {
    if (rangeStartGroup === null) {
      rangeStartGroup = group;
      selectedGroups = [group];
    } else {
      const rangeStart = Math.min(rangeStartGroup, group);
      const rangeEnd = Math.max(rangeStartGroup, group);
      selectedGroups = [];
      for (let i = rangeStart; i <= rangeEnd; i += 1) {
        selectedGroups.push(i);
      }
      rangeStartGroup = null;
    }
  } else {
    selectedGroups = [group];
    rangeStartGroup = null;
  }

  updateGroupBar();
  filterBank();
}

function setStatusFilter(filter) {
  activeStatusFilter = filter;
  statusButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === filter);
  });
  filterBank();
}

function openPopup() {
  wordDetail.classList.remove('hidden');
  popupBackdrop.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closePopupPanel() {
  wordDetail.classList.add('hidden');
  popupBackdrop.classList.add('hidden');
  document.body.classList.remove('modal-open');
  selectedWord = null;
}

function updatePracticeStats() {
  const known = Object.values(wordStatus).filter((status) => status === 'learned').length;
  const forgot = Object.values(wordStatus).filter((status) => status === 'forgot').length;
  const knownWords = Object.keys(wordStatus).filter((word) => wordStatus[word] === 'learned');
  knownCount.textContent = String(known);
  forgotCount.textContent = String(forgot);
  totalCount.textContent = String(filteredBank.length);
  if (knownList) {
    knownList.textContent = knownWords.length > 0
      ? `${knownWords.slice(0, 10).join(', ')}${knownWords.length > 10 ? ` +${knownWords.length - 10} more` : ''}`
      : 'None yet';
  }
}



bankSearch.addEventListener('input', filterBank);
modeSingle.addEventListener('click', () => setMode(true));
modeMulti.addEventListener('click', () => setMode(false));
statusButtons.forEach((button) => {
  button.addEventListener('click', () => setStatusFilter(button.dataset.filter));
});
shuffleButton.addEventListener('click', () => {
  filteredBank = shuffleArray(filteredBank);
  renderBank();
  updatePracticeStats();
});
clearFilterButton.addEventListener('click', () => {
  bankSearch.value = '';
  selectedGroups = [];
  rangeStartGroup = null;
  updateGroupBar();
  setStatusFilter('all');
  filterBank();
});

bankList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('button.word-select-button')) {
    const word = target.dataset.word;
    const entry = VOCAB_DATA.find((item) => item.word === word);
    if (entry) {
      showDetail(entry);
      openPopup();
    }
  }
});

knowButton.addEventListener('click', () => setPracticeStatus('learned'));
dontKnowButton.addEventListener('click', () => setPracticeStatus('forgot'));
revealButton.addEventListener('click', revealDefinition);
speakButton.addEventListener('click', speakWord);
resetButton.addEventListener('click', () => setPracticeStatus('reset'));
closePopup.addEventListener('click', closePopupPanel);
popupBackdrop.addEventListener('click', closePopupPanel);

studyNotes.addEventListener('input', saveNotes);

const authEmailInput = document.getElementById('auth-email');
const authPasswordInput = document.getElementById('auth-password');
const signInButton = document.getElementById('sign-in-button');
const signOutButton = document.getElementById('sign-out-button');

if (signInButton && authEmailInput && authPasswordInput) {
  signInButton.addEventListener('click', () => {
    const email = authEmailInput.value.trim();
    const password = authPasswordInput.value.trim();
    if (!email || !password) {
      updateAuthStatus('Enter your email and password.');
      return;
    }
    signInWithCredentials(email, password);
  });
}

if (signOutButton) {
  signOutButton.addEventListener('click', signOutSupabase);
}

window.addEventListener('DOMContentLoaded', async () => {
  await initSupabase();
  buildGroupBar();
  setMode(false);
  setStatusFilter('all');
  loadSavedData();
  filterBank();
  updatePracticeStats();
});

function shuffleArray(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
