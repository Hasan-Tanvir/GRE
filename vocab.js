const VOCAB_DATA = [
    {
        "word":  "abound",
        "definition":  "be present in large quantities",
        "part_of_speech":  "verb",
        "group":  1,
        "example":  "Wildfires abound in the lush green meadows of the valley.",
        "synonyms":  [
                         "proliferate",
                         "thrive",
                         "flourish"
                     ]
    },
    {
        "word":  "amorphous",
        "definition":  "lacking structure; unclear",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "His plans for the future were still amorphous, changing every few weeks.",
        "synonyms":  [
                         "shapeless",
                         "indefinite",
                         "vague"
                     ]
    },
    {
        "word":  "austere",
        "definition":  "(of a person) strict and stern in character",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "With his austere manner, Mr. Thompson rarely cracked a smile.",
        "synonyms":  [
                         "harsh",
                         "dour",
                         "grim"
                     ]
    },
    {
        "word":  "belie",
        "definition":  "give a false impression of; mask",
        "part_of_speech":  "verb",
        "group":  1,
        "example":  "Her sparkling eyes belie the sadness she must feel.",
        "synonyms":  [
                         "conceal",
                         "contradict",
                         "be at odds with"
                     ]
    },
    {
        "word":  "capricious",
        "definition":  "having varying moods; fickle",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "The capricious nature of the weather has made planning outdoor events difficult.",
        "synonyms":  [
                         "mercurial",
                         "volatile",
                         "impulsive"
                     ]
    },
    {
        "word":  "cerebral",
        "definition":  "related to the brain",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "The surgeon specialized in cerebral procedures.",
        "synonyms":  [
                         "neurological",
                         "cranial",
                         "cortical"
                     ]
    },
    {
        "word":  "congenial",
        "definition":  "(of a person) likable and friendly, often due to shared interests",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "Congenial as she was, Nancy was always invited to parties.",
        "synonyms":  [
                         "convivial",
                         "genial",
                         "kindred"
                     ]
    },
    {
        "word":  "conspicuous",
        "definition":  "easily noticed; obvious",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "On Insta, it\u0027s important that your vacation be as conspicuous as possible.",
        "synonyms":  [
                         "manifest",
                         "patent",
                         "striking"
                     ]
    },
    {
        "word":  "cursory",
        "definition":  "lacking effort; without care",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "He gave a cursory glance at the document before signing it.",
        "synonyms":  [
                         "desultory",
                         "perfunctory",
                         "token"
                     ]
    },
    {
        "word":  "daunting",
        "definition":  "scary or frightening",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "Memorizing 960 GRE words is daunting but necessary.",
        "synonyms":  [
                         "formidable",
                         "intimidating",
                         "unnerving"
                     ]
    },
    {
        "word":  "deify",
        "definition":  "look up to someone or something as a god",
        "part_of_speech":  "verb",
        "group":  1,
        "example":  "In some ancient cultures, the sun was deified and worshiped.",
        "synonyms":  [
                         "venerate",
                         "lionize",
                         "exalt"
                     ]
    },
    {
        "word":  "didactic",
        "definition":  "meant for teaching; educational, sometimes in a condescending manner",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "The play was not only entertaining but also didactic, offering lessons on morality.",
        "synonyms":  [
                         "instructive",
                         "doctrinal",
                         "pedagogic"
                     ]
    },
    {
        "word":  "disseminate",
        "definition":  "distribute or circulate broadly",
        "part_of_speech":  "verb",
        "group":  1,
        "example":  "The invention of the printing press allowed information to disseminate rapidly.",
        "synonyms":  [
                         "disperse",
                         "promulgate",
                         "propagate"
                     ]
    },
    {
        "word":  "feasible",
        "definition":  "likely to be achieved; practical",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "Hopefully carbon capture technology will be feasible in the future.",
        "synonyms":  [
                         "attainable",
                         "realizable",
                         "expedient"
                     ]
    },
    {
        "word":  "flout",
        "definition":  "break a rule without guilt",
        "part_of_speech":  "verb",
        "group":  1,
        "example":  "Students flouted the classroom\u0027s \"no chewing gum\" rule.",
        "synonyms":  [
                         "defy",
                         "scorn",
                         "contravene"
                     ]
    },
    {
        "word":  "homogeneous",
        "definition":  "composed of similar parts; alike",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "The population in the small town was quite homogeneous, with little diversity.",
        "synonyms":  [
                         "uniform",
                         "analogous",
                         "undistinguishable"
                     ]
    },
    {
        "word":  "humdrum",
        "definition":  "boring; unlikely to excite",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "More often than not, Netflix movies are humdrum, cookie-cutter affairs.",
        "synonyms":  [
                         "mundane",
                         "banal",
                         "prosaic"
                     ]
    },
    {
        "word":  "insipid",
        "definition":  "without flavor; lacking energy",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "The professor was tiring of the students\u0027 insipid remarks.",
        "synonyms":  [
                         "bland",
                         "dull",
                         "vapid"
                     ]
    },
    {
        "word":  "loquacious",
        "definition":  "likely to talk a lot; wordy",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "Loquacious to a fault, Bill never took the hint to, on occasion, shut up.",
        "synonyms":  [
                         "garrulous",
                         "voluble",
                         "verbose"
                     ]
    },
    {
        "word":  "misanthropic",
        "definition":  "having a distaste for humans and society",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "No one has seen that misanthropic hermit in years.",
        "synonyms":  [
                         "reclusive",
                         "unsociable",
                         "inhospitable"
                     ]
    },
    {
        "word":  "misnomer",
        "definition":  "a misleading or inaccurate name",
        "part_of_speech":  "noun",
        "group":  1,
        "example":  "The authoritarian regime likes to call itself a \"democracy,\" an obvious misnomer.",
        "synonyms":  [

                     ]
    },
    {
        "word":  "negligent",
        "definition":  "lacking care or attention",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "The captain\u0027s negligent behavior led to the death of thousands.",
        "synonyms":  [
                         "remiss",
                         "neglectful",
                         "lax"
                     ]
    },
    {
        "word":  "obsequious",
        "definition":  "excessively submissive to authority",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "Dictators tend to surround themselves with obsequious apologists.",
        "synonyms":  [
                         "servile",
                         "sycophantic",
                         "unctuous"
                     ]
    },
    {
        "word":  "placate",
        "definition":  "decrease someone\u0027s anger or other negative emotion",
        "part_of_speech":  "verb",
        "group":  1,
        "example":  "He tried to placate the angry customer by offering a full refund.",
        "synonyms":  [
                         "pacify",
                         "mollify",
                         "conciliate"
                     ]
    },
    {
        "word":  "proclivity",
        "definition":  "a fondness or liking for something",
        "part_of_speech":  "noun",
        "group":  1,
        "example":  "Her proclivity for expensive pastries is wreaking havoc on her finances.",
        "synonyms":  [
                         "inclination",
                         "propensity",
                         "tendency"
                     ]
    },
    {
        "word":  "puerile",
        "definition":  "immature and childish",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "The mature audience was unimpressed by the comedian\u0027s puerile humor.",
        "synonyms":  [
                         "infantile",
                         "juvenile",
                         "inane"
                     ]
    },
    {
        "word":  "quixotic",
        "definition":  "excessively visionary; unfeasible",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "His quixotic dream of creating a world without conflict seemed impossible.",
        "synonyms":  [
                         "idealistic",
                         "utopian",
                         "nonviable"
                     ]
    },
    {
        "word":  "spendthrift",
        "definition":  "someone who spends money recklessly",
        "part_of_speech":  "noun",
        "group":  1,
        "example":  "He was a spendthrift, constantly buying unnecessary items and racking up debt.",
        "synonyms":  [
                         "profligate",
                         "prodigal",
                         "squanderer"
                     ]
    },
    {
        "word":  "taciturn",
        "definition":  "of few words; speaking little",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "He\u0027s generally taciturn, so when he speaks you know it\u0027s important.",
        "synonyms":  [
                         "unforthcoming",
                         "reserved",
                         "retiring"
                     ]
    },
    {
        "word":  "wary",
        "definition":  "exercising caution; careful",
        "part_of_speech":  "adjective",
        "group":  1,
        "example":  "We can\u0027t always be wary; sometimes we have to take risks.",
        "synonyms":  [
                         "chary",
                         "vigilant",
                         "heedful"
                     ]
    },
    {
        "word":  "adulterate",
        "definition":  "damage the quality of; corrupt",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "Chemical runoff regularly adulterates our water supply.",
        "synonyms":  [
                         "defile",
                         "taint",
                         "debase"
                     ]
    },
    {
        "word":  "advocate",
        "definition":  "support; be in favor of",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "The board advocated a more conservative marketing strategy.",
        "synonyms":  [
                         "champion",
                         "back",
                         "endorse"
                     ]
    },
    {
        "word":  "aggrandize",
        "definition":  "enhance one\u0027s power or standing",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "Roman leading men never passed on an opportunity to aggrandize themselves.",
        "synonyms":  [
                         "embellish",
                         "augment",
                         "magnify"
                     ]
    },
    {
        "word":  "alacrity",
        "definition":  "eagerness to do something",
        "part_of_speech":  "noun",
        "group":  2,
        "example":  "The children completed their chores with surprising alacrity.",
        "synonyms":  [
                         "zeal",
                         "haste",
                         "ardor"
                     ]
    },
    {
        "word":  "ambivalent",
        "definition":  "having conflicting emotions; unsure",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "It\u0027s normal to feel ambivalent when moving to a new place.",
        "synonyms":  [
                         "equivocal",
                         "irresolute",
                         "vacillating"
                     ]
    },
    {
        "word":  "ameliorate",
        "definition":  "improve a bad feeling or bad situation",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "Strong service and timely support can ameliorate customer anger.",
        "synonyms":  [
                         "ease",
                         "mitigate",
                         "relieve"
                     ]
    },
    {
        "word":  "amenable",
        "definition":  "(of a person) receptive to change; open",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "The students were amenable to less homework.",
        "synonyms":  [
                         "acquiescent",
                         "compliant",
                         "tractable"
                     ]
    },
    {
        "word":  "anachronistic",
        "definition":  "of the wrong time or era",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Dreams of colonial conquest are anachronistic in today\u0027s modern world.",
        "synonyms":  [
                         "archaic",
                         "outmoded",
                         "antiquated"
                     ]
    },
    {
        "word":  "audacious",
        "definition":  "bold; unafraid of risks",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Elon Musk incessantly pursues his audacious plan for a city on Mars.",
        "synonyms":  [
                         "daring",
                         "intrepid",
                         "unflinching"
                     ]
    },
    {
        "word":  "avaricious",
        "definition":  "greedy; always wanting more",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Free market economies not only tolerate but reward avaricious behavior.",
        "synonyms":  [
                         "acquisitive",
                         "rapacious",
                         "grasping"
                     ]
    },
    {
        "word":  "banal",
        "definition":  "unoriginal and dull; lacking creativity",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "The reviewer grew weary of banal, by-the-book action movies.",
        "synonyms":  [
                         "trite",
                         "platitudinous",
                         "vapid"
                     ]
    },
    {
        "word":  "benign",
        "definition":  "harmless; having little effect",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Despite causing some initial discomfort, the process is benign.",
        "synonyms":  [
                         "innocuous",
                         "benignant",
                         "gentle"
                     ]
    },
    {
        "word":  "brazen",
        "definition":  "shameless and excessively forward",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "John\u0027s brazen interruptions of his boss\u0027 speech were not received well.",
        "synonyms":  [
                         "presumptuous",
                         "brash",
                         "unabashed"
                     ]
    },
    {
        "word":  "calumny",
        "definition":  "slander and defamation",
        "part_of_speech":  "noun",
        "group":  2,
        "example":  "The tabloid had an axe to grind and thus spread calumny daily.",
        "synonyms":  [
                         "libel",
                         "obloquy",
                         "denigration"
                     ]
    },
    {
        "word":  "candid",
        "definition":  "honest; without deception",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Honesty is important, but don\u0027t be too candid in job interviews.",
        "synonyms":  [
                         "blunt",
                         "forthright",
                         "frank"
                     ]
    },
    {
        "word":  "castigate",
        "definition":  "scold someone harshly",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "The entire country castigated the governor for his ill-timed statement.",
        "synonyms":  [
                         "rebuke",
                         "lambast",
                         "berate"
                     ]
    },
    {
        "word":  "caustic",
        "definition":  "(of speech) hostile and bitter",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Reality TV thrives on conflict and caustic discourse between characters.",
        "synonyms":  [
                         "derisive",
                         "scathing",
                         "mordant"
                     ]
    },
    {
        "word":  "construe",
        "definition":  "understand something subjectively",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "It was difficult to construe the retreat as anything but a massive defeat.",
        "synonyms":  [
                         "read",
                         "parse",
                         "decode"
                     ]
    },
    {
        "word":  "contrite",
        "definition":  "feeling regretful or guilty",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Genuinely contrite, the man accepted his sentence without protest.",
        "synonyms":  [
                         "repentant",
                         "rueful",
                         "chastened"
                     ]
    },
    {
        "word":  "convoluted",
        "definition":  "difficult to understand or follow",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Rome\u0027s roads are a convoluted mess.",
        "synonyms":  [
                         "serpentine",
                         "tortuous",
                         "Byzantine"
                     ]
    },
    {
        "word":  "covet",
        "definition":  "strongly desire; yearn for",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "To improve our mental health, let\u0027s try to not covet the possessions of others.",
        "synonyms":  [
                         "long for",
                         "hanker for",
                         "ache for"
                     ]
    },
    {
        "word":  "craven",
        "definition":  "lacking bravery; weak-kneed",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "The army surrendered but not because the soldiers were craven.",
        "synonyms":  [
                         "quaking",
                         "timid",
                         "lily-livered"
                     ]
    },
    {
        "word":  "decorum",
        "definition":  "politeness and proper behavior",
        "part_of_speech":  "noun",
        "group":  2,
        "example":  "The mother encouraged her son to have decorum.",
        "synonyms":  [
                         "propriety",
                         "decency",
                         "deportment"
                     ]
    },
    {
        "word":  "deft",
        "definition":  "highly proficient; skilled",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "Jane\u0027s deft fingers navigate the 88 piano keys effortlessly.",
        "synonyms":  [
                         "adroit",
                         "artful",
                         "dexterous"
                     ]
    },
    {
        "word":  "demur",
        "definition":  "hesitate or object; express doubt",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "Most employees demurred when asked to undergo daily Covid testing.",
        "synonyms":  [
                         "take issue with",
                         "cavil",
                         "dissent"
                     ]
    },
    {
        "word":  "derivative",
        "definition":  "based on someone else\u0027s work (often used in a negative sense)",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "The film is derivative, but proudly so.",
        "synonyms":  [
                         "trite",
                         "imitative",
                         "hackneyed"
                     ]
    },
    {
        "word":  "desiccate",
        "definition":  "dry out; remove all moisture",
        "part_of_speech":  "verb",
        "group":  2,
        "example":  "The land was thoroughly desiccated.",
        "synonyms":  [
                         "dehydrate",
                         "drain",
                         "parch"
                     ]
    },
    {
        "word":  "diatribe",
        "definition":  "an angry rant; verbal abuse",
        "part_of_speech":  "noun",
        "group":  2,
        "example":  "Her diatribe on the ills of society was too hostile to persuade anyone.",
        "synonyms":  [
                         "tirade",
                         "harangue",
                         "denunciation"
                     ]
    },
    {
        "word":  "incredulous",
        "definition":  "doubtful and disbelieving",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "People are understandably incredulous at the prospect of intergalactic travel.",
        "synonyms":  [
                         "dubious",
                         "unconvinced",
                         "suspicious"
                     ]
    },
    {
        "word":  "ingenuous",
        "definition":  "naive and lacking experience",
        "part_of_speech":  "adjective",
        "group":  2,
        "example":  "We long for the ingenuous days of our youth.",
        "synonyms":  [
                         "unguarded",
                         "green",
                         "unworldly"
                     ]
    },
    {
        "word":  "abate",
        "definition":  "decrease in intensity; lessen",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "He relied on TV to abate his lonelinesss.",
        "synonyms":  [
                         "subside",
                         "dwindle",
                         "ebb"
                     ]
    },
    {
        "word":  "abjure",
        "definition":  "strongly reject (an idea); forgo",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "Under enough pressure, many will abjure their principles.",
        "synonyms":  [
                         "renounce",
                         "relinquish",
                         "forgo"
                     ]
    },
    {
        "word":  "anomalous",
        "definition":  "differing from what is normal; atypical",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "Because the results are anomalous, further study is needed.",
        "synonyms":  [
                         "atypical",
                         "aberrant",
                         "exceptional"
                     ]
    },
    {
        "word":  "antipathy",
        "definition":  "profound hostility or hatred",
        "part_of_speech":  "noun",
        "group":  3,
        "example":  "The two generals harbored significant antipathy toward each other.",
        "synonyms":  [
                         "animosity",
                         "aversion",
                         "enmity"
                     ]
    },
    {
        "word":  "arcane",
        "definition":  "comprehended by very few people; secret",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "The profession keeps things arcane to discourage newcomers.",
        "synonyms":  [
                         "mysterious",
                         "esoteric",
                         "enigmatic"
                     ]
    },
    {
        "word":  "arduous",
        "definition":  "very challenging; needing great effort",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "Military bootcamp is almost always an arduous experience.",
        "synonyms":  [
                         "onerous",
                         "laborious",
                         "taxing"
                     ]
    },
    {
        "word":  "artless",
        "definition":  "naive; inexperienced",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "His artless comments about politics revealed how naive he was.",
        "synonyms":  [
                         "ingenuous",
                         "guileless",
                         "callow"
                     ]
    },
    {
        "word":  "ascetic",
        "definition":  "(of a lifestyle) very strict and lacking luxury",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "Despite her vast wealth, she has adopted ascetic tendencies.",
        "synonyms":  [
                         "austere",
                         "self-denying",
                         "abstemious"
                     ]
    },
    {
        "word":  "assuage",
        "definition":  "decrease a negative feeling",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "The prime minister\u0027s speech assuaged the fears of the population.",
        "synonyms":  [
                         "mitigate",
                         "allay",
                         "palliate"
                     ]
    },
    {
        "word":  "betray",
        "definition":  "unknowingly disclose or reveal",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "Her excessive blinking betrayed her nervousness.",
        "synonyms":  [
                         "divulge",
                         "expose",
                         "give away"
                     ]
    },
    {
        "word":  "bucolic",
        "definition":  "associated with tranquil rural life",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "Hoping to escape the city, the couple opted for a bucolic Airbnb.",
        "synonyms":  [
                         "rustic",
                         "pastoral",
                         "idyllic"
                     ]
    },
    {
        "word":  "burgeon",
        "definition":  "quickly increase or grow; skyrocket",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "Because of technological advancements, crop yields have burgeoned.",
        "synonyms":  [
                         "swell",
                         "proliferate",
                         "mushroom"
                     ]
    },
    {
        "word":  "cacophonous",
        "definition":  "extremely noisy; grating",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "The parents hated the drumkit because of its cacophonous racket.",
        "synonyms":  [
                         "deafening",
                         "raucous",
                         "discordant"
                     ]
    },
    {
        "word":  "canonize",
        "definition":  "treat like a god; deeply venerate",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "The later Roman empire began canonizing its leaders.",
        "synonyms":  [
                         "beatify",
                         "sanctify",
                         "exalt"
                     ]
    },
    {
        "word":  "censure",
        "definition":  "strongly criticize or disapprove",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "The senator was publicly censured for her vile remarks.",
        "synonyms":  [
                         "condemn",
                         "chastise",
                         "castigate"
                     ]
    },
    {
        "word":  "chicanery",
        "definition":  "using deception to attain a certain goal",
        "part_of_speech":  "noun",
        "group":  3,
        "example":  "His masterful chicanery allowed the realization of his political goals.",
        "synonyms":  [
                         "duplicity",
                         "subterfuge",
                         "skulduggery"
                     ]
    },
    {
        "word":  "coalesce",
        "definition":  "bring elements together; unite",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "In times of conflict, citizens must coalesce and rally around a common cause.",
        "synonyms":  [
                         "merge",
                         "amalgamate",
                         "converge"
                     ]
    },
    {
        "word":  "cogent",
        "definition":  "persuasive and clear; compelling",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "Known for his cogent essays, the author has considerable influence.",
        "synonyms":  [
                         "sound",
                         "reasoned",
                         "lucid"
                     ]
    },
    {
        "word":  "compelling",
        "definition":  "persuasive and clear",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "The argument was not compelling due to its logical fallacies.",
        "synonyms":  [
                         "cogent",
                         "sound",
                         "rational"
                     ]
    },
    {
        "word":  "contend",
        "definition":  "argue a certain point of view; assert",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "The researchers contend that society will collapse by 2050.",
        "synonyms":  [
                         "assert",
                         "maintain",
                         "affirm"
                     ]
    },
    {
        "word":  "copious",
        "definition":  "existing in great supply; abundant",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "The once copious supply of used cars dried up quickly during the pandemic.",
        "synonyms":  [
                         "ample",
                         "myriad",
                         "multitudinous"
                     ]
    },
    {
        "word":  "cosmopolitan",
        "definition":  "(of a city) highly diverse",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "New York City is arguably the most cosmopolitan metropolis in the world.",
        "synonyms":  [
                         "international",
                         "universal",
                         "global"
                     ]
    },
    {
        "word":  "deference",
        "definition":  "high regard and respect; esteem",
        "part_of_speech":  "noun",
        "group":  3,
        "example":  "In certain cultures, it\u0027s important to treat the elderly with marked deference.",
        "synonyms":  [
                         "courtesy",
                         "veneration",
                         "civility"
                     ]
    },
    {
        "word":  "desultory",
        "definition":  "unplanned; without enthusiasm",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "The teacher\u0027s desultory instruction did little to inspire the students.",
        "synonyms":  [
                         "halfhearted",
                         "lukewarm",
                         "perfunctory"
                     ]
    },
    {
        "word":  "diffident",
        "definition":  "reserved or shy; without confidence",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "University forced John to come out of his diffident shell.",
        "synonyms":  [
                         "bashful",
                         "unassuming",
                         "meek"
                     ]
    },
    {
        "word":  "dilatory",
        "definition":  "slow and unhurried; meant to stall",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "The filibuster is a dilatory measure designed to impede Congressional operations.",
        "synonyms":  [
                         "sluggish",
                         "indolent",
                         "deferring"
                     ]
    },
    {
        "word":  "equivocate",
        "definition":  "speak evasively or dishonestly; avoid taking a stance",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "Seasoned sports stars recognize it\u0027s best to equivocate when asked pointed questions.",
        "synonyms":  [
                         "prevaricate",
                         "cavil",
                         "waver"
                     ]
    },
    {
        "word":  "polarize",
        "definition":  "separate into two opposing groups",
        "part_of_speech":  "verb",
        "group":  3,
        "example":  "The inflammatory rhetoric is designed to polarize the populace.",
        "synonyms":  [
                         "divide",
                         "factionalize",
                         "dichotomize"
                     ]
    },
    {
        "word":  "prodigal",
        "definition":  "carelessly wasteful; extravagant",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "Prodigal resource extraction does not benefit an economy long-term.",
        "synonyms":  [
                         "improvident",
                         "imprudent",
                         "profligate"
                     ]
    },
    {
        "word":  "verbose",
        "definition":  "excessively talkative; wordy",
        "part_of_speech":  "adjective",
        "group":  3,
        "example":  "The professor\u0027s verbose lectures were surprisingly entertaining.",
        "synonyms":  [
                         "loquacious",
                         "garrulous",
                         "voluble"
                     ]
    },
    {
        "word":  "abstain",
        "definition":  "avoid taking part in something",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "He has abstained from alcohol for over three years.",
        "synonyms":  [
                         "refrain",
                         "eschew",
                         "shun"
                     ]
    },
    {
        "word":  "approbation",
        "definition":  "appreciation toward someone",
        "part_of_speech":  "noun",
        "group":  4,
        "example":  "Roman leaders thrived on approbation from the masses.",
        "synonyms":  [
                         "recognition",
                         "commendation",
                         "laudation"
                     ]
    },
    {
        "word":  "cherish",
        "definition":  "greatly love or protect something",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "We must cherish the memories of youth.",
        "synonyms":  [
                         "revere",
                         "adore",
                         "dote on"
                     ]
    },
    {
        "word":  "corroborate",
        "definition":  "lend support to; bolster",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "We\u0027ve yet to find evidence that corroborates our hypothesis.",
        "synonyms":  [
                         "validate",
                         "substantiate",
                         "reinforce"
                     ]
    },
    {
        "word":  "disparate",
        "definition":  "different or contrasting",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "The politicians\u0027 disparate viewpoints could not be reconciled.",
        "synonyms":  [
                         "varying",
                         "divergent",
                         "heterogeneous"
                     ]
    },
    {
        "word":  "emulate",
        "definition":  "imitate someone or something",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "To improve in a specific field, simply emulate the actions of the experts.",
        "synonyms":  [
                         "mimic",
                         "parallel",
                         "mirror"
                     ]
    },
    {
        "word":  "enervate",
        "definition":  "sap the energy out of someone; fatigue",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "The coach took pride in enervating the players.",
        "synonyms":  [
                         "exhaust",
                         "weary",
                         "enfeeble"
                     ]
    },
    {
        "word":  "ephemeral",
        "definition":  "extremely shortlasting",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "It was an ephemeral thought that quickly melted away.",
        "synonyms":  [
                         "transient",
                         "fleeting",
                         "momentary"
                     ]
    },
    {
        "word":  "fervid",
        "definition":  "excessively energetic or eager",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "The leader\u0027s fervid pleas did not go unheard.",
        "synonyms":  [
                         "ardent",
                         "fervent",
                         "zealous"
                     ]
    },
    {
        "word":  "garrulous",
        "definition":  "tending to talk too much; wordy",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "Because she\u0027s garrulous, this meeting will take forever.",
        "synonyms":  [
                         "voluble",
                         "long-winded",
                         "verbose"
                     ]
    },
    {
        "word":  "incendiary",
        "definition":  "provocative; causing conflict",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "His incendiary words did little to appease their anger.",
        "synonyms":  [
                         "inflammatory",
                         "subversive",
                         "agitational"
                     ]
    },
    {
        "word":  "inimical",
        "definition":  "damaging; hostile in manner or tone",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "The entire affair has been inimical to our interests.",
        "synonyms":  [
                         "detrimental",
                         "pernicious",
                         "antagonistic"
                     ]
    },
    {
        "word":  "intimate",
        "definition":  "subtly suggest or imply",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "The professor intimated there would be a test next week.",
        "synonyms":  [
                         "insinuate",
                         "hint",
                         "allude to"
                     ]
    },
    {
        "word":  "invigorate",
        "definition":  "provide energy or vitality to",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "Nothing invigorates the body like a good night\u0027s rest.",
        "synonyms":  [
                         "revitalize",
                         "vivify",
                         "rejuvenate"
                     ]
    },
    {
        "word":  "mitigate",
        "definition":  "diminish negative feelings or situation",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "You can take some medicine to mitigate the pain.",
        "synonyms":  [
                         "alleviate",
                         "attenuate",
                         "allay"
                     ]
    },
    {
        "word":  "obsolete",
        "definition":  "no longer useful; outmoded",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "Fax machines are mostly obsolete now.",
        "synonyms":  [
                         "antiquated",
                         "archaic",
                         "anachronistic"
                     ]
    },
    {
        "word":  "opaque",
        "definition":  "unclear; hard to comprehend",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "The scientist\u0027s opaque explanation left the audience more confused than enlightened.",
        "synonyms":  [
                         "puzzling",
                         "baffling",
                         "inexplicable"
                     ]
    },
    {
        "word":  "paradigmatic",
        "definition":  "representing the standard example",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "Coconuts, palm trees, and beaches are paradigmatic tropical things.",
        "synonyms":  [
                         "quintessential",
                         "archetypal",
                         "prototypical"
                     ]
    },
    {
        "word":  "pedantic",
        "definition":  "overly concerned with (minor) details",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "The pedantic instruction annoys and frustrates the students.",
        "synonyms":  [
                         "nitpicky",
                         "fastidious",
                         "fussy"
                     ]
    },
    {
        "word":  "placid",
        "definition":  "calm; free from activity or irritation",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "Most of us seek placid settings on our vacations.",
        "synonyms":  [
                         "tranquil",
                         "pacific",
                         "still"
                     ]
    },
    {
        "word":  "polemical",
        "definition":  "giving a strong, controversial opinion",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "His work is usually polemical, but this latest is surprisingly neutral.",
        "synonyms":  [
                         "virulent",
                         "corrosive",
                         "scathing"
                     ]
    },
    {
        "word":  "precipitate",
        "definition":  "cause to happen",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "Religious tension precipitated the conflict.",
        "synonyms":  [
                         "trigger",
                         "provoke",
                         "occasion"
                     ]
    },
    {
        "word":  "profundity",
        "definition":  "sagacity",
        "part_of_speech":  "noun",
        "group":  4,
        "example":  "James claims to possess profundity, but his advice often comes from Google.",
        "synonyms":  [
                         "sagacity",
                         "acuity",
                         "percipience"
                     ]
    },
    {
        "word":  "prophetic",
        "definition":  "able to correctly predict the future",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "If you collect enough predictions, one will inevitably seem prophetic.",
        "synonyms":  [
                         "prescient",
                         "prognostic",
                         "divinatory"
                     ]
    },
    {
        "word":  "prudent",
        "definition":  "wise in decision-making",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "Not saving for retirement is simply not prudent.",
        "synonyms":  [
                         "judicious",
                         "sagacious",
                         "shrewd"
                     ]
    },
    {
        "word":  "punctilious",
        "definition":  "highly concerned with details or manners",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "The chef is very punctilious in selecting ingredients.",
        "synonyms":  [
                         "meticulous",
                         "scrupulous",
                         "painstaking"
                     ]
    },
    {
        "word":  "recondite",
        "definition":  "obscure and difficult to understand",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "The book is far too recondite to be enjoyed by most.",
        "synonyms":  [
                         "arcane",
                         "obscure",
                         "esoteric"
                     ]
    },
    {
        "word":  "scrupulous",
        "definition":  "careful with details",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "He was scrupulous in his research, double-checking every source.",
        "synonyms":  [
                         "meticulous",
                         "diligent",
                         "thorough"
                     ]
    },
    {
        "word":  "tranquil",
        "definition":  "peaceful; free from activity",
        "part_of_speech":  "adjective",
        "group":  4,
        "example":  "A trip to the spa is normally a tranquil experience.",
        "synonyms":  [
                         "reposeful",
                         "serene",
                         "placid"
                     ]
    },
    {
        "word":  "vacillate",
        "definition":  "go back and forth with one\u0027s view",
        "part_of_speech":  "verb",
        "group":  4,
        "example":  "An expert politician, he vacillated when asked an uncomfortable question.",
        "synonyms":  [
                         "dither",
                         "waver",
                         "oscillate"
                     ]
    },
    {
        "word":  "aloof",
        "definition":  "not warm or friendly; impersonal",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "She sat in the corner, aloof from the rest of us.",
        "synonyms":  [
                         "standoffish",
                         "detached",
                         "withdrawn"
                     ]
    },
    {
        "word":  "clangor",
        "definition":  "a disturbingly loud noise",
        "part_of_speech":  "noun",
        "group":  5,
        "example":  "The clangor of the construction site interrupted our conversation.",
        "synonyms":  [
                         "racket",
                         "commotion",
                         "clatter"
                     ]
    },
    {
        "word":  "conventional",
        "definition":  "adhering to established practices or accepted standards",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "He has very conventional views about education.",
        "synonyms":  [
                         "prosaic",
                         "pedestrian",
                         "formulaic"
                     ]
    },
    {
        "word":  "debunk",
        "definition":  "prove a belief or idea false",
        "part_of_speech":  "verb",
        "group":  5,
        "example":  "The scientist debunked the myth that vaccines cause autism.",
        "synonyms":  [
                         "discredit",
                         "controvert",
                         "confute"
                     ]
    },
    {
        "word":  "diminutive",
        "definition":  "exceptionally small in size or stature",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "Her diminutive stature did not affect her powerful voice.",
        "synonyms":  [
                         "petite",
                         "minute",
                         "minuscule"
                     ]
    },
    {
        "word":  "discernible",
        "definition":  "able to be recognized or understood",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "There was no discernible change in his attitude.",
        "synonyms":  [
                         "manifest",
                         "evident",
                         "perceptible"
                     ]
    },
    {
        "word":  "enigmatic",
        "definition":  "hard to understand; mysterious",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "Her silence on the issue was enigmatic.",
        "synonyms":  [
                         "inexplicable",
                         "baffling",
                         "inscrutable"
                     ]
    },
    {
        "word":  "estranged",
        "definition":  "emotionally distanced from someone",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "He became estranged from his family after moving overseas.",
        "synonyms":  [
                         "alienated",
                         "detached",
                         "severed"
                     ]
    },
    {
        "word":  "extravagant",
        "definition":  "excessive, especially in terms of cost",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "His extravagant lifestyle was unsustainable in the long term.",
        "synonyms":  [
                         "profligate",
                         "thriftless",
                         "prodigal"
                     ]
    },
    {
        "word":  "fanciful",
        "definition":  "highly imaginative; unrealistic",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "His fanciful ideas about living on Mars were amusing.",
        "synonyms":  [
                         "impractical",
                         "flighty",
                         "quixotic"
                     ]
    },
    {
        "word":  "frivolous",
        "definition":  "lacking in seriousness or importance; silly",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "She dismissed his comment as frivolous.",
        "synonyms":  [
                         "flippant",
                         "facetious",
                         "fatuous"
                     ]
    },
    {
        "word":  "heterogeneous",
        "definition":  "composed of varying, diverse elements",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "The population of the city is quite heterogeneous.",
        "synonyms":  [
                         "miscellaneous",
                         "divergent",
                         "motley"
                     ]
    },
    {
        "word":  "imperious",
        "definition":  "having an arrogant or domineering manner",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "His imperious demeanor was off-putting to his colleagues.",
        "synonyms":  [
                         "peremptory",
                         "overbearing",
                         "officious"
                     ]
    },
    {
        "word":  "impertinent",
        "definition":  "disrespectful or inappropriate",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "His impertinent behavior at the meeting shocked everyone.",
        "synonyms":  [
                         "insolent",
                         "brazen",
                         "impudent"
                     ]
    },
    {
        "word":  "invasive",
        "definition":  "infringing on other\u0027s privacy",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "The invasive surveillance techniques used by the government were criticized.",
        "synonyms":  [
                         "meddlesome",
                         "obtrusive",
                         "intrusive"
                     ]
    },
    {
        "word":  "irresolute",
        "definition":  "uncertain or lacking determination",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "She was irresolute about her decision to move abroad.",
        "synonyms":  [
                         "vacillating",
                         "dithering",
                         "faltering"
                     ]
    },
    {
        "word":  "laudable",
        "definition":  "worthy of admiration or praise",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "His efforts to protect the environment were laudable.",
        "synonyms":  [
                         "meritorious",
                         "commendable",
                         "estimable"
                     ]
    },
    {
        "word":  "lax",
        "definition":  "not diligent or careful; casual",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "The manager\u0027s lax attitude towards safety was a cause for concern.",
        "synonyms":  [
                         "slipshod",
                         "slack",
                         "negligent"
                     ]
    },
    {
        "word":  "marginalize",
        "definition":  "treat someone or something as insignificant",
        "part_of_speech":  "verb",
        "group":  5,
        "example":  "They felt marginalized by society because of their religious beliefs.",
        "synonyms":  [
                         "sideline",
                         "disregard",
                         "ostracize"
                     ]
    },
    {
        "word":  "panache",
        "definition":  "a stylish and confident manner",
        "part_of_speech":  "noun",
        "group":  5,
        "example":  "The actor performed the role with panache.",
        "synonyms":  [
                         "flamboyance",
                         "self-assurance",
                         "flair"
                     ]
    },
    {
        "word":  "plodding",
        "definition":  "moving slowly or laboriously",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "The plodding pace of the meeting made him feel sleepy.",
        "synonyms":  [
                         "lumbering",
                         "slogging",
                         "ambling"
                     ]
    },
    {
        "word":  "prosaic",
        "definition":  "straightforward; unoriginal; unimaginative",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "His speech was prosaic, devoid of any rhetorical flourish.",
        "synonyms":  [
                         "mundane",
                         "humdrum",
                         "pedestrian"
                     ]
    },
    {
        "word":  "remedial",
        "definition":  "serving to correct or cure something",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "She was placed in a remedial reading class to improve her skills.",
        "synonyms":  [
                         "restorative",
                         "palliative",
                         "rectifying"
                     ]
    },
    {
        "word":  "restive",
        "definition":  "demonstrating difficulty in staying still",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "The audience grew restive as the presentation continued.",
        "synonyms":  [
                         "restless",
                         "agitated",
                         "skittish"
                     ]
    },
    {
        "word":  "sporadic",
        "definition":  "happening occasionally and irregularly",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "There have been sporadic outbreaks of the disease.",
        "synonyms":  [
                         "occasional",
                         "intermittent",
                         "scattered"
                     ]
    },
    {
        "word":  "stigmatize",
        "definition":  "label or mark as disgraceful",
        "part_of_speech":  "verb",
        "group":  5,
        "example":  "The campaign aims to stigmatize smoking in public areas.",
        "synonyms":  [
                         "condemn",
                         "disparage",
                         "pillory"
                     ]
    },
    {
        "word":  "undermine",
        "definition":  "weaken or sabotage, often subtly",
        "part_of_speech":  "verb",
        "group":  5,
        "example":  "The constant criticism served to undermine her confidence.",
        "synonyms":  [
                         "subvert",
                         "compromise",
                         "impair"
                     ]
    },
    {
        "word":  "utterly",
        "definition":  "completely and without exception",
        "part_of_speech":  "adverb",
        "group":  5,
        "example":  "He was utterly convinced of his own success.",
        "synonyms":  [
                         "wholly",
                         "absolutely",
                         "outright"
                     ]
    },
    {
        "word":  "weary",
        "definition":  "feeling tired or exhausted",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "After the long journey, they were weary and ready to rest.",
        "synonyms":  [
                         "fatigued",
                         "sapped",
                         "enervated"
                     ]
    },
    {
        "word":  "zealous",
        "definition":  "intensely passionate",
        "part_of_speech":  "adjective",
        "group":  5,
        "example":  "She was a zealous advocate for human rights.",
        "synonyms":  [
                         "fervent",
                         "ardent",
                         "fervid"
                     ]
    },
    {
        "word":  "admonish",
        "definition":  "scold someone seriously",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "The teacher had to admonish the student for repeatedly interrupting the class.",
        "synonyms":  [
                         "reprimand",
                         "upbraid",
                         "chastise"
                     ]
    },
    {
        "word":  "aesthetic",
        "definition":  "pertaining to beauty or the appreciation thereof",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "She has an aesthetic sense of fashion that always impresses her friends.",
        "synonyms":  [
                         "ornamental",
                         "decorative",
                         "stylish"
                     ]
    },
    {
        "word":  "affectation",
        "definition":  "a pretense or show meant to impress others",
        "part_of_speech":  "noun",
        "group":  6,
        "example":  "His French accent was an affectation as he had never been to France.",
        "synonyms":  [
                         "artificiality",
                         "posturing",
                         "airs"
                     ]
    },
    {
        "word":  "alleviate",
        "definition":  "lessen the intensity or severity of something negative",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "Taking a warm bath can alleviate the symptoms of a cold.",
        "synonyms":  [
                         "relieve",
                         "allay",
                         "temper"
                     ]
    },
    {
        "word":  "analogous",
        "definition":  "comparable or similar to",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "The relationship between a painter and canvas is analogous to a writer and the blank page.",
        "synonyms":  [
                         "parallel",
                         "kindred",
                         "equivalent"
                     ]
    },
    {
        "word":  "bolster",
        "definition":  "lend support or boost",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "She brought her best friend along to bolster her confidence.",
        "synonyms":  [
                         "reinforce",
                         "fortify",
                         "prop up"
                     ]
    },
    {
        "word":  "chauvinistic",
        "definition":  "excessively patriotic or biased in favor of a group or cause",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "His chauvinistic pride in his country blinded him to its flaws.",
        "synonyms":  [
                         "nationalistic",
                         "jingoistic",
                         "prejudiced"
                     ]
    },
    {
        "word":  "connoisseur",
        "definition":  "a discerning expert in matters of taste",
        "part_of_speech":  "noun",
        "group":  6,
        "example":  "As a connoisseur of fine wines, he was asked to select the vintages for the royal dinner.",
        "synonyms":  [
                         "aficionado",
                         "savant",
                         "enthusiast"
                     ]
    },
    {
        "word":  "dissemble",
        "definition":  "hide or misrepresent one\u0027s true feelings or beliefs",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "Despite his anger, he had to dissemble in order to maintain his composure.",
        "synonyms":  [
                         "feign",
                         "masquerade",
                         "bluff"
                     ]
    },
    {
        "word":  "dogged",
        "definition":  "demonstrating tenacity and an unwillingness to give up",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "Despite the challenges, she pursued her goal with dogged determination.",
        "synonyms":  [
                         "resolved",
                         "pertinacious",
                         "unflagging"
                     ]
    },
    {
        "word":  "dupe",
        "definition":  "trick or fool someone",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "He was duped into signing the contract without reading the fine print.",
        "synonyms":  [
                         "hoodwink",
                         "deceive",
                         "swindle"
                     ]
    },
    {
        "word":  "empirical",
        "definition":  "based on observation or experience rather than conjecture",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "Her empirical research provided data that supported her hypothesis.",
        "synonyms":  [
                         "factual",
                         "verifiable",
                         "experimental"
                     ]
    },
    {
        "word":  "engender",
        "definition":  "produce or stimulate the development of something",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "The politician\u0027s controversial statement engendered a wave of criticism.",
        "synonyms":  [
                         "give rise to",
                         "induce",
                         "provoke"
                     ]
    },
    {
        "word":  "entitled",
        "definition":  "assuming oneself to be deserving of special rights or privileges",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "His entitled attitude put off his colleagues.",
        "synonyms":  [
                         "spoiled",
                         "arrogant",
                         "pompous"
                     ]
    },
    {
        "word":  "pertinacious",
        "definition":  "stubbornly holding onto a belief or course of action",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "Her pertinacious efforts to get the law changed eventually paid off.",
        "synonyms":  [
                         "assiduous",
                         "resolute",
                         "dogged"
                     ]
    },
    {
        "word":  "presumptuous",
        "definition":  "overstepping boundaries, often in an overconfident way",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "It would be presumptuous of me to comment on the matter without knowing all the facts.",
        "synonyms":  [
                         "brazen",
                         "arrogant",
                         "audacious"
                     ]
    },
    {
        "word":  "probity",
        "definition":  "the characteristic of having strong ethical standards",
        "part_of_speech":  "noun",
        "group":  6,
        "example":  "His reputation for probity in all aspects of his life is well known.",
        "synonyms":  [
                         "integrity",
                         "rectitude",
                         "virtue"
                     ]
    },
    {
        "word":  "proliferate",
        "definition":  "rapidly increase or multiply in number",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "Once introduced to the lake, the non-native species began to proliferate.",
        "synonyms":  [
                         "snowball",
                         "skyrocket",
                         "burgeon"
                     ]
    },
    {
        "word":  "specious",
        "definition":  "seemingly reasonable but actually wrong",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "Her argument, though specious, convinced many people due to her charisma.",
        "synonyms":  [
                         "misleading",
                         "deceptive",
                         "fallacious"
                     ]
    },
    {
        "word":  "spurious",
        "definition":  "not genuine; bogus",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "The art dealer could tell immediately that the painting was spurious.",
        "synonyms":  [
                         "specious",
                         "sham",
                         "contrived"
                     ]
    },
    {
        "word":  "subjective",
        "definition":  "pertaining to personal feelings rather than objective reality",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "Art is highly subjective, with beauty truly lying in the eyes of the beholder.",
        "synonyms":  [
                         "instinctive",
                         "intuitive",
                         "biased"
                     ]
    },
    {
        "word":  "subvert",
        "definition":  "undermine or weaken, typically an authority of some sort",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "The rebel\u0027s plan was to subvert the government by spreading propaganda.",
        "synonyms":  [
                         "destabilize",
                         "sabotage",
                         "undercut"
                     ]
    },
    {
        "word":  "timorous",
        "definition":  "displaying nervousness; lacking confidence",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "The timorous rabbit hid in its burrow at the sound of a human voice.",
        "synonyms":  [
                         "quaking",
                         "self-effacing",
                         "unassuming"
                     ]
    },
    {
        "word":  "tortuous",
        "definition":  "marked by numerous twists or turns",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "The mountain road was tortuous and required careful driving.",
        "synonyms":  [
                         "winding",
                         "undulating",
                         "sinuous"
                     ]
    },
    {
        "word":  "tractable",
        "definition":  "easily managed or controlled",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "The tractable dog quickly learned to fetch the newspaper.",
        "synonyms":  [
                         "amenable",
                         "compliant",
                         "docile"
                     ]
    },
    {
        "word":  "transient",
        "definition":  "not lasting, enduring, or permanent; transitory",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "The rainbow is a transient spectacle, fading away soon after it appears.",
        "synonyms":  [
                         "ephemeral",
                         "fleeting",
                         "evanescent"
                     ]
    },
    {
        "word":  "ubiquitous",
        "definition":  "being everywhere at once",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "The influence of technology is ubiquitous in the modern world.",
        "synonyms":  [
                         "omnipresent",
                         "pervasive",
                         "universal"
                     ]
    },
    {
        "word":  "underscore",
        "definition":  "emphasize or show the importance of something",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "The accident underscores the danger of driving while distracted.",
        "synonyms":  [
                         "highlight",
                         "accentuate",
                         "foreground"
                     ]
    },
    {
        "word":  "venal",
        "definition":  "open to bribery or corruption",
        "part_of_speech":  "adjective",
        "group":  6,
        "example":  "The venal politician was found guilty of taking bribes.",
        "synonyms":  [
                         "grafting",
                         "unscrupulous",
                         "mercenary"
                     ]
    },
    {
        "word":  "venerate",
        "definition":  "regard with deep respect or reverence",
        "part_of_speech":  "verb",
        "group":  6,
        "example":  "In many cultures, ancestors are venerated and considered sources of wisdom.",
        "synonyms":  [
                         "adulate",
                         "hallow",
                         "deify"
                     ]
    },
    {
        "word":  "appease",
        "definition":  "calm someone down",
        "part_of_speech":  "verb",
        "group":  7,
        "example":  "The parents bought toys to appease their upset child.",
        "synonyms":  [
                         "placate",
                         "pacify",
                         "mollify"
                     ]
    },
    {
        "word":  "arbitrary",
        "definition":  "determined by chance, not reason",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The arbitrary nature of the lottery means that anyone can win.",
        "synonyms":  [
                         "capricious",
                         "erratic",
                         "haphazard"
                     ]
    },
    {
        "word":  "archaic",
        "definition":  "ancient or outmoded; out of date",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The archaic legal language was difficult for the modern reader to understand.",
        "synonyms":  [
                         "anachronistic",
                         "obsolete",
                         "antiquated"
                     ]
    },
    {
        "word":  "clamorous",
        "definition":  "characterized by extremely loud noise",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The crowd became clamorous as the hours passed, eager for the event to start.",
        "synonyms":  [
                         "vociferous",
                         "raucous",
                         "rowdy"
                     ]
    },
    {
        "word":  "dearth",
        "definition":  "lack of something in a particular area",
        "part_of_speech":  "noun",
        "group":  7,
        "example":  "There is a dearth of affordable housing in most major cities.",
        "synonyms":  [
                         "scarcity",
                         "shortfall",
                         "want"
                     ]
    },
    {
        "word":  "explicable",
        "definition":  "able to be explained or understood",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The stock market is explicable if you understand economics.",
        "synonyms":  [
                         "comprehensible",
                         "interpretable",
                         "intelligible"
                     ]
    },
    {
        "word":  "hyperbole",
        "definition":  "exaggeration to make a point or be funny",
        "part_of_speech":  "noun",
        "group":  7,
        "example":  "Saying \"I\u0027ve told you a million times\" is an example of hyperbole.",
        "synonyms":  [
                         "overstatement",
                         "embellishment",
                         "amplification"
                     ]
    },
    {
        "word":  "immutable",
        "definition":  "not capable of being changed",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The basic principles of human rights are considered immutable.",
        "synonyms":  [
                         "rigid",
                         "indelible",
                         "entrenched"
                     ]
    },
    {
        "word":  "indefatigable",
        "definition":  "highly determined; resistent to tiring out",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The indefatigable scientist worked on her research late into the night.",
        "synonyms":  [
                         "unwearying",
                         "unflagging",
                         "unrelenting"
                     ]
    },
    {
        "word":  "indolent",
        "definition":  "habitually lazy; averse to activity",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "He was indolent and rarely helped with household chores.",
        "synonyms":  [
                         "idle",
                         "slothful",
                         "lackadaisical"
                     ]
    },
    {
        "word":  "insular",
        "definition":  "limited in outlook or experience; narrow",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "Living in a small, rural community can sometimes lead to an insular worldview.",
        "synonyms":  [
                         "parochial",
                         "provincial",
                         "myopic"
                     ]
    },
    {
        "word":  "intransigent",
        "definition":  "refusing to compromise; stubborn",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The intransigent attitude of both parties led to the stalemate in negotiations.",
        "synonyms":  [
                         "unyielding",
                         "unwavering",
                         "obstinate"
                     ]
    },
    {
        "word":  "intrepid",
        "definition":  "resolutely fearless; brave",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The intrepid firefighters rushed into the burning building.",
        "synonyms":  [
                         "dauntless",
                         "mettlesome",
                         "plucky"
                     ]
    },
    {
        "word":  "irreverent",
        "definition":  "lacking proper respect or seriousness",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "His irreverent humor often offended more conservative people.",
        "synonyms":  [
                         "derisive",
                         "insolent",
                         "impertinent"
                     ]
    },
    {
        "word":  "loathe",
        "definition":  "dislike greatly, often with disgust",
        "part_of_speech":  "verb",
        "group":  7,
        "example":  "He loathes doing laundry more than any other chore.",
        "synonyms":  [
                         "abhor",
                         "detest",
                         "abominate"
                     ]
    },
    {
        "word":  "malign",
        "definition":  "evil and harmful",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "His malign influence had a detrimental effect on the team\u0027s morale.",
        "synonyms":  [
                         "malevolent",
                         "inimical",
                         "malicious"
                     ]
    },
    {
        "word":  "malleable",
        "definition":  "changeable or flexible; capable of being influenced",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "Children\u0027s minds are highly malleable and influenced by their surroundings.",
        "synonyms":  [
                         "susceptible",
                         "pliable",
                         "amenable"
                     ]
    },
    {
        "word":  "neophyte",
        "definition":  "an amateur or novice in a field",
        "part_of_speech":  "noun",
        "group":  7,
        "example":  "As a neophyte in gardening, she had a lot to learn about plants and soil.",
        "synonyms":  [
                         "tyro",
                         "initiate",
                         "fledgling"
                     ]
    },
    {
        "word":  "plastic",
        "definition":  "capable of being molded; flexible",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The child\u0027s plastic mind quickly absorbed the new language.",
        "synonyms":  [
                         "malleable",
                         "ductile",
                         "pliant"
                     ]
    },
    {
        "word":  "platitude",
        "definition":  "a trite or banal remark or statement",
        "part_of_speech":  "noun",
        "group":  7,
        "example":  "Politicians often use platitudes to appeal to common sentiments.",
        "synonyms":  [
                         "banality",
                         "truism",
                         "bromide"
                     ]
    },
    {
        "word":  "prescient",
        "definition":  "possessing foresight of upcoming events",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "Her prescient predictions about the market saved her a lot of money.",
        "synonyms":  [
                         "prophetic",
                         "clairvoyant",
                         "prognostic"
                     ]
    },
    {
        "word":  "pristine",
        "definition":  "in its original, unspoiled state",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The pristine beauty of the untouched island was breathtaking.",
        "synonyms":  [
                         "immaculate",
                         "flawless",
                         "untarnished"
                     ]
    },
    {
        "word":  "reproach",
        "definition":  "express criticism towards; reprimand",
        "part_of_speech":  "verb",
        "group":  7,
        "example":  "She was reproached for not trying hard enough during the match.",
        "synonyms":  [
                         "rebuke",
                         "admonish",
                         "censure"
                     ]
    },
    {
        "word":  "robust",
        "definition":  "capable of surviving despite adverse conditions",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "Only the most robust plants can survive the tundra.",
        "synonyms":  [
                         "resilient",
                         "rugged",
                         "sturdy"
                     ]
    },
    {
        "word":  "salubrious",
        "definition":  "promoting health or well-being",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The doctor recommended a salubrious diet and regular exercise.",
        "synonyms":  [
                         "salutary",
                         "beneficial",
                         "healthful"
                     ]
    },
    {
        "word":  "sanction",
        "definition":  "penalize; punish",
        "part_of_speech":  "verb",
        "group":  7,
        "example":  "The judge was sanctioned for his obvious bias.",
        "synonyms":  [
                         "censure",
                         "discipline",
                         "chastise"
                     ]
    },
    {
        "word":  "sedulous",
        "definition":  "paying attention to details; diligent",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "With sedulous attention to detail, she proofread the entire manuscript.",
        "synonyms":  [
                         "meticulous",
                         "assiduous",
                         "punctilious"
                     ]
    },
    {
        "word":  "soporific",
        "definition":  "causing sleep or lethargy",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "His voice was a gentle, soporific murmur as he read the bedtime story.",
        "synonyms":  [
                         "somnolent",
                         "sedative",
                         "tranquilizing"
                     ]
    },
    {
        "word":  "stern",
        "definition":  "hard, harsh, or severe in manner",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "His stern demeanor was intimidating to his subordinates.",
        "synonyms":  [
                         "forbidding",
                         "grim",
                         "stringent"
                     ]
    },
    {
        "word":  "tendentious",
        "definition":  "biased toward a particular view, often a provocative one",
        "part_of_speech":  "adjective",
        "group":  7,
        "example":  "The news article was criticized for its tendentious depiction of the event.",
        "synonyms":  [
                         "prejudiced",
                         "dogmatic",
                         "partial"
                     ]
    },
    {
        "word":  "accentuate",
        "definition":  "give emphasis or draw attention to something",
        "part_of_speech":  "verb",
        "group":  8,
        "example":  "The high heels accentuate her long, graceful legs.",
        "synonyms":  [
                         "underscore",
                         "foreground",
                         "accent"
                     ]
    },
    {
        "word":  "conjectural",
        "definition":  "pertaining to a guess or inference made with limited data",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "Without more information, his explanation remained conjectural.",
        "synonyms":  [
                         "speculative",
                         "putative",
                         "suppositional"
                     ]
    },
    {
        "word":  "convivial",
        "definition":  "demonstrating a jovial nature or a fondness for festivities and companionship",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "The family reunion was a convivial event with laughter and storytelling.",
        "synonyms":  [
                         "amiable",
                         "cordial",
                         "genial"
                     ]
    },
    {
        "word":  "decadent",
        "definition":  "marked by or indicative of a decline in moral values or cultural standards.",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "The extravagant party was a display of decadent luxury.",
        "synonyms":  [
                         "dissolute",
                         "depraved",
                         "corrupt"
                     ]
    },
    {
        "word":  "egregious",
        "definition":  "remarkably bad or shocking, to a conspicuous degree",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "His refusal to apologize for the egregious error was shocking.",
        "synonyms":  [
                         "appalling",
                         "dreadful",
                         "grievous"
                     ]
    },
    {
        "word":  "evanescent",
        "definition":  "vanishing or fading away quickly, like mist or a phantom",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "Her evanescent smile hinted at her fleeting thoughts.",
        "synonyms":  [
                         "ephemeral",
                         "fleeting",
                         "transitory"
                     ]
    },
    {
        "word":  "flamboyant",
        "definition":  "characterized by a showy, confident, or audacious display",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "His flamboyant attire always made him stand out in a crowd.",
        "synonyms":  [
                         "ostentatious",
                         "exuberant",
                         "theatrical"
                     ]
    },
    {
        "word":  "forestall",
        "definition":  "prevent something by taking strategic action in advance",
        "part_of_speech":  "verb",
        "group":  8,
        "example":  "He tried to forestall criticism by announcing his decision ahead of time.",
        "synonyms":  [
                         "preempt",
                         "thwart",
                         "impede"
                     ]
    },
    {
        "word":  "gainsay",
        "definition":  "deny or refute an assertion or argument",
        "part_of_speech":  "verb",
        "group":  8,
        "example":  "It was difficult to gainsay her argument because her facts were well-researched.",
        "synonyms":  [
                         "controvert",
                         "repudiate",
                         "refute"
                     ]
    },
    {
        "word":  "galvanize",
        "definition":  "inspire or stir up to action or heightened activity",
        "part_of_speech":  "verb",
        "group":  8,
        "example":  "The stirring speech galvanized the crowd into action.",
        "synonyms":  [
                         "prod",
                         "rouse",
                         "invigorate"
                     ]
    },
    {
        "word":  "indiscriminate",
        "definition":  "lacking selectivity or judgment, often with potentially harmful effects",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "The indiscriminate use of pesticides is harmful to the environment.",
        "synonyms":  [
                         "aimless",
                         "haphazard",
                         "blanket"
                     ]
    },
    {
        "word":  "innocuous",
        "definition":  "harmless, having no ill effect",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "The joke was innocuous, meant to amuse rather than offend.",
        "synonyms":  [
                         "benign",
                         "innoxious",
                         "anodyne"
                     ]
    },
    {
        "word":  "momentary",
        "definition":  "lasting for a brief moment or interval",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "There was a momentary pause before the crowd erupted in applause.",
        "synonyms":  [
                         "transitory",
                         "evanescent",
                         "transient"
                     ]
    },
    {
        "word":  "mundane",
        "definition":  "commonplace or ordinary, lacking excitement",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "His daily routine consisted of mundane tasks like washing dishes and sweeping floors.",
        "synonyms":  [
                         "humdrum",
                         "tedious",
                         "prosaic"
                     ]
    },
    {
        "word":  "nettlesome",
        "definition":  "causing irritation or annoyance",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "His constant humming was a nettlesome habit.",
        "synonyms":  [
                         "trying",
                         "vexing",
                         "irksome"
                     ]
    },
    {
        "word":  "nullify",
        "definition":  "render ineffective, cancel out or invalidate.",
        "part_of_speech":  "verb",
        "group":  8,
        "example":  "The judge\u0027s decision could nullify the previous ruling.",
        "synonyms":  [
                         "annul",
                         "rescind",
                         "void"
                     ]
    },
    {
        "word":  "obviate",
        "definition":  "sidestep or bypass a potential problem or difficulty",
        "part_of_speech":  "verb",
        "group":  8,
        "example":  "His meticulous preparation obviated any risk of failure.",
        "synonyms":  [
                         "preclude",
                         "avert",
                         "rule out"
                     ]
    },
    {
        "word":  "omnipresent",
        "definition":  "existing or seeming to exist everywhere at once",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "With the internet, information is now virtually omnipresent.",
        "synonyms":  [
                         "ubiquitous",
                         "universal",
                         "rife"
                     ]
    },
    {
        "word":  "oust",
        "definition":  "displace or eject from a position or place",
        "part_of_speech":  "verb",
        "group":  8,
        "example":  "The board decided to oust the CEO after a series of scandals.",
        "synonyms":  [
                         "expel",
                         "depose",
                         "topple"
                     ]
    },
    {
        "word":  "palpable",
        "definition":  "tangible, perceptible, or clearly noticeable",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "Her excitement was palpable as she opened the gift.",
        "synonyms":  [
                         "discernible",
                         "concrete",
                         "patent"
                     ]
    },
    {
        "word":  "perfidy",
        "definition":  "act of betrayal or unfaithfulness",
        "part_of_speech":  "noun",
        "group":  8,
        "example":  "The king never forgave the perfidy of his trusted advisor.",
        "synonyms":  [
                         "treachery",
                         "duplicity",
                         "infidelity"
                     ]
    },
    {
        "word":  "profuse",
        "definition":  "abundant, plentiful, or occurring in large amounts",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "He offered his profuse thanks to everyone who supported him.",
        "synonyms":  [
                         "copious",
                         "prolific",
                         "ample"
                     ]
    },
    {
        "word":  "pugnacious",
        "definition":  "quick to engage in a conflict or argument; combative",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "His pugnacious demeanor often got him into heated debates.",
        "synonyms":  [
                         "belligerent",
                         "bellicose",
                         "truculent"
                     ]
    },
    {
        "word":  "sagacious",
        "definition":  "demonstrating wisdom or sound judgment",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "The sagacious investor rarely made a bad business decision.",
        "synonyms":  [
                         "astute",
                         "penetrating",
                         "perspicacious"
                     ]
    },
    {
        "word":  "sanguine",
        "definition":  "cheerfully optimistic, particularly in a difficult situation",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "Despite the setbacks, she remained sanguine about their prospects for success.",
        "synonyms":  [
                         "bullish",
                         "buoyant",
                         "upbeat"
                     ]
    },
    {
        "word":  "scant",
        "definition":  "hardly sufficient, meager, or minimal",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "With scant resources, they managed to complete the project on time.",
        "synonyms":  [
                         "negligible",
                         "deficient",
                         "inadequate"
                     ]
    },
    {
        "word":  "skullduggery",
        "definition":  "sneaky or dishonest actions",
        "part_of_speech":  "noun",
        "group":  8,
        "example":  "The election was rife with skullduggery and corruption.",
        "synonyms":  [
                         "swindling",
                         "unscrupulousness",
                         "chicanery"
                     ]
    },
    {
        "word":  "trivial",
        "definition":  "of minor significance or value",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "They spent the whole meeting arguing about trivial matters.",
        "synonyms":  [
                         "inconsequential",
                         "frivolous",
                         "superficial"
                     ]
    },
    {
        "word":  "utilitarian",
        "definition":  "emphasizing practicality and functionality over aesthetics",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "The utilitarian design of the kitchen prioritized space and efficiency.",
        "synonyms":  [
                         "pragmatic",
                         "sensible",
                         "realistic"
                     ]
    },
    {
        "word":  "vapid",
        "definition":  "uninteresting, lacking flavor or spark",
        "part_of_speech":  "adjective",
        "group":  8,
        "example":  "The conversation was vapid and unstimulating, making him wish for an early exit.",
        "synonyms":  [
                         "insipid",
                         "anemic",
                         "dull"
                     ]
    },
    {
        "word":  "boorish",
        "definition":  "rude or unrefined in manners or behavior",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "His boorish behavior at the dinner party embarrassed his wife.",
        "synonyms":  [
                         "coarse",
                         "uncouth",
                         "discourteous"
                     ]
    },
    {
        "word":  "brook",
        "definition":  "to tolerate or endure something, especially an annoyance",
        "part_of_speech":  "verb",
        "group":  9,
        "example":  "She would not brook any interruptions during her presentation.",
        "synonyms":  [
                         "abide",
                         "stand",
                         "stomach"
                     ]
    },
    {
        "word":  "circumspect",
        "definition":  "cautious or wary, especially when considering potential consequences",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "She was circumspect about sharing personal information at work.",
        "synonyms":  [
                         "wary",
                         "chary",
                         "guarded"
                     ]
    },
    {
        "word":  "comity",
        "definition":  "a courteous harmony or mutual respect toward others",
        "part_of_speech":  "noun",
        "group":  9,
        "example":  "The neighboring countries maintained comity through years of potential conflicts.",
        "synonyms":  [
                         "amicability",
                         "civility",
                         "goodwill"
                     ]
    },
    {
        "word":  "commensurate",
        "definition":  "comparable in size, extent, or degree; proportionate",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "His salary increase was commensurate with his additional responsibilities.",
        "synonyms":  [
                         "equivalent",
                         "corresponding",
                         "proportional to"
                     ]
    },
    {
        "word":  "cordial",
        "definition":  "characterized by warmth and sincerity",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "They shared a cordial handshake, signaling a positive start to the negotiations.",
        "synonyms":  [
                         "amiable",
                         "affectionate",
                         "genial"
                     ]
    },
    {
        "word":  "deleterious",
        "definition":  "having a harmful effect",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "Smoking has a deleterious effect on lung health.",
        "synonyms":  [
                         "inimical",
                         "adverse",
                         "injurious"
                     ]
    },
    {
        "word":  "dichotomy",
        "definition":  "a split into two contrasting or opposite parts",
        "part_of_speech":  "noun",
        "group":  9,
        "example":  "The dichotomy between urban and rural lifestyles was evident in the debate.",
        "synonyms":  [
                         "chasm",
                         "disjunction",
                         "polarity"
                     ]
    },
    {
        "word":  "edify",
        "definition":  "enlighten or uplift through knowledge; teach",
        "part_of_speech":  "verb",
        "group":  9,
        "example":  "The seminar aimed to edify attendees about environmental conservation.",
        "synonyms":  [
                         "educate",
                         "cultivate",
                         "indoctrinate"
                     ]
    },
    {
        "word":  "elicit",
        "definition":  "extract a reply or action; provoke",
        "part_of_speech":  "verb",
        "group":  9,
        "example":  "The interviewer\u0027s question managed to elicit a candid reply from the celebrity.",
        "synonyms":  [
                         "evoke",
                         "draw out",
                         "induce"
                     ]
    },
    {
        "word":  "erudite",
        "definition":  "possessing great knowledge, typically from study or research",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "The professor was an erudite scholar who authored several renowned papers.",
        "synonyms":  [
                         "learned",
                         "scholarly",
                         "intellectual"
                     ]
    },
    {
        "word":  "fecund",
        "definition":  "fertile or highly productive",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "The fecund soil of the valley yielded bountiful harvests.",
        "synonyms":  [
                         "fruitful",
                         "prolific",
                         "thriving"
                     ]
    },
    {
        "word":  "feeble",
        "definition":  "weak; deficient in strength",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "After his illness, he felt too feeble to go for a walk.",
        "synonyms":  [
                         "frail",
                         "sickly",
                         "enfeebled"
                     ]
    },
    {
        "word":  "felicitous",
        "definition":  "well-suited or apt",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "Her felicitous remarks made everyone at the gathering smile.",
        "synonyms":  [
                         "fitting",
                         "pertinent",
                         "germane"
                     ]
    },
    {
        "word":  "forbear",
        "definition":  "refrain or abstain from doing something",
        "part_of_speech":  "verb",
        "group":  9,
        "example":  "She chose to forbear commenting until she had all the facts.",
        "synonyms":  [
                         "eschew",
                         "desist",
                         "shun"
                     ]
    },
    {
        "word":  "haphazard",
        "definition":  "lacking clear planning, order, or direction",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "The files were arranged in a haphazard manner, making it hard to locate anything.",
        "synonyms":  [
                         "unsystematic",
                         "indiscriminate",
                         "arbitrary"
                     ]
    },
    {
        "word":  "hodgepodge",
        "definition":  "a mixture or assortment of different things",
        "part_of_speech":  "noun",
        "group":  9,
        "example":  "His bedroom was a hodgepodge of posters, books, and random trinkets.",
        "synonyms":  [
                         "melange",
                         "jumble",
                         "medley"
                     ]
    },
    {
        "word":  "impede",
        "definition":  "obstruct or hinder progress",
        "part_of_speech":  "verb",
        "group":  9,
        "example":  "The fallen tree was large enough to impede traffic for hours.",
        "synonyms":  [
                         "curb",
                         "hamper",
                         "check"
                     ]
    },
    {
        "word":  "impetuous",
        "definition":  "rash or hasty in action or decision",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "His impetuous decision to buy the car led to some financial troubles.",
        "synonyms":  [
                         "impulsive",
                         "reckless",
                         "foolhardy"
                     ]
    },
    {
        "word":  "irascible",
        "definition":  "easily angered or irritated",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "The old man was known for his irascible temper, especially in the mornings.",
        "synonyms":  [
                         "snappish",
                         "waspish",
                         "surly"
                     ]
    },
    {
        "word":  "mercenary",
        "definition":  "motivated primarily by a desire for monetary or material gain",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "His mercenary approach to business left him with few loyal friends.",
        "synonyms":  [
                         "grasping",
                         "avaricious",
                         "rapacious"
                     ]
    },
    {
        "word":  "meticulous",
        "definition":  "exhibiting great care to detail",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "Her meticulous notes helped her excel in exams.",
        "synonyms":  [
                         "scrupulous",
                         "punctilious",
                         "painstaking"
                     ]
    },
    {
        "word":  "mordant",
        "definition":  "biting or sharply critical in thought or expression",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "His mordant wit often left others feeling a bit stung.",
        "synonyms":  [
                         "trenchant",
                         "caustic",
                         "acerbic"
                     ]
    },
    {
        "word":  "outstrip",
        "definition":  "surpass or do better than",
        "part_of_speech":  "verb",
        "group":  9,
        "example":  "The new product quickly outstripped its competitors in terms of sales.",
        "synonyms":  [
                         "outpace",
                         "overshadow",
                         "eclipse"
                     ]
    },
    {
        "word":  "precarious",
        "definition":  "uncertain and likely to cause danger",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "The hiker found himself in a precarious position on the mountain\u0027s edge.",
        "synonyms":  [
                         "insecure",
                         "perilous",
                         "treacherous"
                     ]
    },
    {
        "word":  "quirky",
        "definition":  "unusual in an endearing or peculiar way",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "Her quirky fashion sense always made her stand out.",
        "synonyms":  [
                         "eccentric",
                         "unorthodox",
                         "idiosyncratic"
                     ]
    },
    {
        "word":  "repudiate",
        "definition":  "reject or refute",
        "part_of_speech":  "verb",
        "group":  9,
        "example":  "The politician was quick to repudiate the rumors about his past.",
        "synonyms":  [
                         "forswear",
                         "rebut",
                         "disavow"
                     ]
    },
    {
        "word":  "tact",
        "definition":  "skill in handling difficult situations without causing offense",
        "part_of_speech":  "noun",
        "group":  9,
        "example":  "She showed great tact when mediating the argument between her friends.",
        "synonyms":  [
                         "delicacy",
                         "diplomacy",
                         "discretion"
                     ]
    },
    {
        "word":  "trifling",
        "definition":  "lacking significance or importance",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "Don\u0027t waste time on trifling matters when the main issue remains unresolved.",
        "synonyms":  [
                         "trivial",
                         "frivolous",
                         "incidental"
                     ]
    },
    {
        "word":  "turbulent",
        "definition":  "full of conflict or chaos",
        "part_of_speech":  "adjective",
        "group":  9,
        "example":  "The airplane experienced turbulent conditions during the storm.",
        "synonyms":  [
                         "tempestuous",
                         "tumultuous",
                         "anarchic"
                     ]
    },
    {
        "word":  "acumen",
        "definition":  "quickness and keenness in understanding and judgment",
        "part_of_speech":  "noun",
        "group":  10,
        "example":  "Her business acumen is evident in the company\u0027s continued growth.",
        "synonyms":  [
                         "shrewdness",
                         "acuity",
                         "sharpness"
                     ]
    },
    {
        "word":  "antithesis",
        "definition":  "the direct opposite or contrast",
        "part_of_speech":  "noun",
        "group":  10,
        "example":  "Calm is the antithesis of chaos.",
        "synonyms":  [
                         "converse",
                         "reverse",
                         "inverse"
                     ]
    },
    {
        "word":  "ascribe",
        "definition":  "attribute or credit something to a particular cause or source",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "The teacher ascribed his success to hard work and determination.",
        "synonyms":  [
                         "assign",
                         "accredit",
                         "impute"
                     ]
    },
    {
        "word":  "befuddled",
        "definition":  "confused, bewildered, or perplexed",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "The complex equations left him completely befuddled.",
        "synonyms":  [
                         "baffled",
                         "stumped",
                         "nonplussed"
                     ]
    },
    {
        "word":  "eschew",
        "definition":  "intentionally avoid or abstain from",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "He decided to eschew alcohol for a month.",
        "synonyms":  [
                         "forgo",
                         "abjure",
                         "renounce"
                     ]
    },
    {
        "word":  "esoteric",
        "definition":  "recondite",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "The esoteric lecture was only understood by a few specialists in the audience.",
        "synonyms":  [
                         "recondite",
                         "arcane",
                         "abstruse"
                     ]
    },
    {
        "word":  "evasive",
        "definition":  "indirect or not straightforward; avoiding confrontation",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "When asked about his plans, he gave an evasive answer.",
        "synonyms":  [
                         "prevaricating",
                         "equivocal",
                         "vague"
                     ]
    },
    {
        "word":  "exculpate",
        "definition":  "clear from blame or guilt",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "The evidence served to exculpate the defendant from the accusations.",
        "synonyms":  [
                         "acquit",
                         "absolve",
                         "exonerate"
                     ]
    },
    {
        "word":  "expedite",
        "definition":  "accelerate or speed up a process or action",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "We paid an extra fee to expedite the delivery of the package.",
        "synonyms":  [
                         "hasten",
                         "quicken",
                         "facilitate"
                     ]
    },
    {
        "word":  "fastidious",
        "definition":  "showing great care and attention to detail; hard to please",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "She is fastidious about her appearance, ensuring every detail is perfect.",
        "synonyms":  [
                         "scrupulous",
                         "punctilious",
                         "painstaking"
                     ]
    },
    {
        "word":  "feign",
        "definition":  "pretend or simulate",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "She tried to feign surprise, but I knew she\u0027d already heard the news.",
        "synonyms":  [
                         "affect",
                         "posture",
                         "masquerade"
                     ]
    },
    {
        "word":  "furtive",
        "definition":  "sneaky or secretive, especially due to guilt",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "The student gave a furtive glance to his neighbor\u0027s paper during the exam.",
        "synonyms":  [
                         "surreptitious",
                         "covert",
                         "clandestine"
                     ]
    },
    {
        "word":  "hamper",
        "definition":  "obstruct or hinder progress",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "The storm hampered our travel plans.",
        "synonyms":  [
                         "inhibit",
                         "curb",
                         "foil"
                     ]
    },
    {
        "word":  "indispensable",
        "definition":  "completely necessary; essential",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "Fresh water is indispensable for human survival.",
        "synonyms":  [
                         "crucial",
                         "requisite",
                         "imperative"
                     ]
    },
    {
        "word":  "lament",
        "definition":  "express deep sorrow or regret",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "She lamented the loss of her cherished necklace.",
        "synonyms":  [
                         "mourn",
                         "wail",
                         "weep"
                     ]
    },
    {
        "word":  "myopic",
        "definition":  "short-sighted; lacking creativity",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "A myopic approach to environmental issues can lead to long-term problems.",
        "synonyms":  [
                         "narrow-minded",
                         "insular",
                         "parochial"
                     ]
    },
    {
        "word":  "nonchalant",
        "definition":  "appearing casually calm or indifferent",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "Despite the chaos around her, she remained nonchalant.",
        "synonyms":  [
                         "collected",
                         "blasÃ©",
                         "insouciant"
                     ]
    },
    {
        "word":  "partial",
        "definition":  "prejudiced or biased toward one side",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "He\u0027s partial to chocolate desserts over fruity ones.",
        "synonyms":  [
                         "partisan",
                         "skewed",
                         "discriminatory"
                     ]
    },
    {
        "word":  "pensive",
        "definition":  "deep in thought",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "She sat in a pensive mood, gazing out the window.",
        "synonyms":  [
                         "reflective",
                         "introspective",
                         "ruminative"
                     ]
    },
    {
        "word":  "portend",
        "definition":  "indicate or warn that something, often unpleasant, is going to happen",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "The dark clouds portend an approaching storm.",
        "synonyms":  [
                         "presage",
                         "augur",
                         "foreshadow"
                     ]
    },
    {
        "word":  "provincial",
        "definition":  "insular",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "Despite his provincial attitudes, he was a kind-hearted man.",
        "synonyms":  [
                         "insular",
                         "parochial",
                         "myopic"
                     ]
    },
    {
        "word":  "rudimentary",
        "definition":  "basic or elementary; in the earliest stages of development",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "His understanding of the subject is still quite rudimentary.",
        "synonyms":  [
                         "primitive",
                         "crude",
                         "embryonic"
                     ]
    },
    {
        "word":  "salutary",
        "definition":  "beneficial, especially in promoting health or well-being",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "A morning jog can have a salutary effect on your mood.",
        "synonyms":  [
                         "productive",
                         "valuable",
                         "salubrious"
                     ]
    },
    {
        "word":  "sever",
        "definition":  "cut off or put an end to",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "He decided to sever all ties with his former colleagues.",
        "synonyms":  [
                         "cleave",
                         "suspend",
                         "rupture"
                     ]
    },
    {
        "word":  "slight",
        "definition":  "treat with disrespect or neglect; insult",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "He felt slighted when they didn\u0027t invite him to the party.",
        "synonyms":  [
                         "snub",
                         "disregard",
                         "rebuff"
                     ]
    },
    {
        "word":  "somnolent",
        "definition":  "sleepy or drowsy",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "The lecture\u0027s monotone delivery had a somnolent effect on the audience.",
        "synonyms":  [
                         "soporific",
                         "enervated",
                         "languorous"
                     ]
    },
    {
        "word":  "stoic",
        "definition":  "unaffected by pain or distress; showing no emotion",
        "part_of_speech":  "adjective",
        "group":  10,
        "example":  "Despite the challenges, she remained stoic and resolute.",
        "synonyms":  [
                         "phlegmatic",
                         "resigned",
                         "impassive"
                     ]
    },
    {
        "word":  "supersede",
        "definition":  "replace or take the place of",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "New technologies often supersede the old ones.",
        "synonyms":  [
                         "displace",
                         "supplant",
                         "succeed"
                     ]
    },
    {
        "word":  "tout",
        "definition":  "promote or praise energetically",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "He was always touting the benefits of a healthy lifestyle.",
        "synonyms":  [
                         "commend",
                         "endorse",
                         "urge"
                     ]
    },
    {
        "word":  "wane",
        "definition":  "decrease in power, size, or intensity",
        "part_of_speech":  "verb",
        "group":  10,
        "example":  "As the night progressed, the party\u0027s energy began to wane.",
        "synonyms":  [
                         "dwindle",
                         "subside",
                         "ebb"
                     ]
    },
    {
        "word":  "abhor",
        "definition":  "detest or regard with deep hatred",
        "part_of_speech":  "verb",
        "group":  11,
        "example":  "She abhors cruelty in any form.",
        "synonyms":  [
                         "loathe",
                         "despise",
                         "abominate"
                     ]
    },
    {
        "word":  "boisterous",
        "definition":  "energetic, noisy, and lively",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The boisterous crowd cheered for their favorite team.",
        "synonyms":  [
                         "animated",
                         "exuberant",
                         "ebullient"
                     ]
    },
    {
        "word":  "chivalrous",
        "definition":  "honorable and polite",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "He displayed chivalrous behavior by holding the door open for her.",
        "synonyms":  [
                         "gallant",
                         "courteous",
                         "gentle"
                     ]
    },
    {
        "word":  "churlish",
        "definition":  "rude or lacking good manners",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "His churlish reply caught everyone off guard.",
        "synonyms":  [
                         "ungracious",
                         "boorish",
                         "loutish"
                     ]
    },
    {
        "word":  "clandestine",
        "definition":  "secretive; avoiding attention",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "They held clandestine meetings to plan the surprise party.",
        "synonyms":  [
                         "covert",
                         "furtive",
                         "stealthy"
                     ]
    },
    {
        "word":  "complacent",
        "definition":  "smugly self-satisfied, often without awareness of potential dangers",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The team became complacent after their early successes.",
        "synonyms":  [
                         "self-congratulatory",
                         "gloating",
                         "proud"
                     ]
    },
    {
        "word":  "cumbersome",
        "definition":  "large, heavy, slow or complicated",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The old computer system was cumbersome and slow.",
        "synonyms":  [
                         "unwieldy",
                         "ungainly",
                         "hefty"
                     ]
    },
    {
        "word":  "debilitating",
        "definition":  "weakening or impairing strength",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The disease had a debilitating effect on him.",
        "synonyms":  [
                         "enervating",
                         "enfeebling",
                         "devitalizing"
                     ]
    },
    {
        "word":  "deliberate",
        "definition":  "think over or discuss carefully",
        "part_of_speech":  "verb",
        "group":  11,
        "example":  "The committee will deliberate on the matter before reaching a final decision.",
        "synonyms":  [
                         "ponder",
                         "contemplate",
                         "brood over"
                     ]
    },
    {
        "word":  "droll",
        "definition":  "amusing in a quirky or unusual way",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "His droll anecdotes always made us chuckle.",
        "synonyms":  [
                         "mirthful",
                         "hilarious",
                         "humorous"
                     ]
    },
    {
        "word":  "eccentric",
        "definition":  "deviating from conventional behavior; quirky",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The artist was known for his eccentric dress sense.",
        "synonyms":  [
                         "abnormal",
                         "aberrant",
                         "anomalous"
                     ]
    },
    {
        "word":  "fractious",
        "definition":  "quarrelsome and irritable; unruly",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The fractious toddler threw a tantrum in the store.",
        "synonyms":  [
                         "grouchy",
                         "irascible",
                         "intractable"
                     ]
    },
    {
        "word":  "limpid",
        "definition":  "clear, transparent, or easy to understand",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The limpid waters of the lake reflected the clear blue sky.",
        "synonyms":  [
                         "lucid",
                         "coherent",
                         "comprehensible"
                     ]
    },
    {
        "word":  "mawkish",
        "definition":  "overly sentimental in a way that seems exaggerated or insincere",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The movie\u0027s mawkish ending left some audience members rolling their eyes.",
        "synonyms":  [
                         "cloying",
                         "saccharine",
                         "sickly"
                     ]
    },
    {
        "word":  "obeisance",
        "definition":  "reverence for an individual",
        "part_of_speech":  "noun",
        "group":  11,
        "example":  "The knight paid obeisance to the queen.",
        "synonyms":  [
                         "homage",
                         "adoration",
                         "veneration"
                     ]
    },
    {
        "word":  "ostentatious",
        "definition":  "showy or designed to impress",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "Her ostentatious jewelry drew many envious glances.",
        "synonyms":  [
                         "pretentious",
                         "flamboyant",
                         "affected"
                     ]
    },
    {
        "word":  "panacea",
        "definition":  "a perfect cure for something",
        "part_of_speech":  "noun",
        "group":  11,
        "example":  "There\u0027s no single panacea for the economic challenges we face.",
        "synonyms":  [
                         "cure-all",
                         "elixir",
                         "nostrum"
                     ]
    },
    {
        "word":  "perfunctory",
        "definition":  "done without enthusiasm or effort;",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "His handshake was perfunctory, lacking warmth.",
        "synonyms":  [
                         "cursory",
                         "desultory",
                         "superficial"
                     ]
    },
    {
        "word":  "perilous",
        "definition":  "risky and hazardous",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The mountain climbers faced perilous conditions.",
        "synonyms":  [
                         "treacherous",
                         "precarious",
                         "insecure"
                     ]
    },
    {
        "word":  "pervasive",
        "definition":  "spreading quickly and in great numbers",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The influence of technology is pervasive in modern society.",
        "synonyms":  [
                         "prevalent",
                         "rife",
                         "ubiquitous"
                     ]
    },
    {
        "word":  "preclude",
        "definition":  "prevent something from occurring",
        "part_of_speech":  "verb",
        "group":  11,
        "example":  "His injury precluded him from competing in the race.",
        "synonyms":  [
                         "block",
                         "impede",
                         "hinder"
                     ]
    },
    {
        "word":  "predilection",
        "definition":  "preference or bias towards something",
        "part_of_speech":  "noun",
        "group":  11,
        "example":  "He has a predilection for spicy foods.",
        "synonyms":  [
                         "fondness",
                         "partiality",
                         "penchant"
                     ]
    },
    {
        "word":  "rapacious",
        "definition":  "very greedy",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The rapacious corporation was always looking to expand, regardless of the consequences.",
        "synonyms":  [
                         "grasping",
                         "avaricious",
                         "acquisitive"
                     ]
    },
    {
        "word":  "relish",
        "definition":  "take great pleasure or delight in",
        "part_of_speech":  "verb",
        "group":  11,
        "example":  "She relished the opportunity to showcase her skills.",
        "synonyms":  [
                         "adore",
                         "savor",
                         "rejoice in"
                     ]
    },
    {
        "word":  "satirical",
        "definition":  "using humor or irony to criticize or mock",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The satirical play poked fun at societal norms.",
        "synonyms":  [
                         "sarcastic",
                         "sardonic",
                         "scornful"
                     ]
    },
    {
        "word":  "sham",
        "definition":  "fake; not genuine",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The man peddled sham remedies to a gullible clientele.",
        "synonyms":  [
                         "bogus",
                         "spurious",
                         "fraudulent"
                     ]
    },
    {
        "word":  "skirt",
        "definition":  "go around or avoid something, especially an issue or obstacle",
        "part_of_speech":  "verb",
        "group":  11,
        "example":  "He skirted the difficult question by changing the topic.",
        "synonyms":  [
                         "evade",
                         "sidestep",
                         "circumvent"
                     ]
    },
    {
        "word":  "sluggish",
        "definition":  "lacking energy; slow and listless",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "After a large meal, he felt sluggish and ready for a nap.",
        "synonyms":  [
                         "inert",
                         "torpid",
                         "lethargic"
                     ]
    },
    {
        "word":  "spartan",
        "definition":  "marked by simplicity, frugality, and avoidance of luxury",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The monk\u0027s room was spartan, with only essential items.",
        "synonyms":  [
                         "austere",
                         "stringent",
                         "ascetic"
                     ]
    },
    {
        "word":  "truculent",
        "definition":  "aggressively combative or confrontational",
        "part_of_speech":  "adjective",
        "group":  11,
        "example":  "The truculent student constantly challenged the teacher\u0027s authority.",
        "synonyms":  [
                         "pugnacious",
                         "bellicose",
                         "obstreperous"
                     ]
    },
    {
        "word":  "acrimonious",
        "definition":  "bitter and sharp in language or tone",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "Their divorce was acrimonious, with both parties hurling insults.",
        "synonyms":  [
                         "caustic",
                         "scathing",
                         "astringent"
                     ]
    },
    {
        "word":  "belligerent",
        "definition":  "argumentative, threatening, or aggressive",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "His belligerent attitude made it hard to have a calm conversation.",
        "synonyms":  [
                         "pugnacious",
                         "bellicose",
                         "truculent"
                     ]
    },
    {
        "word":  "beneficent",
        "definition":  "kind and charitable, producing good results or benefits",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "The beneficent organization provided meals to the homeless.",
        "synonyms":  [
                         "altruistic",
                         "humanitarian",
                         "benevolent"
                     ]
    },
    {
        "word":  "canny",
        "definition":  "shrewd and cautious",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "Her canny investments made her a millionaire.",
        "synonyms":  [
                         "astute",
                         "discerning",
                         "acute"
                     ]
    },
    {
        "word":  "cavalier",
        "definition":  "exhibiting an overly casual attitude; unconcerned",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "His cavalier dismissal of the issue upset many.",
        "synonyms":  [
                         "offhand",
                         "insouciant",
                         "dismissive"
                     ]
    },
    {
        "word":  "distressed",
        "definition":  "experiencing nervousness, irritation, or sadness",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "The distressed child sought comfort from his mother.",
        "synonyms":  [
                         "tormented",
                         "perturbed",
                         "afflicted"
                     ]
    },
    {
        "word":  "dwindling",
        "definition":  "decreasing steadily in size or quantity",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "The dwindling supplies made survival even more challenging.",
        "synonyms":  [
                         "diminishing",
                         "shrinking",
                         "contracting"
                     ]
    },
    {
        "word":  "eclipse",
        "definition":  "overshadow or surpass",
        "part_of_speech":  "verb",
        "group":  12,
        "example":  "The success of her latest book eclipsed all her previous works.",
        "synonyms":  [
                         "outshine",
                         "outstrip",
                         "upstage"
                     ]
    },
    {
        "word":  "encyclopedic",
        "definition":  "thorough; comprehensive in scope",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "His encyclopedic knowledge of history impressed everyone.",
        "synonyms":  [
                         "exhaustive",
                         "wide-ranging",
                         "all-inclusive"
                     ]
    },
    {
        "word":  "exacerbate",
        "definition":  "make a situation or condition worse",
        "part_of_speech":  "verb",
        "group":  12,
        "example":  "His shouting only served to exacerbate the argument.",
        "synonyms":  [
                         "inflame",
                         "compound",
                         "aggravate"
                     ]
    },
    {
        "word":  "exasperated",
        "definition":  "severely irritated or angry",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "She was exasperated by the constant interruptions.",
        "synonyms":  [
                         "infuriated",
                         "enraged",
                         "vexed"
                     ]
    },
    {
        "word":  "fungible",
        "definition":  "interchangeable for another item of a similar type",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "Oil and cash are considered fungible commodities.",
        "synonyms":  [
                         "exchangeable",
                         "equivalent",
                         "indistinguishable"
                     ]
    },
    {
        "word":  "hackneyed",
        "definition":  "lacking creativity; derivative and overused",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "\"Love at first sight\" is a hackneyed plot in romance novels.",
        "synonyms":  [
                         "trite",
                         "banal",
                         "pedestrian"
                     ]
    },
    {
        "word":  "incongruous",
        "definition":  "out of place; lacking harmony",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "The modern building looked incongruous in the historic district.",
        "synonyms":  [
                         "clashing",
                         "jarring",
                         "discordant"
                     ]
    },
    {
        "word":  "interchangeable",
        "definition":  "capable of being used in place of each other",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "The parts are interchangeable between the different models.",
        "synonyms":  [
                         "fungible",
                         "uniform",
                         "homogeneous"
                     ]
    },
    {
        "word":  "laconic",
        "definition":  "economical with words; quiet and reserved",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "His laconic reply was simply, \"No.\"",
        "synonyms":  [
                         "terse",
                         "pithy",
                         "taciturn"
                     ]
    },
    {
        "word":  "lucrative",
        "definition":  "producing a significant amount of money",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "Selling rare antiques can be a lucrative business.",
        "synonyms":  [
                         "gainful",
                         "remunerative",
                         "fruitful"
                     ]
    },
    {
        "word":  "magisterial",
        "definition":  "possessing great authority",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "The judge spoke in a magisterial tone.",
        "synonyms":  [
                         "masterful",
                         "authoritative",
                         "lordly"
                     ]
    },
    {
        "word":  "onerous",
        "definition":  "involving a heavy burden; challenging or difficult",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "The onerous task of cleaning the entire house was left to her.",
        "synonyms":  [
                         "formidable",
                         "taxing",
                         "Herculean"
                     ]
    },
    {
        "word":  "opprobrium",
        "definition":  "severe criticism or public shame",
        "part_of_speech":  "noun",
        "group":  12,
        "example":  "He faced opprobrium for his unethical actions.",
        "synonyms":  [
                         "vilification",
                         "vituperation",
                         "obloquy"
                     ]
    },
    {
        "word":  "parsimonious",
        "definition":  "extremely frugal or stingy",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "His parsimonious habits meant he rarely treated others.",
        "synonyms":  [
                         "miserly",
                         "stinting",
                         "penurious"
                     ]
    },
    {
        "word":  "peripheral",
        "definition":  "of marginal importance; minor",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "The issue was only of peripheral importance to the main discussion.",
        "synonyms":  [
                         "subsidiary",
                         "tangential",
                         "trivial"
                     ]
    },
    {
        "word":  "provocative",
        "definition":  "causing outrage or irritation, often intentionally",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "His provocative statements stirred up controversy.",
        "synonyms":  [
                         "goading",
                         "affronting",
                         "galling"
                     ]
    },
    {
        "word":  "renounce",
        "definition":  "reject or give up",
        "part_of_speech":  "verb",
        "group":  12,
        "example":  "She decided to renounce her citizenship.",
        "synonyms":  [
                         "forswear",
                         "abjure",
                         "disavow"
                     ]
    },
    {
        "word":  "tempestuous",
        "definition":  "(of emotions or actions) unrestrained and turbulent",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "Their relationship was tempestuous, with frequent arguments.",
        "synonyms":  [
                         "heated",
                         "hysterical",
                         "feverish"
                     ]
    },
    {
        "word":  "tenable",
        "definition":  "(of an idea or method) justifiable and rational",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "His argument was hardly tenable in the face of clear evidence.",
        "synonyms":  [
                         "sound",
                         "plausible",
                         "sustainable"
                     ]
    },
    {
        "word":  "transgression",
        "definition":  "a violation of a law, rule, or social norm",
        "part_of_speech":  "noun",
        "group":  12,
        "example":  "For his transgressions, he was sentenced to community service.",
        "synonyms":  [
                         "peccadillo",
                         "misdemeanor",
                         "indiscretion"
                     ]
    },
    {
        "word":  "urbane",
        "definition":  "refined, sophisticated, and courteous",
        "part_of_speech":  "adjective",
        "group":  12,
        "example":  "He was urbane in manner, making everyone feel comfortable.",
        "synonyms":  [
                         "suave",
                         "debonair",
                         "cultivated"
                     ]
    },
    {
        "word":  "verisimilitude",
        "definition":  "appearance or semblance of truth or reality; believability.",
        "part_of_speech":  "noun",
        "group":  12,
        "example":  "The film had an impressive verisimilitude due to its attention to detail.",
        "synonyms":  [
                         "authenticity",
                         "credibility",
                         "lifelikeness"
                     ]
    },
    {
        "word":  "vitiate",
        "definition":  "impair or corrupt the quality of something",
        "part_of_speech":  "verb",
        "group":  12,
        "example":  "Excessive use of clichÃ©s will vitiate the effectiveness of a speech.",
        "synonyms":  [
                         "taint",
                         "contaminate",
                         "sully"
                     ]
    },
    {
        "word":  "affinity",
        "definition":  "a natural liking or connection to a person, thing, or idea",
        "part_of_speech":  "noun",
        "group":  13,
        "example":  "He has an affinity for painting, spending hours in his studio.",
        "synonyms":  [
                         "rapport",
                         "accord",
                         "inclination toward"
                     ]
    },
    {
        "word":  "altruistic",
        "definition":  "showing generosity and concern for the welfare of others",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The altruistic volunteer spent weekends helping at the homeless shelter.",
        "synonyms":  [
                         "compassionate",
                         "benevolent",
                         "magnanimous"
                     ]
    },
    {
        "word":  "baroque",
        "definition":  "overly detailed or ornamental",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The dress she wore to the event was decidedly baroque, with frills and embroideries everywhere.",
        "synonyms":  [
                         "overelaborate",
                         "extravagant",
                         "rococo"
                     ]
    },
    {
        "word":  "byzantine",
        "definition":  "overly complex or intricate",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "Navigating the byzantine regulations required the help of an expert.",
        "synonyms":  [
                         "convoluted",
                         "involved",
                         "serpentine"
                     ]
    },
    {
        "word":  "compromise",
        "definition":  "weaken or diminish in quality, character, or value",
        "part_of_speech":  "verb",
        "group":  13,
        "example":  "Using low-quality ingredients can compromise the dish\u0027s flavor.",
        "synonyms":  [
                         "undermine",
                         "jeopardize",
                         "imperil"
                     ]
    },
    {
        "word":  "conciliatory",
        "definition":  "intended to appease or calm someone down",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "His conciliatory gesture helped to resolve the argument.",
        "synonyms":  [
                         "placatory",
                         "pacifying",
                         "mollifying"
                     ]
    },
    {
        "word":  "countenance",
        "definition":  "accept or permit",
        "part_of_speech":  "verb",
        "group":  13,
        "example":  "He wouldn\u0027t countenance any criticism of his decision.",
        "synonyms":  [
                         "tolerate",
                         "endure",
                         "brook"
                     ]
    },
    {
        "word":  "covert",
        "definition":  "hidden or concealed; not openly practiced",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The spy was involved in several covert missions.",
        "synonyms":  [
                         "furtive",
                         "surreptitious",
                         "clandestine"
                     ]
    },
    {
        "word":  "credible",
        "definition":  "able to be trusted; persuasive",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The evidence was credible enough to support her case.",
        "synonyms":  [
                         "valid",
                         "tenable",
                         "compelling"
                     ]
    },
    {
        "word":  "diffuse",
        "definition":  "spread or disperse widely",
        "part_of_speech":  "verb",
        "group":  13,
        "example":  "The fragrance diffused throughout the room.",
        "synonyms":  [
                         "scatter",
                         "disseminate",
                         "promulgate"
                     ]
    },
    {
        "word":  "documentary",
        "definition":  "based on or reproducing real events or facts",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The film was documentary in nature, capturing the reality of life in that region.",
        "synonyms":  [
                         "recorded",
                         "chronicled",
                         "archived"
                     ]
    },
    {
        "word":  "exhaustive",
        "definition":  "thorough and comprehensive",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "She conducted an exhaustive review of the literature on the topic.",
        "synonyms":  [
                         "all-inclusive",
                         "all-encompassing",
                         "encyclopedic"
                     ]
    },
    {
        "word":  "exhilarating",
        "definition":  "intensely exciting",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The roller coaster ride was an exhilarating experience.",
        "synonyms":  [
                         "thrilling",
                         "intoxicating",
                         "invigorating"
                     ]
    },
    {
        "word":  "extraneous",
        "definition":  "lacking relevance; unnecessary",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "Please remove any extraneous information from the report.",
        "synonyms":  [
                         "immaterial",
                         "inapposite",
                         "incidental"
                     ]
    },
    {
        "word":  "fervor",
        "definition":  "intense enthusiasm toward something",
        "part_of_speech":  "noun",
        "group":  13,
        "example":  "The crowd\u0027s fervor was evident during the final match.",
        "synonyms":  [
                         "ardor",
                         "zeal",
                         "keenness"
                     ]
    },
    {
        "word":  "futile",
        "definition":  "incapable of resulting in anything worthwhile",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "Despite their efforts, the search proved futile.",
        "synonyms":  [
                         "fruitless",
                         "ineffectual",
                         "vain"
                     ]
    },
    {
        "word":  "illusory",
        "definition":  "unreal or based on illusion",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "His sense of victory was illusory, as new challenges awaited.",
        "synonyms":  [
                         "delusional",
                         "bogus",
                         "sham"
                     ]
    },
    {
        "word":  "invidious",
        "definition":  "likely to cause resentment or envy",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "Making an invidious comparison between the two siblings was unfair.",
        "synonyms":  [
                         "awkward",
                         "unpleasant",
                         "undesirable"
                     ]
    },
    {
        "word":  "lethargic",
        "definition":  "sluggish; tired",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "After the heavy meal, he felt lethargic and drowsy.",
        "synonyms":  [
                         "torpid",
                         "inert",
                         "languid"
                     ]
    },
    {
        "word":  "metaphorical",
        "definition":  "symbolic rather than literal",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "\"A sea of troubles\" is a metaphorical expression.",
        "synonyms":  [
                         "figurative",
                         "allegorical",
                         "allusive"
                     ]
    },
    {
        "word":  "mimic",
        "definition":  "to imitate or copy someone or something",
        "part_of_speech":  "verb",
        "group":  13,
        "example":  "He could mimic his favorite actors perfectly.",
        "synonyms":  [
                         "emulate",
                         "caricature",
                         "satirize"
                     ]
    },
    {
        "word":  "numinous",
        "definition":  "having a spiritual or divine quality",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The church had a numinous aura that calmed the visitors.",
        "synonyms":  [
                         "sacred",
                         "otherworldly",
                         "transcendent"
                     ]
    },
    {
        "word":  "obscure",
        "definition":  "not clearly expressed or understood",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "He made an obscure reference to an old movie.",
        "synonyms":  [
                         "dubious",
                         "hazy",
                         "vague"
                     ]
    },
    {
        "word":  "overt",
        "definition":  "open and observable; not hidden or secret",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "Her overt criticism was surprising to many.",
        "synonyms":  [
                         "plain",
                         "manifest",
                         "patent"
                     ]
    },
    {
        "word":  "pellucid",
        "definition":  "transparently clear in meaning or style",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "Her explanations were always pellucid, making complex ideas easy to grasp.",
        "synonyms":  [
                         "lucid",
                         "unambiguous",
                         "straightforward"
                     ]
    },
    {
        "word":  "perpetuate",
        "definition":  "make (something) continue for an indefinite time",
        "part_of_speech":  "verb",
        "group":  13,
        "example":  "The movie served to perpetuate the myth of the noble outlaw.",
        "synonyms":  [
                         "sustain",
                         "maintain",
                         "prolong"
                     ]
    },
    {
        "word":  "rational",
        "definition":  "based on clear thought or reason",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "He made a rational decision after considering all options.",
        "synonyms":  [
                         "cogent",
                         "coherent",
                         "judicious"
                     ]
    },
    {
        "word":  "scathing",
        "definition":  "harshly or bitterly critical; vitriolic",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The review was scathing, criticizing every aspect of the product.",
        "synonyms":  [
                         "mordant",
                         "blistering",
                         "caustic"
                     ]
    },
    {
        "word":  "subtle",
        "definition":  "delicate or slight; not obvious",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The dish had a subtle hint of rosemary.",
        "synonyms":  [
                         "minute",
                         "understated",
                         "subdued"
                     ]
    },
    {
        "word":  "superficial",
        "definition":  "existing, occurring, or located on the surface",
        "part_of_speech":  "adjective",
        "group":  13,
        "example":  "The wound was superficial and didn\u0027t require stitches.",
        "synonyms":  [
                         "exterior",
                         "outer",
                         "peripheral"
                     ]
    },
    {
        "word":  "acquiesce",
        "definition":  "agree or consent quietly without objection",
        "part_of_speech":  "verb",
        "group":  14,
        "example":  "Though unhappy with the decision, she chose to acquiesce rather than argue.",
        "synonyms":  [
                         "abide by",
                         "countenance",
                         "brook"
                     ]
    },
    {
        "word":  "adroit",
        "definition":  "deft, dexterous, or skillful",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "The adroit artist created a masterpiece with just a few strokes of paint.",
        "synonyms":  [
                         "agile",
                         "nimble",
                         "quick-witted"
                     ]
    },
    {
        "word":  "amend",
        "definition":  "make changes to a document, law, or statement, usually to improve it",
        "part_of_speech":  "verb",
        "group":  14,
        "example":  "The company decided to amend its policies to be more environmentally friendly.",
        "synonyms":  [
                         "revise",
                         "alter",
                         "revamp"
                     ]
    },
    {
        "word":  "animus",
        "definition":  "strong dislike or enmity; hostile attitude",
        "part_of_speech":  "noun",
        "group":  14,
        "example":  "There was clear animus between the two rival politicians.",
        "synonyms":  [
                         "animosity",
                         "malice",
                         "enmity"
                     ]
    },
    {
        "word":  "apologist",
        "definition":  "a person who defends or supports something that is being criticized",
        "part_of_speech":  "noun",
        "group":  14,
        "example":  "As an apologist for the movement, he spent time explaining its principles.",
        "synonyms":  [
                         "advocate",
                         "proponent",
                         "apostle"
                     ]
    },
    {
        "word":  "astringent",
        "definition":  "sharp or harsh in demeanor or style",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "Her critique was astringent but fair.",
        "synonyms":  [
                         "trenchant",
                         "acerbic",
                         "caustic"
                     ]
    },
    {
        "word":  "collaborate",
        "definition":  "work together on a project",
        "part_of_speech":  "verb",
        "group":  14,
        "example":  "The two authors decided to collaborate on a novel.",
        "synonyms":  [
                         "ally",
                         "integrate",
                         "cooperate"
                     ]
    },
    {
        "word":  "competent",
        "definition":  "having sufficient skill, knowledge, ability, or qualifications",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "She is highly competent in her field and respected by her peers.",
        "synonyms":  [
                         "adept",
                         "capable",
                         "adroit"
                     ]
    },
    {
        "word":  "correlate",
        "definition":  "show a mutual relationship or connection between two or more things",
        "part_of_speech":  "verb",
        "group":  14,
        "example":  "The study aimed to correlate income levels with educational attainment.",
        "synonyms":  [
                         "correspond",
                         "harmonize",
                         "square"
                     ]
    },
    {
        "word":  "deride",
        "definition":  "ridicule or mock",
        "part_of_speech":  "verb",
        "group":  14,
        "example":  "Critics derided his performance as amateurish.",
        "synonyms":  [
                         "jeer at",
                         "pillory",
                         "disparage"
                     ]
    },
    {
        "word":  "dictate",
        "definition":  "give orders or commands",
        "part_of_speech":  "verb",
        "group":  14,
        "example":  "He dictated a letter to his secretary.",
        "synonyms":  [
                         "domineer",
                         "lord over",
                         "browbeat"
                     ]
    },
    {
        "word":  "discreet",
        "definition":  "respectful of privacy or secrecy; inconspicuous",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "He made a discreet inquiry about the job opening.",
        "synonyms":  [
                         "chary",
                         "circumspect",
                         "unobtrusive"
                     ]
    },
    {
        "word":  "divorced",
        "definition":  "separate from something that was previously connected",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "The author\u0027s work is completely divorced from reality.",
        "synonyms":  [
                         "disjointed",
                         "severed",
                         "alienated"
                     ]
    },
    {
        "word":  "elitist",
        "definition":  "a person who believes in the rule of an elite or privileged group",
        "part_of_speech":  "noun",
        "group":  14,
        "example":  "As an elitist, he looked down on those he considered unrefined.",
        "synonyms":  [
                         "snob",
                         "aristocrat",
                         "supremacist"
                     ]
    },
    {
        "word":  "exacting",
        "definition":  "requiring a lot of care, effort, or attention",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "The exacting task required precision and patience.",
        "synonyms":  [
                         "stringent",
                         "demanding",
                         "onerous"
                     ]
    },
    {
        "word":  "flummoxed",
        "definition":  "completely unable to understand; bewildered",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "The complex equation left the students flummoxed.",
        "synonyms":  [
                         "baffled",
                         "bemused",
                         "nonplussed"
                     ]
    },
    {
        "word":  "fruitful",
        "definition":  "producing good or abundant results",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "Their partnership proved to be fruitful, leading to many successful projects.",
        "synonyms":  [
                         "productive",
                         "gainful",
                         "effectual"
                     ]
    },
    {
        "word":  "inborn",
        "definition":  "present from birth; innate",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "Her inborn talent for music was evident at a young age.",
        "synonyms":  [
                         "congenital",
                         "inherent",
                         "ingrained"
                     ]
    },
    {
        "word":  "polymath",
        "definition":  "a person with extraordinarily broad and comprehensive knowledge",
        "part_of_speech":  "noun",
        "group":  14,
        "example":  "Leonardo da Vinci was a true polymath, excelling in art, science, and engineering.",
        "synonyms":  [
                         "savant",
                         "multi-disciplinarian",
                         "erudite"
                     ]
    },
    {
        "word":  "reticent",
        "definition":  "keeping one\u0027s thoughts and opinions to oneself; reserved or restrained",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "Though an expert in his field, he was reticent about his own achievements.",
        "synonyms":  [
                         "inhibited",
                         "diffident",
                         "unassuming"
                     ]
    },
    {
        "word":  "stringent",
        "definition":  "strict or severe; tight",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "The company has stringent guidelines for safety.",
        "synonyms":  [
                         "rigid",
                         "exacting",
                         "draconian"
                     ]
    },
    {
        "word":  "subservient",
        "definition":  "obedient to an authority or other people",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "He had a subservient attitude that made him an easy target for manipulation.",
        "synonyms":  [
                         "submissive",
                         "deferential",
                         "servile"
                     ]
    },
    {
        "word":  "surreptitious",
        "definition":  "done secretly or stealthily",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "He took a surreptitious glance at his watch during the meeting.",
        "synonyms":  [
                         "clandestine",
                         "furtive",
                         "covert"
                     ]
    },
    {
        "word":  "tantalizing",
        "definition":  "arousing desire or interest without fulfillment",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "The smell of freshly baked cookies was tantalizing.",
        "synonyms":  [
                         "teasing",
                         "tormenting",
                         "enticing"
                     ]
    },
    {
        "word":  "tantamount",
        "definition":  "equivalent in effect or value",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "His silence was tantamount to an admission of guilt.",
        "synonyms":  [
                         "on par with",
                         "amounting to",
                         "commensurate with"
                     ]
    },
    {
        "word":  "torpor",
        "definition":  "a state of apathy or lethargy",
        "part_of_speech":  "noun",
        "group":  14,
        "example":  "The long, hot summer days led to a general torpor among the town\u0027s residents.",
        "synonyms":  [
                         "inertia",
                         "languor",
                         "idleness"
                     ]
    },
    {
        "word":  "trenchant",
        "definition":  "keen and biting; vigorously articulate",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "She was known for her trenchant wit and clever repartees.",
        "synonyms":  [
                         "cutting",
                         "penetrating",
                         "mordant"
                     ]
    },
    {
        "word":  "umbrage",
        "definition":  "a feeling of anger or annoyance caused by something offensive",
        "part_of_speech":  "noun",
        "group":  14,
        "example":  "She took umbrage at his rude comment.",
        "synonyms":  [
                         "indignation",
                         "vexation",
                         "chagrin"
                     ]
    },
    {
        "word":  "versatile",
        "definition":  "having varied uses or many functions; capable of doing many things",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "He\u0027s a versatile actor who has played roles in both comedies and dramas.",
        "synonyms":  [
                         "adaptable",
                         "multifaceted",
                         "protean"
                     ]
    },
    {
        "word":  "wayward",
        "definition":  "obstinate, contrary and unpredictable",
        "part_of_speech":  "adjective",
        "group":  14,
        "example":  "The wayward child often disobeyed and wandered off on his own.",
        "synonyms":  [
                         "bullheaded",
                         "capricious",
                         "recalcitrant"
                     ]
    },
    {
        "word":  "alienate",
        "definition":  "make someone feel isolated and estranged",
        "part_of_speech":  "verb",
        "group":  15,
        "example":  "His behavior began to alienate his friends and family.",
        "synonyms":  [
                         "sever",
                         "drive a wedge",
                         "disunite"
                     ]
    },
    {
        "word":  "apathy",
        "definition":  "lack of interest or enthusiasm towards something",
        "part_of_speech":  "noun",
        "group":  15,
        "example":  "The team\u0027s losing streak led to apathy among the fans.",
        "synonyms":  [
                         "indifference",
                         "passivity",
                         "phlegm"
                     ]
    },
    {
        "word":  "apropos",
        "definition":  "appropriate or relevant to the situation.",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The quote she used in her speech was apropos for the current events.",
        "synonyms":  [
                         "pertinent",
                         "apt",
                         "apposite"
                     ]
    },
    {
        "word":  "apt",
        "definition":  "suitable or appropriate",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The documentary was an apt choice for the history class.",
        "synonyms":  [
                         "fitting",
                         "applicable",
                         "apposite"
                     ]
    },
    {
        "word":  "cloak",
        "definition":  "conceal or disguise",
        "part_of_speech":  "verb",
        "group":  15,
        "example":  "The spy used a fake identity to cloak his true intentions.",
        "synonyms":  [
                         "veil",
                         "shroud",
                         "mask"
                     ]
    },
    {
        "word":  "consensus",
        "definition":  "general agreement among the members of a group",
        "part_of_speech":  "noun",
        "group":  15,
        "example":  "The group reached a consensus after much debate.",
        "synonyms":  [
                         "concord",
                         "accord",
                         "harmony"
                     ]
    },
    {
        "word":  "distort",
        "definition":  "give a false or misleading account of",
        "part_of_speech":  "verb",
        "group":  15,
        "example":  "The article distorts the truth to push an agenda.",
        "synonyms":  [
                         "manipulate",
                         "skew",
                         "warp"
                     ]
    },
    {
        "word":  "divergent",
        "definition":  "growing further apart; disagreeing",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "They held divergent opinions on the issue.",
        "synonyms":  [
                         "disparate",
                         "antithetical",
                         "clashing"
                     ]
    },
    {
        "word":  "elated",
        "definition":  "very happy or proud",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "She was elated after getting the promotion.",
        "synonyms":  [
                         "ecstatic",
                         "jubilant",
                         "euphoric"
                     ]
    },
    {
        "word":  "enchant",
        "definition":  "capture the attention or to charm",
        "part_of_speech":  "verb",
        "group":  15,
        "example":  "The music seemed to enchant her, as she lost herself in its melody.",
        "synonyms":  [
                         "captivate",
                         "dazzle",
                         "beguile"
                     ]
    },
    {
        "word":  "entrenched",
        "definition":  "firmly ingrained and unlikely to change",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "His opinions were so entrenched that no one could change his mind.",
        "synonyms":  [
                         "rooted",
                         "indelible",
                         "immutable"
                     ]
    },
    {
        "word":  "exotic",
        "definition":  "foreign, especially in an exciting way",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The garden was filled with exotic flowers.",
        "synonyms":  [
                         "striking",
                         "unconventional",
                         "peculiar"
                     ]
    },
    {
        "word":  "exploitative",
        "definition":  "taking unfair advantage of a person, group, or situation",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The company was criticized for its exploitative practices.",
        "synonyms":  [
                         "predatory",
                         "opportunistic",
                         "extortionate"
                     ]
    },
    {
        "word":  "foreseeable",
        "definition":  "able to be predicted or expected",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "No solution was in the foreseeable future, so they decided to pause and reconsider.",
        "synonyms":  [
                         "anticipated",
                         "projected",
                         "presumable"
                     ]
    },
    {
        "word":  "forsake",
        "definition":  "abandon or give up",
        "part_of_speech":  "verb",
        "group":  15,
        "example":  "He decided to forsake his old habits.",
        "synonyms":  [
                         "shun",
                         "renounce",
                         "forgo"
                     ]
    },
    {
        "word":  "gratify",
        "definition":  "please or satisfy; make content",
        "part_of_speech":  "verb",
        "group":  15,
        "example":  "Seeing his students succeed was enough to gratify the old teacher.",
        "synonyms":  [
                         "gladden",
                         "indulge",
                         "quench"
                     ]
    },
    {
        "word":  "heed",
        "definition":  "mind or regard with care; pay attention",
        "part_of_speech":  "verb",
        "group":  15,
        "example":  "The hiker failed to heed warnings about the dangerous trail.",
        "synonyms":  [
                         "mind",
                         "follow",
                         "consider"
                     ]
    },
    {
        "word":  "judicious",
        "definition":  "having, characterized by, or done with good judgment or sound thinking",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "In handling the dispute, her judicious approach was appreciated by all parties involved.",
        "synonyms":  [
                         "prudent",
                         "shrewd",
                         "canny"
                     ]
    },
    {
        "word":  "lucid",
        "definition":  "clear and easy to understand",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The explanation was lucid and concise.",
        "synonyms":  [
                         "intelligible",
                         "cogent",
                         "articulate"
                     ]
    },
    {
        "word":  "pertinent",
        "definition":  "important with regard to (a subject or matter); pertaining; relevant",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "She provided data pertinent to the case, shedding light on the mystery.",
        "synonyms":  [
                         "material",
                         "apt",
                         "germane"
                     ]
    },
    {
        "word":  "propriety",
        "definition":  "conformity to established standards of good or proper behavior",
        "part_of_speech":  "noun",
        "group":  15,
        "example":  "In the royal court, one had to act with the utmost propriety.",
        "synonyms":  [
                         "decorum",
                         "etiquette",
                         "discretion"
                     ]
    },
    {
        "word":  "scintillating",
        "definition":  "brilliantly or impressively clever, exciting, amusing or witty",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "She gave a scintillating performance on stage.",
        "synonyms":  [
                         "vivacious",
                         "dazzling",
                         "coruscating"
                     ]
    },
    {
        "word":  "sensational",
        "definition":  "exaggerated for effect, often sacrificing accuracy",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The magazine is known for its sensational headlines.",
        "synonyms":  [
                         "overdramatized",
                         "lurid",
                         "melodramatic"
                     ]
    },
    {
        "word":  "sophisticated",
        "definition":  "experienced, worldly, or cultured",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "His sophisticated taste in art and music suggested a worldly sensibility.",
        "synonyms":  [
                         "cosmopolitan",
                         "cultivated",
                         "urbane"
                     ]
    },
    {
        "word":  "strife",
        "definition":  "conflict or struggle",
        "part_of_speech":  "noun",
        "group":  15,
        "example":  "The political strife in the country was concerning.",
        "synonyms":  [
                         "friction",
                         "discord",
                         "dissension"
                     ]
    },
    {
        "word":  "understated",
        "definition":  "expressed in a subtle, restrained, or low-key manner",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "His understated charm was often more appealing than overt gestures.",
        "synonyms":  [
                         "reserved",
                         "modest",
                         "discreet"
                     ]
    },
    {
        "word":  "unscrupulous",
        "definition":  "without moral principles",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The unscrupulous merchant was known to overcharge unsuspecting tourists.",
        "synonyms":  [
                         "amoral",
                         "reprobate",
                         "shameless"
                     ]
    },
    {
        "word":  "veracity",
        "definition":  "conformity to truth or accuracy",
        "part_of_speech":  "noun",
        "group":  15,
        "example":  "The journalist questioned the veracity of the politician\u0027s claims.",
        "synonyms":  [
                         "exactness",
                         "authenticity",
                         "fidelity"
                     ]
    },
    {
        "word":  "virulent",
        "definition":  "extremely hostile or malicious; intensely acrimonious",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The article had a virulent tone, attacking everyone with a differing opinion.",
        "synonyms":  [
                         "vitriolic",
                         "malevolent",
                         "spiteful"
                     ]
    },
    {
        "word":  "volatile",
        "definition":  "likely to change unpredictably and quickly (usually for the worse)",
        "part_of_speech":  "adjective",
        "group":  15,
        "example":  "The situation at the border remained volatile, with tensions rising daily.",
        "synonyms":  [
                         "explosive",
                         "fraught",
                         "turbulent"
                     ]
    },
    {
        "word":  "antedate",
        "definition":  "occur before (something) in time",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "His journal entry antedates the official records.",
        "synonyms":  [
                         "precede",
                         "predate",
                         "come before"
                     ]
    },
    {
        "word":  "banish",
        "definition":  "expel from a place, especially as punishment; get rid of",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "She worked hard to banish those negative thoughts from her mind.",
        "synonyms":  [
                         "extradite",
                         "exile",
                         "dispel"
                     ]
    },
    {
        "word":  "bridle",
        "definition":  "control or restrain",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "She bridled her anger and responded calmly.",
        "synonyms":  [
                         "curb",
                         "check",
                         "stifle"
                     ]
    },
    {
        "word":  "comply",
        "definition":  "obey someone\u0027s rules or wishes; meet certain standards",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "The toys do not comply with safety guidelines.",
        "synonyms":  [
                         "abide by",
                         "adhere to",
                         "consent to"
                     ]
    },
    {
        "word":  "crestfallen",
        "definition":  "disappointed, dispirited, or depressed",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "He looked crestfallen after hearing the results.",
        "synonyms":  [
                         "downhearted",
                         "dejected",
                         "glum"
                     ]
    },
    {
        "word":  "curtail",
        "definition":  "restrict or limit; decrease in quantity",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "She had to curtail her shopping habits due to financial constraints.",
        "synonyms":  [
                         "curb",
                         "rein in",
                         "truncate"
                     ]
    },
    {
        "word":  "elucidate",
        "definition":  "make clear; clarify or shed light on",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "He provided examples to elucidate his point.",
        "synonyms":  [
                         "illuminate",
                         "explicate",
                         "unravel"
                     ]
    },
    {
        "word":  "evade",
        "definition":  "avoid or escape from, typically in a cunning way",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "He amazingly evaded more than 30 police officers.",
        "synonyms":  [
                         "elude",
                         "dodge",
                         "sidestep"
                     ]
    },
    {
        "word":  "feckless",
        "definition":  "without skill, ineffective, incompetent",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "Despite his talents, his feckless attitude led to missed opportunities.",
        "synonyms":  [
                         "hopeless",
                         "ineffectual",
                         "inept"
                     ]
    },
    {
        "word":  "fester",
        "definition":  "(of a negative feeling or a problem) worsen, especially due to lack of attention",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "Old wounds can fester if not addressed.",
        "synonyms":  [
                         "rankle",
                         "chafe",
                         "smolder"
                     ]
    },
    {
        "word":  "iconoclastic",
        "definition":  "challenging or overthrowing tradition or established beliefs",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "His iconoclastic views were both criticized and praised.",
        "synonyms":  [
                         "renegade",
                         "heretical",
                         "nonconformist"
                     ]
    },
    {
        "word":  "immure",
        "definition":  "imprison or isolate",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "The princess was immured in the castle.",
        "synonyms":  [
                         "confine",
                         "incarcerate",
                         "detain"
                     ]
    },
    {
        "word":  "improvise",
        "definition":  "create something spontaneously without preparation",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "When the script was lost, the actor decided to improvise.",
        "synonyms":  [
                         "extemporize",
                         "ad lib",
                         "contrive"
                     ]
    },
    {
        "word":  "inhibit",
        "definition":  "make difficult to accomplish; act as an obstacle",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "Fear can inhibit one from taking risks.",
        "synonyms":  [
                         "impede",
                         "hamper",
                         "check"
                     ]
    },
    {
        "word":  "inscrutable",
        "definition":  "not easily understood; mysterious",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "His expressions were inscrutable, making it hard to predict his next move.",
        "synonyms":  [
                         "enigmatic",
                         "impenetrable",
                         "cryptic"
                     ]
    },
    {
        "word":  "lionize",
        "definition":  "treat someone as a celebrity or hero",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "The artist was lionized after his groundbreaking exhibition.",
        "synonyms":  [
                         "fete",
                         "exalt",
                         "venerate"
                     ]
    },
    {
        "word":  "monotonous",
        "definition":  "lacking in variety, repetitively dull",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "His monotonous voice put everyone to sleep.",
        "synonyms":  [
                         "tedious",
                         "wearisome",
                         "humdrum"
                     ]
    },
    {
        "word":  "peculiar",
        "definition":  "strange or unusual; specific to a particular place or group",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "There\u0027s a peculiar smell coming from the kitchen.",
        "synonyms":  [
                         "uncanny",
                         "anomalous",
                         "idiosyncratic"
                     ]
    },
    {
        "word":  "premeditate",
        "definition":  "consider or plan beforehand",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "The theft was clearly premeditated.",
        "synonyms":  [
                         "conspire",
                         "scheme",
                         "orchestrate"
                     ]
    },
    {
        "word":  "profligate",
        "definition":  "inclined to waste resources or behave extravagantly",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "His profligate spending on luxury cars and lavish vacations soon left him in financial ruin.",
        "synonyms":  [
                         "improvident",
                         "prodigal",
                         "thriftless"
                     ]
    },
    {
        "word":  "reconcile",
        "definition":  "bring back or return to harmony; restore a relationship",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "She tried to reconcile her siblings after their disagreement.",
        "synonyms":  [
                         "harmonize",
                         "square",
                         "syncretize"
                     ]
    },
    {
        "word":  "refine",
        "definition":  "purify; bring to a pure state",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "They refine the metal to remove impurities and improve its quality.",
        "synonyms":  [
                         "purify",
                         "distill",
                         "cleanse"
                     ]
    },
    {
        "word":  "relinquish",
        "definition":  "give up or release a claim, right, or possession",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "He had to relinquish his control over the project.",
        "synonyms":  [
                         "renounce",
                         "cede",
                         "forsake"
                     ]
    },
    {
        "word":  "ruminate",
        "definition":  "meditate or reflect; ponder over",
        "part_of_speech":  "verb",
        "group":  16,
        "example":  "She ruminated on the feedback she received.",
        "synonyms":  [
                         "contemplate",
                         "mull over",
                         "deliberate about"
                     ]
    },
    {
        "word":  "skittish",
        "definition":  "easily scared or startled; timid; difficult to control",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "The skittish kitten darted under the couch at the slightest sound.",
        "synonyms":  [
                         "restive",
                         "fidgety",
                         "anxious"
                     ]
    },
    {
        "word":  "superfluous",
        "definition":  "more than is necessary; excessive",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "Cutting out superfluous information made the report more coherent.",
        "synonyms":  [
                         "redundant",
                         "expendable",
                         "surplus"
                     ]
    },
    {
        "word":  "synoptic",
        "definition":  "providing a general overview or summary",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "The synoptic report highlighted the main points of the project.",
        "synonyms":  [
                         "abridged",
                         "condensed",
                         "epitomized"
                     ]
    },
    {
        "word":  "thorough",
        "definition":  "careful and complete concerning every detail",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "A thorough analysis of the data was conducted.",
        "synonyms":  [
                         "rigorous",
                         "exhaustive",
                         "scrupulous"
                     ]
    },
    {
        "word":  "visionary",
        "definition":  "showing foresight or imagination",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "His visionary ideas often challenged the status quo.",
        "synonyms":  [
                         "inventive",
                         "utopian",
                         "quixotic"
                     ]
    },
    {
        "word":  "vociferous",
        "definition":  "expressing opinions or feelings loudly and forcefully",
        "part_of_speech":  "adjective",
        "group":  16,
        "example":  "The vociferous debate continued for hours.",
        "synonyms":  [
                         "vehement",
                         "uninhibited",
                         "outspoken"
                     ]
    },
    {
        "word":  "acclaim",
        "definition":  "praise with great approval",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "The artist was acclaimed for his innovative designs.",
        "synonyms":  [
                         "applaud",
                         "commend",
                         "eulogize"
                     ]
    },
    {
        "word":  "ascertain",
        "definition":  "find out or learn with certainty",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "She wanted to ascertain the truth behind the rumor.",
        "synonyms":  [
                         "determine",
                         "deduce",
                         "intuit"
                     ]
    },
    {
        "word":  "assertive",
        "definition":  "confident and direct in claiming one\u0027s rights or expressing ideas",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "An assertive demeanor can help in negotiations.",
        "synonyms":  [
                         "decisive",
                         "assured",
                         "authoritative"
                     ]
    },
    {
        "word":  "bogus",
        "definition":  "fake or fraudulent",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "The scam involved selling bogus insurance policies.",
        "synonyms":  [
                         "spurious",
                         "sham",
                         "ersatz"
                     ]
    },
    {
        "word":  "cataclysmic",
        "definition":  "causing great disruption or upheaval",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "The cataclysmic event reshaped the entire landscape.",
        "synonyms":  [
                         "disastrous",
                         "catastrophic",
                         "calamitous"
                     ]
    },
    {
        "word":  "circumscribe",
        "definition":  "limit or restrict something narrowly",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "The law was designed to circumscribe corporate power.",
        "synonyms":  [
                         "confine",
                         "curb",
                         "bound"
                     ]
    },
    {
        "word":  "complementary",
        "definition":  "enhancing or perfecting when combined with something else",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "Red wine and steak are considered complementary.",
        "synonyms":  [
                         "harmonious",
                         "reciprocal",
                         "compatible"
                     ]
    },
    {
        "word":  "contentious",
        "definition":  "causing or likely to provoke disagreement",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "The issue became contentious at the meeting, leading to several heated arguments.",
        "synonyms":  [
                         "vehement",
                         "quarrelsome",
                         "heated"
                     ]
    },
    {
        "word":  "disingenuous",
        "definition":  "pretending to be sincere or straightforward",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "His disingenuous apology was not well-received.",
        "synonyms":  [
                         "deceitful",
                         "duplicitous",
                         "dissembling"
                     ]
    },
    {
        "word":  "divulge",
        "definition":  "disclose or reveal information",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "She refused to divulge her source.",
        "synonyms":  [
                         "broadcast",
                         "promulgate",
                         "impart"
                     ]
    },
    {
        "word":  "dogmatic",
        "definition":  "insisting on one\u0027s ideas without being open to others\u0027",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "He had a dogmatic belief in his theory, despite evidence to the contrary.",
        "synonyms":  [
                         "emphatic",
                         "adamant",
                         "peremptory"
                     ]
    },
    {
        "word":  "fallacious",
        "definition":  "false or mistaken",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "His argument was fallacious and easily debunked.",
        "synonyms":  [
                         "erroneous",
                         "spurious",
                         "specious"
                     ]
    },
    {
        "word":  "foolhardy",
        "definition":  "recklessly daring; careless",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "It\u0027s foolhardy to hike without adequate preparation.",
        "synonyms":  [
                         "rash",
                         "heedless",
                         "imprudent"
                     ]
    },
    {
        "word":  "hinder",
        "definition":  "obstruct or delay progress",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "Lack of funds can hinder the research project.",
        "synonyms":  [
                         "hamper",
                         "inhibit",
                         "thwart"
                     ]
    },
    {
        "word":  "impair",
        "definition":  "weaken or affect negatively",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "Excessive drinking can impair judgment.",
        "synonyms":  [
                         "diminish",
                         "blunt",
                         "mar"
                     ]
    },
    {
        "word":  "impugn",
        "definition":  "challenge the truth or honesty of something",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "Critics impugn his motives for donating to charity.",
        "synonyms":  [
                         "dispute",
                         "take issue",
                         "contest"
                     ]
    },
    {
        "word":  "incessant",
        "definition":  "constant or unending (of something bad or unpleasant)",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "The incessant noise from the construction site was annoying.",
        "synonyms":  [
                         "ceaseless",
                         "unabating",
                         "perpetual"
                     ]
    },
    {
        "word":  "inclined",
        "definition":  "feeling a tendency or preference towards",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "She was inclined to accept the offer.",
        "synonyms":  [
                         "disposed",
                         "biased toward",
                         "liable"
                     ]
    },
    {
        "word":  "inveterate",
        "definition":  "deep-rooted or long-established",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "He\u0027s an inveterate traveler, always exploring new places.",
        "synonyms":  [
                         "ingrained",
                         "entrenched",
                         "hardened"
                     ]
    },
    {
        "word":  "miserly",
        "definition":  "reluctant to spend or share; greedy",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "The miserly old man hoarded all his wealth.",
        "synonyms":  [
                         "parsimonious",
                         "stingy",
                         "avaricious"
                     ]
    },
    {
        "word":  "patent",
        "definition":  "clear or obvious",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "It\u0027s a patent fact that smoking is harmful.",
        "synonyms":  [
                         "plain",
                         "manifest",
                         "self-evident"
                     ]
    },
    {
        "word":  "petulant",
        "definition":  "irritable or impatient, especially over minor issues",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "Her petulant behavior made her difficult to work with.",
        "synonyms":  [
                         "peevish",
                         "cross",
                         "irascible"
                     ]
    },
    {
        "word":  "pithy",
        "definition":  "expressing ideas in a concise, meaningful manner",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "He had a knack for pithy comments.",
        "synonyms":  [
                         "terse",
                         "succinct",
                         "trenchant"
                     ]
    },
    {
        "word":  "pliant",
        "definition":  "flexible or easily influenced",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "He was too pliant to the company\u0027s demands.",
        "synonyms":  [
                         "elastic",
                         "malleable",
                         "docile"
                     ]
    },
    {
        "word":  "sanctimonious",
        "definition":  "giving the impression that one is morally superior",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "Her sanctimonious speeches irritated many.",
        "synonyms":  [
                         "self-righteous",
                         "unctuous",
                         "smug"
                     ]
    },
    {
        "word":  "sound",
        "definition":  "based on reason, sense, or judgment",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "His decision was sound given the circumstances.",
        "synonyms":  [
                         "valid",
                         "weighty",
                         "cogent"
                     ]
    },
    {
        "word":  "tarnish",
        "definition":  "compromise, damage, or sully",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "The mayor\u0027s reputation was tarnished by the allegations of corruption.",
        "synonyms":  [
                         "smirch",
                         "taint",
                         "befoul"
                     ]
    },
    {
        "word":  "tepid",
        "definition":  "exhibiting little passion or eagerness; lukewarm",
        "part_of_speech":  "adjective",
        "group":  17,
        "example":  "The audience gave a tepid response to the performance.",
        "synonyms":  [
                         "apathetic",
                         "halfhearted",
                         "desultory"
                     ]
    },
    {
        "word":  "upbraid",
        "definition":  "criticize or scold severely",
        "part_of_speech":  "verb",
        "group":  17,
        "example":  "She upbraided him for his carelessness.",
        "synonyms":  [
                         "reprimand",
                         "rebuke",
                         "admonish"
                     ]
    },
    {
        "word":  "vexation",
        "definition":  "the state of being irritated or incensed",
        "part_of_speech":  "noun",
        "group":  17,
        "example":  "The delays caused much vexation among the passengers.",
        "synonyms":  [
                         "exasperation",
                         "wrath",
                         "chagrin"
                     ]
    },
    {
        "word":  "abet",
        "definition":  "assist or encourage, usually in wrongdoing",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "He was not directly involved, but he did abet the thief in escaping.",
        "synonyms":  [
                         "back",
                         "collude with",
                         "connive with"
                     ]
    },
    {
        "word":  "accessible",
        "definition":  "clear; capable of being understood",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The author\u0027s writing style is accessible to many readers.",
        "synonyms":  [
                         "comprehensible",
                         "penetrable",
                         "fathomable"
                     ]
    },
    {
        "word":  "acquisitive",
        "definition":  "eager to acquire and possess things",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The company has an acquisitive nature, always looking to buy out smaller businesses.",
        "synonyms":  [
                         "greed",
                         "covetous",
                         "avaricious"
                     ]
    },
    {
        "word":  "amalgamate",
        "definition":  "merge or combine two or more things",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "Several companies amalgamated to form a corporate giant.",
        "synonyms":  [
                         "fuse",
                         "coalesce",
                         "meld"
                     ]
    },
    {
        "word":  "attenuate",
        "definition":  "weaken or lessen in force or thickness",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "The drug helps to attenuate the symptoms of the illness.",
        "synonyms":  [
                         "diminish",
                         "dampen",
                         "erode"
                     ]
    },
    {
        "word":  "augment",
        "definition":  "increase or make larger",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "He augmented his income by freelancing on the side.",
        "synonyms":  [
                         "supplement",
                         "swell",
                         "amplify"
                     ]
    },
    {
        "word":  "aversion",
        "definition":  "an intense or definite dislike",
        "part_of_speech":  "noun",
        "group":  18,
        "example":  "She has an aversion to loud noises.",
        "synonyms":  [
                         "abhorrence",
                         "loathing",
                         "antipathy"
                     ]
    },
    {
        "word":  "blithe",
        "definition":  "showing indifference",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "His blithe attitude towards missing deadlines was infuriating.",
        "synonyms":  [
                         "heedless",
                         "nonchalant",
                         "blasÃ©"
                     ]
    },
    {
        "word":  "contempt",
        "definition":  "the feeling or attitude of regarding someone or something as inferior",
        "part_of_speech":  "noun",
        "group":  18,
        "example":  "The judge viewed the defendant\u0027s lies with contempt.",
        "synonyms":  [
                         "scorn",
                         "denigration",
                         "opprobrium"
                     ]
    },
    {
        "word":  "dawdle",
        "definition":  "move slowly and without purpose",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "If we dawdle, we\u0027ll miss the beginning of the movie.",
        "synonyms":  [
                         "linger",
                         "amble",
                         "dally"
                     ]
    },
    {
        "word":  "deflect",
        "definition":  "change the direction or course of something; make someone deviate",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "His compliment was an attempt to deflect her from asking more questions.",
        "synonyms":  [
                         "sidetrack",
                         "divert",
                         "swerve"
                     ]
    },
    {
        "word":  "discount",
        "definition":  "regard something as being unimportant or incorrect",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "He discounted the rumors as mere gossip.",
        "synonyms":  [
                         "disregard",
                         "overlook",
                         "give no credence"
                     ]
    },
    {
        "word":  "dissident",
        "definition":  "one who disagrees or opposes authority",
        "part_of_speech":  "noun",
        "group":  18,
        "example":  "The dissident was arrested for speaking out against the government.",
        "synonyms":  [
                         "nonconformist",
                         "renegade",
                         "subversive"
                     ]
    },
    {
        "word":  "efficacious",
        "definition":  "producing the desired effect; successful",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The new software proved to be efficacious in managing our financial records.",
        "synonyms":  [
                         "effectual",
                         "fruitful",
                         "constructive"
                     ]
    },
    {
        "word":  "equitable",
        "definition":  "characterized by fairness and justice",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The new policies aimed for a more equitable distribution of resources.",
        "synonyms":  [
                         "just",
                         "impartial",
                         "egalitarian"
                     ]
    },
    {
        "word":  "erratic",
        "definition":  "unpredictable and inconsistent",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "His erratic behavior made it hard to understand his intentions.",
        "synonyms":  [
                         "turbulent",
                         "volatile",
                         "wayward"
                     ]
    },
    {
        "word":  "industrious",
        "definition":  "hard-working and persistent",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "Sarah was the most industrious member of the team, often staying late to finish tasks.",
        "synonyms":  [
                         "diligent",
                         "sedulous",
                         "assiduous"
                     ]
    },
    {
        "word":  "inform",
        "definition":  "give form or character to something or someone",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "Her upbringing in a musical family informs her unique approach to composing songs.",
        "synonyms":  [
                         "characterize",
                         "imbue",
                         "infuse"
                     ]
    },
    {
        "word":  "irksome",
        "definition":  "causing annoyance or irritation",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The constant noise from the construction site was irksome to the residents.",
        "synonyms":  [
                         "vexing",
                         "exasperating",
                         "grating"
                     ]
    },
    {
        "word":  "manacle",
        "definition":  "(used figuratively) restrain, limit, or secure something",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "Fear of failure can manacle your creativity.",
        "synonyms":  [
                         "stifle",
                         "impede",
                         "hamper"
                     ]
    },
    {
        "word":  "modest",
        "definition":  "limited in quantity or amount",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "John was able to live on a modest income because of his inexpensive habits.",
        "synonyms":  [
                         "tolerable",
                         "unexceptional",
                         "scanty"
                     ]
    },
    {
        "word":  "noxious",
        "definition":  "harmful; injurious",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "They were advised to stay indoors due to the noxious fumes.",
        "synonyms":  [
                         "virulent",
                         "pernicious",
                         "vile"
                     ]
    },
    {
        "word":  "pernicious",
        "definition":  "causing harm in a subtle way; deadly",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The spread of misinformation has a pernicious effect on society.",
        "synonyms":  [
                         "injurious",
                         "detrimental",
                         "deleterious"
                     ]
    },
    {
        "word":  "predicament",
        "definition":  "a challenging or awkward situation",
        "part_of_speech":  "noun",
        "group":  18,
        "example":  "The sudden rainstorm left us in a predicament, as we had no umbrella.",
        "synonyms":  [
                         "plight",
                         "quandary",
                         "pickle"
                     ]
    },
    {
        "word":  "proficient",
        "definition":  "good at something; skilled",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "With years of practice, she became proficient in the violin.",
        "synonyms":  [
                         "seasoned",
                         "adroit",
                         "dexterous"
                     ]
    },
    {
        "word":  "prolix",
        "definition":  "using an excessive amount of words; long-winded",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The speaker\u0027s prolix explanation was tiresome for the audience.",
        "synonyms":  [
                         "protracted",
                         "verbose",
                         "ponderous"
                     ]
    },
    {
        "word":  "scorn",
        "definition":  "express strong disapproval or contempt for",
        "part_of_speech":  "verb",
        "group":  18,
        "example":  "She scorned his advances and walked away confidently.",
        "synonyms":  [
                         "deride",
                         "disdain",
                         "disparage"
                     ]
    },
    {
        "word":  "subordinate",
        "definition":  "having a lower rank; less important",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The assistant manager is subordinate to the general manager.",
        "synonyms":  [
                         "inferior",
                         "peripheral",
                         "ancillary"
                     ]
    },
    {
        "word":  "unseemly",
        "definition":  "not proper or in good taste",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "He made an unseemly joke during the formal event.",
        "synonyms":  [
                         "indecorous",
                         "unbecoming",
                         "coarse"
                     ]
    },
    {
        "word":  "veritable",
        "definition":  "(used to emphasize something) true; genuine",
        "part_of_speech":  "adjective",
        "group":  18,
        "example":  "The forest was a veritable paradise for nature lovers.",
        "synonyms":  [
                         "legitimate",
                         "undeniable",
                         "indisputable"
                     ]
    },
    {
        "word":  "acolyte",
        "definition":  "a person who assists or follows another person or cause",
        "part_of_speech":  "noun",
        "group":  19,
        "example":  "James maintained power in the organization through his acolytes.",
        "synonyms":  [
                         "lackey",
                         "disciple",
                         "minion"
                     ]
    },
    {
        "word":  "anoint",
        "definition":  "appoint or designate for a particular role or purpose",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "He was anointed as the next CEO of the company.",
        "synonyms":  [
                         "ordain",
                         "install",
                         "crown"
                     ]
    },
    {
        "word":  "base",
        "definition":  "lacking principles; morally wrong",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "Using someone\u0027s vulnerability for personal gain is a base act.",
        "synonyms":  [
                         "sordid",
                         "wicked",
                         "iniquitous"
                     ]
    },
    {
        "word":  "coercion",
        "definition":  "the act of persuading or forcing someone to do something using threats or violence",
        "part_of_speech":  "noun",
        "group":  19,
        "example":  "The confession was extracted through coercion and is not valid.",
        "synonyms":  [
                         "oppression",
                         "duress",
                         "compulsion"
                     ]
    },
    {
        "word":  "coin",
        "definition":  "invent or devise a new word or phrase",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "She coined the term \"webinar\" for online seminars.",
        "synonyms":  [
                         "conceive of",
                         "originate",
                         "formulate"
                     ]
    },
    {
        "word":  "cunning",
        "definition":  "showing skill in achieving one\u0027s ends through deceit or evasion",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "The fox is often portrayed as a cunning animal in fables.",
        "synonyms":  [
                         "devious",
                         "guileful",
                         "crafty"
                     ]
    },
    {
        "word":  "discomfit",
        "definition":  "make someone feel uneasy or embarrassed",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "The unexpected question seemed to discomfit the speaker.",
        "synonyms":  [
                         "discompose",
                         "fluster",
                         "agitate"
                     ]
    },
    {
        "word":  "dissent",
        "definition":  "hold or express an opinion that varies from a prevailing or official position",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "Several members dissented from the majority decision.",
        "synonyms":  [
                         "demur",
                         "diverge",
                         "repudiate"
                     ]
    },
    {
        "word":  "distill",
        "definition":  "extract the most important information from something",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "The notes were distilled from a much longer report.",
        "synonyms":  [
                         "glean",
                         "consolidate",
                         "synthesize"
                     ]
    },
    {
        "word":  "dubious",
        "definition":  "(of a person\u0027s feeling) suspicious of",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "John was dubious that a \"speed-reader\" could truly understand the content of a book.",
        "synonyms":  [
                         "doubtful",
                         "unresolved",
                         "skeptical"
                     ]
    },
    {
        "word":  "ebullient",
        "definition":  "cheerful and joyful",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "The ebullient child was always ready to play.",
        "synonyms":  [
                         "buoyant",
                         "exuberant",
                         "jaunty"
                     ]
    },
    {
        "word":  "facetious",
        "definition":  "treating serious issues with inappropriate humor",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "His facetious remarks were not well-received at the funeral.",
        "synonyms":  [
                         "flippant",
                         "glib",
                         "waggish"
                     ]
    },
    {
        "word":  "fallible",
        "definition":  "capable of making an error",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "As humans, we are all fallible and make mistakes.",
        "synonyms":  [
                         "errant",
                         "flawed",
                         "error-prone"
                     ]
    },
    {
        "word":  "florid",
        "definition":  "excessively complicated; including too many details",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "The author\u0027s florid prose did not appeal to minimalist readers.",
        "synonyms":  [
                         "ornate",
                         "embellished",
                         "flamboyant"
                     ]
    },
    {
        "word":  "gawky",
        "definition":  "awkward or clumsy",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "The gawky teenager eventually grew into a graceful adult.",
        "synonyms":  [
                         "ungainly",
                         "bumbling",
                         "graceless"
                     ]
    },
    {
        "word":  "inveigle",
        "definition":  "persuade someone to do something using flattery or deception",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "She managed to inveigle him into doing her work for her.",
        "synonyms":  [
                         "coax",
                         "wheedle",
                         "cajole"
                     ]
    },
    {
        "word":  "jettison",
        "definition":  "abandon or discard (something that is no longer needed)",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "The crew jettisoned excess cargo to lighten the aircraft.",
        "synonyms":  [
                         "cast aside",
                         "dispose of",
                         "relinquish"
                     ]
    },
    {
        "word":  "mendacity",
        "definition":  "dishonesty",
        "part_of_speech":  "noun",
        "group":  19,
        "example":  "His mendacity cost him the trust of his friends.",
        "synonyms":  [
                         "insincerity",
                         "deceit",
                         "dissembling",
                         ""
                     ]
    },
    {
        "word":  "munificent",
        "definition":  "more generous than is usual or necessary",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "The munificent donation allowed the hospital to build a new wing.",
        "synonyms":  [
                         "beneficent",
                         "philanthropic",
                         "bountiful"
                     ]
    },
    {
        "word":  "naive",
        "definition":  "showing a lack of experience or judgment",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "Her naive assumption was that everyone would play fair.",
        "synonyms":  [
                         "callow",
                         "gullible",
                         "ingenuous"
                     ]
    },
    {
        "word":  "noble",
        "definition":  "having high moral qualities or principles",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "He made the noble decision to donate all his winnings to charity.",
        "synonyms":  [
                         "virtuous",
                         "upright",
                         "righteous"
                     ]
    },
    {
        "word":  "parochial",
        "definition":  "having a limited perspective; narrow-minded",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "The curriculum was criticized for its parochial viewpoint.",
        "synonyms":  [
                         "myopic",
                         "insular",
                         "provincial"
                     ]
    },
    {
        "word":  "pedestrian",
        "definition":  "lacking imagination or excitement; ordinary",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "Critics described the play as pedestrian and uninspiring.",
        "synonyms":  [
                         "dull",
                         "plodding",
                         "tedious"
                     ]
    },
    {
        "word":  "prevaricate",
        "definition":  "evade or dodge the truth by being evasive",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "He would always prevaricate when asked about his past.",
        "synonyms":  [
                         "equivocate",
                         "waver",
                         "fence"
                     ]
    },
    {
        "word":  "prime",
        "definition":  "prepare something for use or action",
        "part_of_speech":  "verb",
        "group":  19,
        "example":  "The pump needs to be primed before it will work.",
        "synonyms":  [
                         "ready",
                         "equip",
                         "gear up"
                     ]
    },
    {
        "word":  "radical",
        "definition":  "far-reaching; major",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "The company is undergoing radical changes.",
        "synonyms":  [
                         "thorough",
                         "absolute",
                         "utter"
                     ]
    },
    {
        "word":  "recrudescent",
        "definition":  "breaking out again; reviving",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "There are fears of a recrudescent epidemic.",
        "synonyms":  [
                         "resurgent",
                         "renewed",
                         "rekindled"
                     ]
    },
    {
        "word":  "temporal",
        "definition":  "relating to time",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "As we grow older, our memories of temporal events might become hazier.",
        "synonyms":  [
                         "temporary",
                         "transitory",
                         "impermanent"
                     ]
    },
    {
        "word":  "transitory",
        "definition":  "not permanent; temporary",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "Fame is often a transitory experience.",
        "synonyms":  [
                         "ephemeral",
                         "evanescent",
                         "fleeting"
                     ]
    },
    {
        "word":  "viable",
        "definition":  "capable of working or succeeding; feasible",
        "part_of_speech":  "adjective",
        "group":  19,
        "example":  "With limited funds, only a few options are viable.",
        "synonyms":  [
                         "attainable",
                         "realizable",
                         "practical"
                     ]
    },
    {
        "word":  "abreast",
        "definition":  "informed or familiar about a particular topic",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "She keeps herself abreast of all the latest technological developments.",
        "synonyms":  [
                         "acquainted with",
                         "plugged into",
                         "in touch with"
                     ]
    },
    {
        "word":  "confound",
        "definition":  "perplex or puzzle someone",
        "part_of_speech":  "verb",
        "group":  20,
        "example":  "The magician\u0027s tricks confounded the audience.",
        "synonyms":  [
                         "dumbfound",
                         "stupefy",
                         "unnerve"
                     ]
    },
    {
        "word":  "digression",
        "definition":  "an aside that strays from the main subject",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "The professor\u0027s frequent digressions made it hard to follow the lecture.",
        "synonyms":  [
                         "deviation",
                         "departure",
                         "parenthesis"
                     ]
    },
    {
        "word":  "discrepancy",
        "definition":  "a difference between two or more things that should be the same",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "There was a large discrepancy between the estimated cost and the actual bill.",
        "synonyms":  [
                         "disparity",
                         "variance",
                         "deviation"
                     ]
    },
    {
        "word":  "duplicitous",
        "definition":  "deceptive in speech or action",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "The spy\u0027s duplicitous behavior allowed him to gather information from the enemy.",
        "synonyms":  [
                         "deceitful",
                         "treacherous",
                         "dissembling"
                     ]
    },
    {
        "word":  "expedient",
        "definition":  "affording short-term benefits, often at the expense of the long-term",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "The politician took expedient steps to secure votes.",
        "synonyms":  [
                         "gainful",
                         "tactical",
                         "opportune"
                     ]
    },
    {
        "word":  "fabricate",
        "definition":  "invent in order to deceive",
        "part_of_speech":  "verb",
        "group":  20,
        "example":  "He fabricated a story about his past.",
        "synonyms":  [
                         "concoct",
                         "contrive",
                         "manufacture"
                     ]
    },
    {
        "word":  "glum",
        "definition":  "appearing or feeling sad or despondent",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "She had a glum expression after hearing the sad news.",
        "synonyms":  [
                         "gloomy",
                         "lugubrious",
                         "forlorn"
                     ]
    },
    {
        "word":  "harbinger",
        "definition":  "a person or thing that foreshadows or foretells the coming of someone or something",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "The early flowers are harbingers of spring.",
        "synonyms":  [
                         "herald",
                         "omen",
                         "premonition"
                     ]
    },
    {
        "word":  "intrinsic",
        "definition":  "belonging to the essential nature of a thing",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "The intrinsic value of the necklace was in its historical significance, not its gold.",
        "synonyms":  [
                         "inherent",
                         "inborn",
                         "congenital"
                     ]
    },
    {
        "word":  "largesse",
        "definition":  "the trait of being willing to donate money or resources; generosity",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "The university was built largely due to the largesse of its benefactors.",
        "synonyms":  [
                         "benevolence",
                         "munificence",
                         "magnanimity"
                     ]
    },
    {
        "word":  "libertine",
        "definition":  "someone loose in morals; a pleasure-seeker",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "The village considered him a libertine due to his unconventional beliefs.",
        "synonyms":  [
                         "philanderer",
                         "rake",
                         "hedonist"
                     ]
    },
    {
        "word":  "malfeasance",
        "definition":  "wrongdoing or misconduct, especially by a public official",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "The mayor was accused of malfeasance and misuse of city funds.",
        "synonyms":  [
                         "impropriety",
                         "delinquency",
                         "fraud"
                     ]
    },
    {
        "word":  "manifest",
        "definition":  "be revealed; show plainly",
        "part_of_speech":  "verb",
        "group":  20,
        "example":  "He manifested signs of illness.",
        "synonyms":  [
                         "exhibit",
                         "evince",
                         "demonstrate"
                     ]
    },
    {
        "word":  "minute",
        "definition":  "very small",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "The scientist examined the minute details under a microscope.",
        "synonyms":  [
                         "infinitesimal",
                         "minuscule",
                         "diminutive"
                     ]
    },
    {
        "word":  "modish",
        "definition":  "in the current fashion or style",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "Her clothes are always modish and chic.",
        "synonyms":  [
                         "in vogue",
                         "a la mode",
                         "smart"
                     ]
    },
    {
        "word":  "nascent",
        "definition":  "in the process of emerging, being born, or starting to develop",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "The nascent idea became a groundbreaking discovery.",
        "synonyms":  [
                         "budding",
                         "embryonic",
                         "incipient"
                     ]
    },
    {
        "word":  "perennial",
        "definition":  "lasting or remaining active throughout the year, or all the time",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "His perennial enthusiasm is infectious.",
        "synonyms":  [
                         "everlasting",
                         "perpetual",
                         "ceaseless"
                     ]
    },
    {
        "word":  "pious",
        "definition":  "deeply devout; exhibiting religious devotion",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "Her pious nature was evident in her daily actions.",
        "synonyms":  [
                         "reverent",
                         "God-fearing",
                         "dutiful"
                     ]
    },
    {
        "word":  "providential",
        "definition":  "happening at a fortunate or opportune time",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "The rain\u0027s end just before the parade was providential.",
        "synonyms":  [
                         "auspicious",
                         "propitious",
                         "felicitous"
                     ]
    },
    {
        "word":  "prowess",
        "definition":  "skillfulness and dexterity",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "The athlete is known for his prowess in track and field.",
        "synonyms":  [
                         "adroitness",
                         "aptitude",
                         "facility"
                     ]
    },
    {
        "word":  "schism",
        "definition":  "a split or separation within a group or organization",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "The schism between the two factions of the party grew wider.",
        "synonyms":  [
                         "rift",
                         "breach",
                         "rupture"
                     ]
    },
    {
        "word":  "slander",
        "definition":  "baselessly speak ill of someone or something",
        "part_of_speech":  "verb",
        "group":  20,
        "example":  "The rival candidate slandered him throughout the campaign.",
        "synonyms":  [
                         "defame",
                         "libel",
                         "smear"
                     ]
    },
    {
        "word":  "stalwart",
        "definition":  "determined; staunch",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "He has been a stalwart supporter of the cause.",
        "synonyms":  [
                         "faithful",
                         "steadfast",
                         "resolute"
                     ]
    },
    {
        "word":  "supplicate",
        "definition":  "make a humble request; beg or beseech",
        "part_of_speech":  "verb",
        "group":  20,
        "example":  "The followers supplicated for guidance.",
        "synonyms":  [
                         "entreat",
                         "implore",
                         "petition"
                     ]
    },
    {
        "word":  "terse",
        "definition":  "brief and to the point",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "His terse reply left everyone surprised by its directness.",
        "synonyms":  [
                         "concise",
                         "brusque",
                         "blunt"
                     ]
    },
    {
        "word":  "tirade",
        "definition":  "a prolonged, vehement speech or criticism",
        "part_of_speech":  "noun",
        "group":  20,
        "example":  "She went on a tirade about the inefficiencies of the system.",
        "synonyms":  [
                         "diatribe",
                         "invective",
                         "harangue"
                     ]
    },
    {
        "word":  "universal",
        "definition":  "applicable or common to all purposes, conditions, or situations",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "The desire for peace is universal among nations.",
        "synonyms":  [
                         "omnipresent",
                         "ubiquitous",
                         "pervading"
                     ]
    },
    {
        "word":  "vanquish",
        "definition":  "defeat completely",
        "part_of_speech":  "verb",
        "group":  20,
        "example":  "The champion managed to vanquish all her opponents in the tournament.",
        "synonyms":  [
                         "conquer",
                         "trounce",
                         "quash"
                     ]
    },
    {
        "word":  "woeful",
        "definition":  "very sad",
        "part_of_speech":  "adjective",
        "group":  20,
        "example":  "His woeful tale of lost love moved everyone in the room.",
        "synonyms":  [
                         "dejected",
                         "woebegone",
                         "crestfallen"
                     ]
    },
    {
        "word":  "abject",
        "definition":  "most unfortunate or miserable",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "The captured soldier displayed abject terror.",
        "synonyms":  [
                         "wretched",
                         "deplorable",
                         "pitiable"
                     ]
    },
    {
        "word":  "amicable",
        "definition":  "characterized by goodwill and friendliness",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "The two companies reached an amicable agreement.",
        "synonyms":  [
                         "cordial",
                         "fraternal",
                         "harmonious"
                     ]
    },
    {
        "word":  "animosity",
        "definition":  "strong hostility or resentment",
        "part_of_speech":  "noun",
        "group":  21,
        "example":  "There\u0027s a long history of animosity between the two rival groups.",
        "synonyms":  [
                         "enmity",
                         "acrimony",
                         "animus"
                     ]
    },
    {
        "word":  "aver",
        "definition":  "assert with confidence",
        "part_of_speech":  "verb",
        "group":  21,
        "example":  "He avers that he was home at the time of the incident.",
        "synonyms":  [
                         "maintain",
                         "attest",
                         "avow"
                     ]
    },
    {
        "word":  "barrage",
        "definition":  "an overwhelming concentration of something, typically hostile words",
        "part_of_speech":  "noun",
        "group":  21,
        "example":  "The politician faced a barrage of questions from the reporters.",
        "synonyms":  [
                         "bombardment",
                         "deluge",
                         "plethora"
                     ]
    },
    {
        "word":  "cathartic",
        "definition":  "purgative",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "Watching a sad movie can be a cathartic experience for some.",
        "synonyms":  [
                         "purgative",
                         "purifying",
                         "exorcising"
                     ]
    },
    {
        "word":  "decipher",
        "definition":  "decode or determine the meaning of something that is difficult to understand",
        "part_of_speech":  "verb",
        "group":  21,
        "example":  "The archaeologist tried to decipher the ancient script.",
        "synonyms":  [
                         "discern",
                         "apprehend",
                         "decode"
                     ]
    },
    {
        "word":  "delusion",
        "definition":  "a belief that is not true or is founded on false premises",
        "part_of_speech":  "noun",
        "group":  21,
        "example":  "The idea that he could fly was just a delusion.",
        "synonyms":  [
                         "misconception",
                         "fallacy",
                         "chimera"
                     ]
    },
    {
        "word":  "dispense",
        "definition":  "issue, distribute, or give out",
        "part_of_speech":  "verb",
        "group":  21,
        "example":  "The machine dispenses drinks and snacks.",
        "synonyms":  [
                         "dole out",
                         "apportion",
                         "disburse"
                     ]
    },
    {
        "word":  "eloquent",
        "definition":  "fluently persuasive and articulate",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "The president gave an eloquent speech about unity.",
        "synonyms":  [
                         "forceful",
                         "silver-tongued",
                         "glib"
                     ]
    },
    {
        "word":  "enthrall",
        "definition":  "captivate or charm",
        "part_of_speech":  "verb",
        "group":  21,
        "example":  "The magician\u0027s tricks enthralled the audience.",
        "synonyms":  [
                         "enchant",
                         "bewitch",
                         "beguile"
                     ]
    },
    {
        "word":  "eradicate",
        "definition":  "eliminate or destroy completely",
        "part_of_speech":  "verb",
        "group":  21,
        "example":  "The program aims to eradicate childhood diseases.",
        "synonyms":  [
                         "exterminate",
                         "annihilate",
                         "obliterate"
                     ]
    },
    {
        "word":  "fledgling",
        "definition":  "untried or inexperienced; emergent or rising",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "The fledgling company faced many challenges in its early days.",
        "synonyms":  [
                         "budding",
                         "nascent",
                         "incipient"
                     ]
    },
    {
        "word":  "fortitude",
        "definition":  "resilience",
        "part_of_speech":  "noun",
        "group":  21,
        "example":  "He showed remarkable fortitude during tough times.",
        "synonyms":  [
                         "resilience",
                         "mettle",
                         "steadfastness"
                     ]
    },
    {
        "word":  "fortuitous",
        "definition":  "happening by chance, especially a lucky chance",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "The discovery of the manuscript was a fortuitous event.",
        "synonyms":  [
                         "providential",
                         "timely",
                         "serendipitous"
                     ]
    },
    {
        "word":  "goad",
        "definition":  "incite or provoke",
        "part_of_speech":  "verb",
        "group":  21,
        "example":  "She tried to goad him into accepting the challenge.",
        "synonyms":  [
                         "spur",
                         "prod",
                         "rouse"
                     ]
    },
    {
        "word":  "imminent",
        "definition":  "about to happen soon",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "They were in imminent danger of being discovered.",
        "synonyms":  [
                         "impending",
                         "at hand",
                         "forthcoming"
                     ]
    },
    {
        "word":  "incontrovertible",
        "definition":  "undeniable; impossible to dispute",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "The DNA evidence provided incontrovertible proof of the suspect\u0027s presence.",
        "synonyms":  [
                         "incontestable",
                         "irrefutable",
                         "unassailable"
                     ]
    },
    {
        "word":  "itinerant",
        "definition":  "habitually traveling from place to place",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "He lived the life of an itinerant salesman.",
        "synonyms":  [
                         "peripatetic",
                         "roving",
                         "nomadic"
                     ]
    },
    {
        "word":  "magnanimous",
        "definition":  "noble and generous in spirit",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "She was magnanimous in victory, praising her opponent\u0027s effort.",
        "synonyms":  [
                         "benevolent",
                         "beneficent",
                         "munificent"
                     ]
    },
    {
        "word":  "meritorious",
        "definition":  "deserving of merit or commendation; deserving reward",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "Her actions were deemed meritorious by the entire community.",
        "synonyms":  [
                         "laudable",
                         "estimable",
                         "exemplary"
                     ]
    },
    {
        "word":  "mutiny",
        "definition":  "a rebellion against authority; violent strife",
        "part_of_speech":  "noun",
        "group":  21,
        "example":  "The captain faced a mutiny from his crew.",
        "synonyms":  [
                         "insurrection",
                         "revolt",
                         "riot"
                     ]
    },
    {
        "word":  "paradoxical",
        "definition":  "seemingly contradictory but nonetheless possibly true",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "It\u0027s paradoxical that the medicine makes him feel worse before he gets better.",
        "synonyms":  [
                         "incongruous",
                         "anomalous",
                         "oxymoronic"
                     ]
    },
    {
        "word":  "perseverance",
        "definition":  "persistence in an action or belief despite difficulties or opposition",
        "part_of_speech":  "noun",
        "group":  21,
        "example":  "Her perseverance led her to overcome numerous obstacles in life.",
        "synonyms":  [
                         "tenacity",
                         "resolve",
                         "doggedness"
                     ]
    },
    {
        "word":  "render",
        "definition":  "make or provide",
        "part_of_speech":  "verb",
        "group":  21,
        "example":  "One must receive payment for services they render.",
        "synonyms":  [
                         "furnish",
                         "proffer",
                         "supply"
                     ]
    },
    {
        "word":  "repertoire",
        "definition":  "the collection of skills, methods, or performances that one is ready to use",
        "part_of_speech":  "noun",
        "group":  21,
        "example":  "The band has a wide repertoire of jazz standards.",
        "synonyms":  [
                         "arsenal",
                         "range",
                         "assortment"
                     ]
    },
    {
        "word":  "resilient",
        "definition":  "hardy",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "The city is resilient, bouncing back after every challenge.",
        "synonyms":  [
                         "hardy",
                         "buoyant",
                         "irrepressible"
                     ]
    },
    {
        "word":  "resolute",
        "definition":  "firmly determined or unwavering",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "He took a resolute stand against the proposed changes.",
        "synonyms":  [
                         "adamant",
                         "undaunted",
                         "unfaltering"
                     ]
    },
    {
        "word":  "supple",
        "definition":  "pliant, flexible, or easy to bend",
        "part_of_speech":  "adjective",
        "group":  21,
        "example":  "The dancer\u0027s supple movements made the challenging routine look effortless.",
        "synonyms":  [
                         "lithe",
                         "nimble",
                         "agile"
                     ]
    },
    {
        "word":  "valor",
        "definition":  "strength of mind in the face of danger; bravery",
        "part_of_speech":  "noun",
        "group":  21,
        "example":  "The soldier was awarded for his valor in battle.",
        "synonyms":  [
                         "pluck",
                         "nerve",
                         "mettle"
                     ]
    },
    {
        "word":  "arresting",
        "definition":  "attracting attention or striking",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The painting had an arresting quality that captivated everyone in the room.",
        "synonyms":  [
                         "conspicuous",
                         "breathtaking",
                         "notable"
                     ]
    },
    {
        "word":  "chastise",
        "definition":  "criticize harshly",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "The teacher had to chastise the student for repeated disruptions.",
        "synonyms":  [
                         "scold",
                         "reprove",
                         "reprimand"
                     ]
    },
    {
        "word":  "cumbersome",
        "definition":  "large, heavy, slow or complicated",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The old computer system was cumbersome and slow.",
        "synonyms":  [
                         "unwieldy",
                         "ungainly",
                         "hefty"
                     ]
    },
    {
        "word":  "economy",
        "definition":  "frugal or effective use of resources or words",
        "part_of_speech":  "noun",
        "group":  22,
        "example":  "Her economy of words made the speech concise yet impactful.",
        "synonyms":  [
                         "thriftiness",
                         "prudence",
                         "conciseness"
                     ]
    },
    {
        "word":  "elementary",
        "definition":  "basic and fundamental",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The math problems were elementary and easy for the advanced students.",
        "synonyms":  [
                         "rudimentary",
                         "basal",
                         "uncomplicated"
                     ]
    },
    {
        "word":  "embellish",
        "definition":  "make more beautiful or attractive by adding ornamentation",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "She liked to embellish her diary with colorful stickers.",
        "synonyms":  [
                         "adorn",
                         "varnish",
                         "beautify"
                     ]
    },
    {
        "word":  "euphoric",
        "definition":  "intensely happy or excited",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The athlete felt euphoric after winning the gold medal.",
        "synonyms":  [
                         "elated",
                         "gleeful",
                         "jubilant"
                     ]
    },
    {
        "word":  "exonerate",
        "definition":  "clear from accusation or blame",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "The evidence served to exonerate the accused man.",
        "synonyms":  [
                         "absolve",
                         "vindicate",
                         "exculpate"
                     ]
    },
    {
        "word":  "extrapolate",
        "definition":  "predict by projecting past experience or data",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "Based on current trends, we can extrapolate future sales.",
        "synonyms":  [
                         "project",
                         "deduce",
                         "generalize"
                     ]
    },
    {
        "word":  "falter",
        "definition":  "weaken or waver, especially in the face of difficulty; hesitate",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "Her confidence began to falter when she missed the first question.",
        "synonyms":  [
                         "oscillate",
                         "stumble",
                         "flounder"
                     ]
    },
    {
        "word":  "fervent",
        "definition":  "exhibiting enthusiasm and zeal",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "His fervent desire to succeed drove him to work hard every day.",
        "synonyms":  [
                         "impassioned",
                         "ardent",
                         "fervid"
                     ]
    },
    {
        "word":  "foment",
        "definition":  "incite or cause troublesome acts; encourage",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "The rebel leaders tried to foment a revolution.",
        "synonyms":  [
                         "instigate",
                         "agitate",
                         "prompt"
                     ]
    },
    {
        "word":  "gaffe",
        "definition":  "a foolish and embarrassing error, especially a public one",
        "part_of_speech":  "noun",
        "group":  22,
        "example":  "The actor\u0027s gaffe during the live performance became viral.",
        "synonyms":  [
                         "blunder",
                         "slip",
                         "faux pas"
                     ]
    },
    {
        "word":  "heterodox",
        "definition":  "deviating from what is acceptable or commonly believed",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "His heterodox views on the subject raised a few eyebrows.",
        "synonyms":  [
                         "unorthodox",
                         "heretical",
                         "iconoclastic"
                     ]
    },
    {
        "word":  "histrionic",
        "definition":  "overly dramatic or emotional",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The child\u0027s histrionic response was amusing to the adults.",
        "synonyms":  [
                         "melodramatic",
                         "theatrical",
                         "exaggerated"
                     ]
    },
    {
        "word":  "implicit",
        "definition":  "suggested though not directly expressed",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "His trust was implicit, not requiring any proof.",
        "synonyms":  [
                         "implied",
                         "tacit",
                         "insinuated"
                     ]
    },
    {
        "word":  "inviolate",
        "definition":  "not violated; free from hurt of any kind",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The ancient temple remained inviolate for centuries.",
        "synonyms":  [
                         "unmarred",
                         "pristine",
                         "undefiled"
                     ]
    },
    {
        "word":  "liability",
        "definition":  "something or someone that creates a risk or disadvantage",
        "part_of_speech":  "noun",
        "group":  22,
        "example":  "Due to his unpredictable behavior, he\u0027s often seen as a team liability.",
        "synonyms":  [
                         "hindrance",
                         "burden",
                         "nuisance"
                     ]
    },
    {
        "word":  "obstinate",
        "definition":  "stubbornly adhering to an opinion, purpose, or cause",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The obstinate child refused to wear his jacket.",
        "synonyms":  [
                         "headstrong",
                         "willful",
                         "intransigent"
                     ]
    },
    {
        "word":  "painstaking",
        "definition":  "done with careful attention to detail",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The artist\u0027s painstaking attention to detail was evident in his work.",
        "synonyms":  [
                         "meticulous",
                         "assiduous",
                         "sedulous"
                     ]
    },
    {
        "word":  "phlegmatic",
        "definition":  "calm and unemotional disposition",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "Her phlegmatic response was unexpected given the situation.",
        "synonyms":  [
                         "composed",
                         "self-possessed",
                         "stolid"
                     ]
    },
    {
        "word":  "prodigious",
        "definition":  "impressively large in size or extent",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The author\u0027s prodigious output included over fifty novels.",
        "synonyms":  [
                         "enormous",
                         "mammoth",
                         "colossal"
                     ]
    },
    {
        "word":  "propensity",
        "definition":  "an inclination or tendency to behave or think in a certain way",
        "part_of_speech":  "noun",
        "group":  22,
        "example":  "He has a propensity for overeating when stressed.",
        "synonyms":  [
                         "proclivity",
                         "disposition",
                         "penchant"
                     ]
    },
    {
        "word":  "qualm",
        "definition":  "a feeling of apprehension or doubt",
        "part_of_speech":  "noun",
        "group":  22,
        "example":  "She had no qualms about borrowing the dress without asking.",
        "synonyms":  [
                         "misgiving",
                         "reservation",
                         "hesitation"
                     ]
    },
    {
        "word":  "renege",
        "definition":  "fail to fulfill a promise or obligation",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "He reneged on his promise to help her move.",
        "synonyms":  [
                         "go back on",
                         "retract",
                         "default on"
                     ]
    },
    {
        "word":  "stint",
        "definition":  "supply an insufficient amount of something",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "As the owner, he\u0027s notorious for stinting on the food and facilities.",
        "synonyms":  [
                         "skimp on",
                         "scrimp on",
                         "restrict"
                     ]
    },
    {
        "word":  "temper",
        "definition":  "to moderate or neutralize something",
        "part_of_speech":  "verb",
        "group":  22,
        "example":  "You need to temper your expectations, and be more realistic.",
        "synonyms":  [
                         "mitigate",
                         "palliate",
                         "alleviate"
                     ]
    },
    {
        "word":  "tentative",
        "definition":  "uncertain; subject to future change",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "They made a tentative agreement to meet next week.",
        "synonyms":  [
                         "provisional",
                         "unsettled",
                         "preliminary"
                     ]
    },
    {
        "word":  "unprecedented",
        "definition":  "never before seen, done or experienced",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "The athlete\u0027s performance was unprecedented in Olympic history.",
        "synonyms":  [
                         "unparalleled",
                         "unrivaled",
                         "extraordinary"
                     ]
    },
    {
        "word":  "vivacious",
        "definition":  "lively and animated in spirit",
        "part_of_speech":  "adjective",
        "group":  22,
        "example":  "Her vivacious personality lit up the room.",
        "synonyms":  [
                         "bubbly",
                         "ebullient",
                         "buoyant"
                     ]
    },
    {
        "word":  "allusive",
        "definition":  "making indirect references or hints",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "His allusive remarks during the speech left many intrigued about the hidden meaning.",
        "synonyms":  [
                         "connotative",
                         "implied",
                         "figurative"
                     ]
    },
    {
        "word":  "astute",
        "definition":  "having the ability to notice and understand things clearly",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "Her astute observations made her a standout detective.",
        "synonyms":  [
                         "shrewd",
                         "sharp",
                         "acute"
                     ]
    },
    {
        "word":  "commence",
        "definition":  "begin or start",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "The ceremony will commence at noon.",
        "synonyms":  [
                         "initiate",
                         "set in motion",
                         "embark on"
                     ]
    },
    {
        "word":  "convalescent",
        "definition":  "recovering from illness or treatment",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "After the surgery, she spent two weeks in a convalescent state.",
        "synonyms":  [
                         "recuperating",
                         "improving",
                         "on the mend"
                     ]
    },
    {
        "word":  "curb",
        "definition":  "restrict or control",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "She had to curb her impulse to buy every book she saw.",
        "synonyms":  [
                         "restrain",
                         "deter",
                         "inhibit"
                     ]
    },
    {
        "word":  "decry",
        "definition":  "publicly criticize or condemn",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "Activists decry the new policy as harmful.",
        "synonyms":  [
                         "denounce",
                         "lambast",
                         "censure"
                     ]
    },
    {
        "word":  "duress",
        "definition":  "compulsion by threat or force",
        "part_of_speech":  "noun",
        "group":  23,
        "example":  "He signed the document under duress.",
        "synonyms":  [
                         "coercion",
                         "intimidation",
                         "threats"
                     ]
    },
    {
        "word":  "evoke",
        "definition":  "bring to mind or produce a reaction",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "The photograph evoked memories of our childhood.",
        "synonyms":  [
                         "summon",
                         "conjure up",
                         "elicit"
                     ]
    },
    {
        "word":  "fawn",
        "definition":  "display exaggerated affection or flattery, usually to gain favor",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "He fawned over the director in hopes of getting the lead role.",
        "synonyms":  [
                         "pander to",
                         "dote on",
                         "flatter"
                     ]
    },
    {
        "word":  "fret",
        "definition":  "be constantly or visibly worried or anxious",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "She began to fret about the upcoming exam.",
        "synonyms":  [
                         "agonize",
                         "grumble",
                         "pine"
                     ]
    },
    {
        "word":  "glib",
        "definition":  "fluent but insincere and shallow",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "His glib remarks failed to address the real concerns of the people.",
        "synonyms":  [
                         "slick",
                         "facile",
                         "smooth"
                     ]
    },
    {
        "word":  "headstrong",
        "definition":  "determined to have one\u0027s own way; stubborn",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "The headstrong child refused to follow instructions.",
        "synonyms":  [
                         "willful",
                         "obstinate",
                         "wayward"
                     ]
    },
    {
        "word":  "intermittent",
        "definition":  "occurring at irregular intervals; not continuous",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "The intermittent rain made it hard to plan outdoor activities.",
        "synonyms":  [
                         "sporadic",
                         "fitful",
                         "spasmodic"
                     ]
    },
    {
        "word":  "ire",
        "definition":  "anger or wrath",
        "part_of_speech":  "noun",
        "group":  23,
        "example":  "The decision sparked the ire of the community.",
        "synonyms":  [
                         "exasperation",
                         "chagrin",
                         "spleen"
                     ]
    },
    {
        "word":  "languid",
        "definition":  "casual and relaxed; slow",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "The hot weather made everyone feel languid.",
        "synonyms":  [
                         "lethargic",
                         "sluggish",
                         "torpid"
                     ]
    },
    {
        "word":  "lull",
        "definition":  "calm or send to sleep, usually with soothing sounds or movements",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "She would lull the baby to sleep with a gentle song.",
        "synonyms":  [
                         "soothe",
                         "hush",
                         "lullaby"
                     ]
    },
    {
        "word":  "mettlesome",
        "definition":  "spirited and brave",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "The mettlesome horse faced the challenge with energy.",
        "synonyms":  [
                         "hardy",
                         "tenacious",
                         "plucky"
                     ]
    },
    {
        "word":  "mollify",
        "definition":  "calm or reduce the anger or anxiety of someone",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "He tried to mollify the angry customer with a discount.",
        "synonyms":  [
                         "appease",
                         "pacify",
                         "propitiate"
                     ]
    },
    {
        "word":  "neutralize",
        "definition":  "counteract or cancel the effect of something",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "The base will neutralize the acid, creating a balanced solution.",
        "synonyms":  [
                         "nullify",
                         "offset",
                         "counterbalance"
                     ]
    },
    {
        "word":  "nonplussed",
        "definition":  "unsure about what to say or do; confused",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "He was nonplussed by the sudden change of plans.",
        "synonyms":  [
                         "bewildered",
                         "bemused",
                         "discomposed"
                     ]
    },
    {
        "word":  "precipitous",
        "definition":  "extremely steep",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "The hiker was wary of the precipitous drop on one side of the trail.",
        "synonyms":  [
                         "sheer",
                         "abrupt",
                         "sharp"
                     ]
    },
    {
        "word":  "pretentious",
        "definition":  "attempting to impress by affecting greater importance than is actually possessed",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "The movie was criticized for being pretentious and lacking substance.",
        "synonyms":  [
                         "affected",
                         "ostentatious",
                         "inflated"
                     ]
    },
    {
        "word":  "profound",
        "definition":  "(of a person or idea) having deep insight or knowledge",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "The book offers profound insights into human behavior.",
        "synonyms":  [
                         "weighty",
                         "learned",
                         "abstract"
                     ]
    },
    {
        "word":  "propagate",
        "definition":  "spread or promote widely",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "The organization aims to propagate environmental awareness.",
        "synonyms":  [
                         "disseminate",
                         "promulgate",
                         "broadcast"
                     ]
    },
    {
        "word":  "recourse",
        "definition":  "a source of help or strategies used in a difficult situation",
        "part_of_speech":  "noun",
        "group":  23,
        "example":  "When negotiations failed, they had no recourse but to leave.",
        "synonyms":  [
                         "resort",
                         "expedient",
                         "refuge"
                     ]
    },
    {
        "word":  "refute",
        "definition":  "prove to be wrong or false",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "She refuted the claims made against her.",
        "synonyms":  [
                         "controvert",
                         "gainsay",
                         "rebut"
                     ]
    },
    {
        "word":  "regress",
        "definition":  "return to a less advanced or former state",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "After the trauma, he seemed to regress to a childlike state.",
        "synonyms":  [
                         "revert",
                         "lapse",
                         "backslide"
                     ]
    },
    {
        "word":  "repercussion",
        "definition":  "an unintended consequence of an event or action",
        "part_of_speech":  "noun",
        "group":  23,
        "example":  "The financial crash had serious repercussions worldwide.",
        "synonyms":  [
                         "fallout",
                         "reverberation",
                         "aftermath"
                     ]
    },
    {
        "word":  "replenish",
        "definition":  "fill something up again",
        "part_of_speech":  "verb",
        "group":  23,
        "example":  "After the party, we had to replenish our food supplies.",
        "synonyms":  [
                         "recharge",
                         "top up",
                         "restock"
                     ]
    },
    {
        "word":  "vigilant",
        "definition":  "keeping careful watch for dangers or difficulties",
        "part_of_speech":  "adjective",
        "group":  23,
        "example":  "Be vigilant about locking your doors in this neighborhood.",
        "synonyms":  [
                         "circumspect",
                         "heedful",
                         "wary"
                     ]
    },
    {
        "word":  "assail",
        "definition":  "attack physically or verbally",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "The politician was assailed by critics on both sides of the aisle.",
        "synonyms":  [
                         "assault",
                         "censure",
                         "castigate"
                     ]
    },
    {
        "word":  "benevolent",
        "definition":  "showing kindness or goodwill",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "Her benevolent nature made her loved by all who knew her.",
        "synonyms":  [
                         "altruistic",
                         "humanitarian",
                         "magnanimous"
                     ]
    },
    {
        "word":  "berate",
        "definition":  "scold or criticize harshly",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "The coach berated the player for his lack of effort during the game.",
        "synonyms":  [
                         "rebuke",
                         "reprove",
                         "chastise"
                     ]
    },
    {
        "word":  "buoyant",
        "definition":  "lighthearted and lively; having a cheerful attitude",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "Her buoyant spirit lifted everyone\u0027s mood.",
        "synonyms":  [
                         "bright",
                         "jovial",
                         "jaunty"
                     ]
    },
    {
        "word":  "buttress",
        "definition":  "support or reinforce",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "The lawyer buttressed his argument with facts.",
        "synonyms":  [
                         "fortify",
                         "prop up",
                         "brace"
                     ]
    },
    {
        "word":  "condone",
        "definition":  "forgive, excuse, or overlook",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "Society shouldn\u0027t condone such behavior.",
        "synonyms":  [
                         "disregard",
                         "pardon",
                         "let slide"
                     ]
    },
    {
        "word":  "contravene",
        "definition":  "go against or violate a rule, law, or convention",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "The company\u0027s actions contravene international law.",
        "synonyms":  [
                         "breach",
                         "infringe",
                         "flout"
                     ]
    },
    {
        "word":  "denounce",
        "definition":  "criticize or speak out against",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "Activists denounce the new policy as harmful.",
        "synonyms":  [
                         "condemn",
                         "besmirch",
                         "malign"
                     ]
    },
    {
        "word":  "despotic",
        "definition":  "of a ruler with absolute power; tyrannical",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "The despotic regime was overthrown by the revolution.",
        "synonyms":  [
                         "autocratic",
                         "dictatorial",
                         "totalitarian"
                     ]
    },
    {
        "word":  "deviate",
        "definition":  "go off course from; stray from some norm",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "It\u0027s risky to deviate from the accepted protocol.",
        "synonyms":  [
                         "diverge",
                         "digress",
                         "veer"
                     ]
    },
    {
        "word":  "disinterested",
        "definition":  "unbiased",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "The judge remained disinterested and fair throughout the trial.",
        "synonyms":  [
                         "impartial",
                         "objective",
                         "just"
                     ]
    },
    {
        "word":  "escalate",
        "definition":  "increase or intensify",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "The situation began to escalate, causing concern among the residents.",
        "synonyms":  [
                         "soar",
                         "mushroom",
                         "be magnified"
                     ]
    },
    {
        "word":  "exorcise",
        "definition":  "drive out (such as an evil spirit or some other thing) from a person, place, or thing",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "He was finally able to exorcise the haunting memories of her past.",
        "synonyms":  [
                         "cast out",
                         "expel",
                         "cleanse"
                     ]
    },
    {
        "word":  "finicky",
        "definition":  "fussy or hard to please",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "She\u0027s finicky about her food and only eats organic.",
        "synonyms":  [
                         "fastidious",
                         "overcritical",
                         "exacting"
                     ]
    },
    {
        "word":  "foil",
        "definition":  "prevent (something) from being accomplished",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "The police managed to foil the robbery.",
        "synonyms":  [
                         "thwart",
                         "impede",
                         "hamper"
                     ]
    },
    {
        "word":  "intertwined",
        "definition":  "twisted or linked closely together",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "Their lives were deeply intertwined after years of friendship.",
        "synonyms":  [
                         "entwined",
                         "interwoven",
                         "coiled"
                     ]
    },
    {
        "word":  "inundate",
        "definition":  "flood or overwhelm",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "After the news broke, the office was inundated with phone calls.",
        "synonyms":  [
                         "overburden",
                         "deluge",
                         "engulf"
                     ]
    },
    {
        "word":  "ironclad",
        "definition":  "unbreakable or extremely strong",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "She had an ironclad alibi for the night of the crime.",
        "synonyms":  [
                         "impenetrable",
                         "unquestionable",
                         "inviolable"
                     ]
    },
    {
        "word":  "jeopardize",
        "definition":  "put in danger; threaten",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "Drinking and driving can jeopardize innocent lives.",
        "synonyms":  [
                         "endanger",
                         "menace",
                         "compromise"
                     ]
    },
    {
        "word":  "mercurial",
        "definition":  "having a volatile character; fickle",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "He was known for his mercurial temperament.",
        "synonyms":  [
                         "capricious",
                         "temperamental",
                         "impulsive"
                     ]
    },
    {
        "word":  "oblivious",
        "definition":  "not aware of or not noticing something",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "He was completely oblivious to the danger ahead.",
        "synonyms":  [
                         "heedless",
                         "ignorant",
                         "unsuspecting"
                     ]
    },
    {
        "word":  "perpetrate",
        "definition":  "commit something (often a crime); carry out",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "The crimes were perpetrated by a masked individual.",
        "synonyms":  [
                         "execute",
                         "pull off",
                         "effectuate"
                     ]
    },
    {
        "word":  "plaintive",
        "definition":  "expressing sorrow or melancholy",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "The song had a plaintive melody that touched everyone\u0027s hearts.",
        "synonyms":  [
                         "mournful",
                         "doleful",
                         "woeful"
                     ]
    },
    {
        "word":  "poignant",
        "definition":  "emotionally moving",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "The movie\u0027s poignant ending left many in tears.",
        "synonyms":  [
                         "touching",
                         "affecting",
                         "heart-rending"
                     ]
    },
    {
        "word":  "quiescent",
        "definition":  "being at rest; inactive or quiet",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "The volcano remains quiescent for now.",
        "synonyms":  [
                         "latent",
                         "inert",
                         "in abeyance"
                     ]
    },
    {
        "word":  "reiterate",
        "definition":  "say or do again, multiple times",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "I must reiterate the importance of this task.",
        "synonyms":  [
                         "restate",
                         "belabor",
                         "recapitulate"
                     ]
    },
    {
        "word":  "subside",
        "definition":  "become lower; decrease; become less intense",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "The storm began to subside after a few hours.",
        "synonyms":  [
                         "abate",
                         "ebb",
                         "recede"
                     ]
    },
    {
        "word":  "subsume",
        "definition":  "include or contain something else",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "Most of these phenomena can be subsumed under two broad categories.",
        "synonyms":  [
                         "incorporate",
                         "encompass",
                         "consolidate"
                     ]
    },
    {
        "word":  "surmount",
        "definition":  "overcome something, typically a challenge",
        "part_of_speech":  "verb",
        "group":  24,
        "example":  "She had to surmount numerous challenges to achieve her goal.",
        "synonyms":  [
                         "prevail over",
                         "clear",
                         "conquer"
                     ]
    },
    {
        "word":  "tangential",
        "definition":  "only superficially relevant",
        "part_of_speech":  "adjective",
        "group":  24,
        "example":  "Let\u0027s not go off on tangential issues during the meeting.",
        "synonyms":  [
                         "peripheral",
                         "incidental",
                         "extraneous"
                     ]
    },
    {
        "word":  "adept",
        "definition":  "well skilled; completely versed",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "She is adept at playing the violin.",
        "synonyms":  [
                         "deft",
                         "proficient",
                         "talented"
                     ]
    },
    {
        "word":  "adverse",
        "definition":  "unfavorable or opposed to one\u0027s interests or desire",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "The project faced adverse weather conditions.",
        "synonyms":  [
                         "disadvantageous",
                         "unpropitious",
                         "deleterious"
                     ]
    },
    {
        "word":  "appropriate",
        "definition":  "take something forcefully, usually without the owner\u0027s agreement",
        "part_of_speech":  "verb",
        "group":  25,
        "example":  "The company was accused of appropriating indigenous designs.",
        "synonyms":  [
                         "seize",
                         "assume",
                         "commandeer"
                     ]
    },
    {
        "word":  "archetype",
        "definition":  "a typical example of something",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "The hero is an archetype often found in literature.",
        "synonyms":  [
                         "standard",
                         "representative",
                         "paradigm"
                     ]
    },
    {
        "word":  "articulate",
        "definition":  "able to express ideas or feelings fluently and clearly",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "She is very articulate, she can express her thoughts very well.",
        "synonyms":  [
                         "eloquent",
                         "coherent",
                         "well-spoken"
                     ]
    },
    {
        "word":  "auspicious",
        "definition":  "favorable and indicative of good luck",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "It was an auspicious start to the journey.",
        "synonyms":  [
                         "opportune",
                         "propitious",
                         "providential"
                     ]
    },
    {
        "word":  "bereft",
        "definition":  "lacking or mourning something or someone",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "She felt bereft of hope.",
        "synonyms":  [
                         "deprived of",
                         "wanting",
                         "denuded of"
                     ]
    },
    {
        "word":  "captious",
        "definition":  "fault-finding (especially petty ones)",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "The reviewer was captious and nitpicky.",
        "synonyms":  [
                         "nitpicking",
                         "caviling",
                         "carping"
                     ]
    },
    {
        "word":  "conclusive",
        "definition":  "without doubt",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "The evidence was conclusive.",
        "synonyms":  [
                         "incontrovertible",
                         "irrefutable",
                         "decisive"
                     ]
    },
    {
        "word":  "conspire",
        "definition":  "secretly work together for something bad",
        "part_of_speech":  "verb",
        "group":  25,
        "example":  "They conspired to steal the artwork.",
        "synonyms":  [
                         "collude",
                         "intrigue",
                         "plot"
                     ]
    },
    {
        "word":  "delineate",
        "definition":  "describe or depict precisely; outline",
        "part_of_speech":  "verb",
        "group":  25,
        "example":  "The report delineates the steps to be taken.",
        "synonyms":  [
                         "portray",
                         "outline",
                         "specify"
                     ]
    },
    {
        "word":  "disentangle",
        "definition":  "free from entanglement or confusion; make clear",
        "part_of_speech":  "verb",
        "group":  25,
        "example":  "He tried to disentangle the truth from the lies.",
        "synonyms":  [
                         "extricate",
                         "extract",
                         "unravel"
                     ]
    },
    {
        "word":  "exhort",
        "definition":  "strongly persuade, encourage, or urge",
        "part_of_speech":  "verb",
        "group":  25,
        "example":  "The speaker exhorted the audience to take action.",
        "synonyms":  [
                         "adjure",
                         "enjoin",
                         "pressure"
                     ]
    },
    {
        "word":  "frailty",
        "definition":  "quality or state of being weak; weakness",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "The frailty of the bridge was evident.",
        "synonyms":  [
                         "feebleness",
                         "incapacity",
                         "fragility"
                     ]
    },
    {
        "word":  "grievance",
        "definition":  "an issue or problem",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "The workers had several grievances.",
        "synonyms":  [
                         "complaint",
                         "objection",
                         "protest"
                     ]
    },
    {
        "word":  "harangue",
        "definition":  "a long angry rant",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "The politician delivered a passionate harangue to his supporters.",
        "synonyms":  [
                         "diatribe",
                         "tirade",
                         "broadside"
                     ]
    },
    {
        "word":  "ploy",
        "definition":  "a strategy or tactic used to gain an advantage",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "The discount was just a marketing ploy.",
        "synonyms":  [
                         "ruse",
                         "scheme",
                         "gambit"
                     ]
    },
    {
        "word":  "poise",
        "definition":  "a state of balance, equilibrium or stability",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "She handled the situation with great poise.",
        "synonyms":  [
                         "phlegm",
                         "equanimity",
                         "composure"
                     ]
    },
    {
        "word":  "pomposity",
        "definition":  "the quality of being pompous; self-importance",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "His speech was filled with pomposity.",
        "synonyms":  [
                         "imperiousness",
                         "bombast",
                         "grandiosity"
                     ]
    },
    {
        "word":  "proxy",
        "definition":  "a substitute (usually for a person) that is compatible",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "Voting by proxy is allowed.",
        "synonyms":  [
                         "surrogate",
                         "delegate",
                         "agent"
                     ]
    },
    {
        "word":  "relent",
        "definition":  "abandon a harsh intention or attitude by giving in",
        "part_of_speech":  "verb",
        "group":  25,
        "example":  "The stubborn child finally relented and agreed to do his chores.",
        "synonyms":  [
                         "yield",
                         "capitulate",
                         "accede"
                     ]
    },
    {
        "word":  "rhetoric",
        "definition":  "persuasive speech or writing",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "The president\u0027s rhetoric appealed to many.",
        "synonyms":  [
                         "eloquence",
                         "oratory",
                         "diction"
                     ]
    },
    {
        "word":  "rigor",
        "definition":  "thoroughness and strictness",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "The rigor of the testing process was intense.",
        "synonyms":  [
                         "comprehensive",
                         "demanding",
                         "harsh"
                     ]
    },
    {
        "word":  "sparse",
        "definition":  "not dense and meager; having widely spaced intervals",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "Sparse vegetation is found in the desert due to the harsh conditions.",
        "synonyms":  [
                         "infrequent",
                         "scant",
                         "scarce"
                     ]
    },
    {
        "word":  "steadfast",
        "definition":  "fixed or unchanging; steady",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "Her steadfast loyalty was commendable.",
        "synonyms":  [
                         "resolute",
                         "staunch",
                         "dedicated"
                     ]
    },
    {
        "word":  "suspect",
        "definition":  "viewed with suspicion",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "His reasons for being late were suspect.",
        "synonyms":  [
                         "dubious",
                         "skeptical",
                         "questionable"
                     ]
    },
    {
        "word":  "tedious",
        "definition":  "boring and slow, without variety",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "The lecture was tedious and boring.",
        "synonyms":  [
                         "monotonous",
                         "humdrum",
                         "mundane"
                     ]
    },
    {
        "word":  "vitality",
        "definition":  "strength and energy",
        "part_of_speech":  "noun",
        "group":  25,
        "example":  "The team played with great vitality.",
        "synonyms":  [
                         "vivacity",
                         "verve",
                         "exuberance"
                     ]
    },
    {
        "word":  "whimsical",
        "definition":  "playful or silly",
        "part_of_speech":  "adjective",
        "group":  25,
        "example":  "The whimsical decorations added a touch of playfulness to the room.",
        "synonyms":  [
                         "fanciful",
                         "quirky",
                         "waggish"
                     ]
    },
    {
        "word":  "yield",
        "definition":  "produce or generate a result, product, or amount",
        "part_of_speech":  "verb",
        "group":  25,
        "example":  "Fertile soil yields abundant crops throughout the bountiful spring and summer.",
        "synonyms":  [
                         "supply",
                         "furnish",
                         "bestow"
                     ]
    },
    {
        "word":  "apprehension",
        "definition":  "fearful anticipation or worry",
        "part_of_speech":  "noun",
        "group":  26,
        "example":  "The dark clouds caused apprehension among the villagers.",
        "synonyms":  [
                         "nervousness",
                         "unease",
                         "trepidation"
                     ]
    },
    {
        "word":  "ardent",
        "definition":  "full of passion and enthusiasm",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "She\u0027s an ardent supporter of environmental causes.",
        "synonyms":  [
                         "zealous",
                         "fervent",
                         "impassioned"
                     ]
    },
    {
        "word":  "axiomatic",
        "definition":  "evident without proof or argument; self-evident",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "It\u0027s axiomatic that the sun rises in the east.",
        "synonyms":  [
                         "apodictic",
                         "unquestionable",
                         "manifest"
                     ]
    },
    {
        "word":  "cease",
        "definition":  "to stop happening or continuing",
        "part_of_speech":  "verb",
        "group":  26,
        "example":  "The noise ceased as soon as the manager entered the room.",
        "synonyms":  [
                         "halt",
                         "terminate",
                         "abate"
                     ]
    },
    {
        "word":  "conducive",
        "definition":  "helping to bring about or promote a particular outcome",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "The peaceful environment was conducive to studying.",
        "synonyms":  [
                         "favorable",
                         "propitious",
                         "beneficial"
                     ]
    },
    {
        "word":  "corporeal",
        "definition":  "associated with the physical body, not the spirit or soul",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "The soul is separate from our corporeal existence.",
        "synonyms":  [
                         "bodily",
                         "fleshly",
                         "somatic"
                     ]
    },
    {
        "word":  "doctrinaire",
        "definition":  "rigidly sticking to theoretical ideas, rather than being practical",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "His doctrinaire approach didn\u0027t leave room for alternative perspectives.",
        "synonyms":  [
                         "dogmatic",
                         "opinionated",
                         "fanatical"
                     ]
    },
    {
        "word":  "eclectic",
        "definition":  "derived from a diverse range of sources or styles",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "His decorating style is eclectic, blending antique and modern elements.",
        "synonyms":  [
                         "assorted",
                         "disparate",
                         "miscellaneous"
                     ]
    },
    {
        "word":  "equanimity",
        "definition":  "evenness of mind, especially under stress",
        "part_of_speech":  "noun",
        "group":  26,
        "example":  "She handled the crisis with remarkable equanimity.",
        "synonyms":  [
                         "poise",
                         "serenity",
                         "composure"
                     ]
    },
    {
        "word":  "exorbitant",
        "definition":  "going far beyond what is fair, reasonable, or expected",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "They were charged exorbitant prices for a simple meal.",
        "synonyms":  [
                         "extortionate",
                         "outrageous",
                         "inflated"
                     ]
    },
    {
        "word":  "fickle",
        "definition":  "quick to change oneâ€™s opinion or allegiance",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "The fickle winds of fashion can make today\u0027s trend obsolete tomorrow.",
        "synonyms":  [
                         "capricious",
                         "mercurial",
                         "volatile"
                     ]
    },
    {
        "word":  "figurative",
        "definition":  "symbolic rather than literal",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "He used the storm as a figurative representation of his internal turmoil.",
        "synonyms":  [
                         "metaphorical",
                         "allegorical",
                         "representative"
                     ]
    },
    {
        "word":  "flustered",
        "definition":  "agitated or confused",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "He became flustered when confronted with unexpected questions.",
        "synonyms":  [
                         "befuddled",
                         "perplexed",
                         "baffled"
                     ]
    },
    {
        "word":  "gullible",
        "definition":  "easily deceived or tricked",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "Scammers often prey on gullible individuals.",
        "synonyms":  [
                         "naive",
                         "credulous",
                         "unwary"
                     ]
    },
    {
        "word":  "idiosyncratic",
        "definition":  "peculiar to an individual or group; unique",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "She has idiosyncratic mannerisms that make her easily recognizable.",
        "synonyms":  [
                         "eccentric",
                         "quirky",
                         "characteristic"
                     ]
    },
    {
        "word":  "incidental",
        "definition":  "secondary or non-essential part of something",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "Incidental expenses were added to the main bill.",
        "synonyms":  [
                         "auxiliary",
                         "peripheral",
                         "subordinate"
                     ]
    },
    {
        "word":  "ingrained",
        "definition":  "deeply rooted or established",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "It\u0027s an ingrained habit that\u0027s hard to break.",
        "synonyms":  [
                         "entrenched",
                         "inveterate",
                         "intrinsic"
                     ]
    },
    {
        "word":  "insolent",
        "definition":  "boldly disrespectful or rude",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "His insolent attitude towards the teacher got him in trouble.",
        "synonyms":  [
                         "impertinent",
                         "brazen",
                         "impudent"
                     ]
    },
    {
        "word":  "lampoon",
        "definition":  "satirize or poke fun at",
        "part_of_speech":  "verb",
        "group":  26,
        "example":  "He used his comic strip to lampoon the school\u0027s rules.",
        "synonyms":  [
                         "ridicule",
                         "mock",
                         "deride"
                     ]
    },
    {
        "word":  "lavish",
        "definition":  "extravagant, luxurious, or abundant",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "She wore a lavish gown to the ball.",
        "synonyms":  [
                         "opulent",
                         "sumptuous",
                         "elaborate"
                     ]
    },
    {
        "word":  "lugubrious",
        "definition":  "appearing sad or gloomy",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "The movie had a lugubrious tone that left many in tears.",
        "synonyms":  [
                         "mournful",
                         "woeful",
                         "dismal"
                     ]
    },
    {
        "word":  "macabre",
        "definition":  "having a quality of horror or grimness",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "The play had a macabre sense of humor.",
        "synonyms":  [
                         "morbid",
                         "lurid",
                         "ghastly"
                     ]
    },
    {
        "word":  "morose",
        "definition":  "sullen and gloomy",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "He was morose after hearing the bad news.",
        "synonyms":  [
                         "sulky",
                         "glum",
                         "peevish"
                     ]
    },
    {
        "word":  "officious",
        "definition":  "overbearingly assertive, especially in offering unwanted advice or help",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "Her officious attitude constantly pushed unwanted advice on everyone nearby.",
        "synonyms":  [
                         "pushy",
                         "meddling",
                         "bumptious"
                     ]
    },
    {
        "word":  "ramification",
        "definition":  "a consequence or resulting action of a previous event",
        "part_of_speech":  "noun",
        "group":  26,
        "example":  "The ramification of the decision was felt years later.",
        "synonyms":  [
                         "aftermath",
                         "fallout",
                         "byproduct"
                     ]
    },
    {
        "word":  "serene",
        "definition":  "calm, quiet, and peaceful",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "The serene landscape was a perfect place to relax.",
        "synonyms":  [
                         "restful",
                         "placid",
                         "tranquil"
                     ]
    },
    {
        "word":  "supplant",
        "definition":  "replace or take the place of",
        "part_of_speech":  "verb",
        "group":  26,
        "example":  "The new system will supplant the old method.",
        "synonyms":  [
                         "displace",
                         "supersede",
                         "usurp"
                     ]
    },
    {
        "word":  "tacit",
        "definition":  "implied without being directly expressed",
        "part_of_speech":  "adjective",
        "group":  26,
        "example":  "There was a tacit agreement that he would pay for dinner.",
        "synonyms":  [
                         "implicit",
                         "insinuated",
                         "deducible"
                     ]
    },
    {
        "word":  "transcend",
        "definition":  "pass beyond the limits of something",
        "part_of_speech":  "verb",
        "group":  26,
        "example":  "The music seemed to transcend cultural boundaries.",
        "synonyms":  [
                         "surpass",
                         "outpace",
                         "transgress"
                     ]
    },
    {
        "word":  "treatise",
        "definition":  "a written work that provides a systematic and detailed examination of a subject",
        "part_of_speech":  "noun",
        "group":  26,
        "example":  "He wrote a treatise on environmental conservation.",
        "synonyms":  [
                         "disquisition",
                         "exposition",
                         "discourse"
                     ]
    },
    {
        "word":  "antagonize",
        "definition":  "act in opposition to or provoke hostility from",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "His confrontational manner tended to antagonize his colleagues.",
        "synonyms":  [
                         "rile",
                         "incite",
                         "foment"
                     ]
    },
    {
        "word":  "barren",
        "definition":  "incapable of producing offspring or fruit; unproductive",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "The desert is a barren landscape with little vegetation.",
        "synonyms":  [
                         "infertile",
                         "sterile",
                         "desolate"
                     ]
    },
    {
        "word":  "bombastic",
        "definition":  "high-sounding but with little meaning; overfilled",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "The politician\u0027s speech was bombastic, full of lofty words but lacking substance.",
        "synonyms":  [
                         "inflated",
                         "turgid",
                         "pretentious"
                     ]
    },
    {
        "word":  "cajole",
        "definition":  "persuade through flattery or gentle urging",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "She managed to cajole him into doing his homework.",
        "synonyms":  [
                         "lure",
                         "wheedle",
                         "coax"
                     ]
    },
    {
        "word":  "chary",
        "definition":  "being wary or cautiously reluctant",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "She was chary of investing in the risky venture.",
        "synonyms":  [
                         "skeptical",
                         "dubious",
                         "heedful"
                     ]
    },
    {
        "word":  "curmudgeon",
        "definition":  "an ill-tempered person full of stubborn opinions",
        "part_of_speech":  "noun",
        "group":  27,
        "example":  "The old curmudgeon grumbled daily, resisting the village\u0027s progressive changes.",
        "synonyms":  [
                         "crank",
                         "sourpuss",
                         "crosspatch"
                     ]
    },
    {
        "word":  "dirge",
        "definition":  "a mournful song, especially for a funeral or mourning",
        "part_of_speech":  "noun",
        "group":  27,
        "example":  "The choir sang a dirge to honor the deceased.",
        "synonyms":  [
                         "requiem",
                         "lament",
                         "elegy"
                     ]
    },
    {
        "word":  "estimable",
        "definition":  "deserving of respect or admiration",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "His estimable talents were recognized by all.",
        "synonyms":  [
                         "venerable",
                         "laudable",
                         "commendable"
                     ]
    },
    {
        "word":  "euphemism",
        "definition":  "a mild or polite term used to substitute a harsh or offensive one",
        "part_of_speech":  "noun",
        "group":  27,
        "example":  "\"Passed away\" is a euphemism for \"died.\"",
        "synonyms":  [
                         "softening",
                         "circumlocution",
                         "underplaying"
                     ]
    },
    {
        "word":  "excoriate",
        "definition":  "criticize strongly; condemn",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "The film was excoriated by critics for its shallow plot.",
        "synonyms":  [
                         "censure",
                         "denounce",
                         "blast"
                     ]
    },
    {
        "word":  "exigent",
        "definition":  "requiring immediate action or aid; urgent",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "The patient\u0027s condition was exigent, demanding instant medical attention.",
        "synonyms":  [
                         "pressing",
                         "dire",
                         "acute"
                     ]
    },
    {
        "word":  "haughty",
        "definition":  "exhibiting arrogant and condescending pride",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "She gave him a haughty look, dismissing his suggestion.",
        "synonyms":  [
                         "disdainful",
                         "lofty",
                         "scornful"
                     ]
    },
    {
        "word":  "heady",
        "definition":  "intoxicating or stupefying",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "The success brought a heady feeling of invincibility.",
        "synonyms":  [
                         "potent",
                         "inebriate",
                         "vinous"
                     ]
    },
    {
        "word":  "imperturbable",
        "definition":  "not easily annoyed, upset, or excited; calm",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "Even during the crisis, she remained imperturbable.",
        "synonyms":  [
                         "unruffled",
                         "serene",
                         "composed"
                     ]
    },
    {
        "word":  "implacable",
        "definition":  "not able to be appeased",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "Her anger towards the betrayal was implacable.",
        "synonyms":  [
                         "adamant",
                         "unsparing",
                         "relentless"
                     ]
    },
    {
        "word":  "lambaste",
        "definition":  "scold, reprimand, or criticize harshly",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "The coach lambasted the team for their poor performance.",
        "synonyms":  [
                         "condemn",
                         "berate",
                         "upbraid"
                     ]
    },
    {
        "word":  "miscreant",
        "definition":  "one who has behaved badly, or illegally",
        "part_of_speech":  "noun",
        "group":  27,
        "example":  "The security caught the miscreant trying to steal.",
        "synonyms":  [
                         "culprit",
                         "malefactor",
                         "delinquent"
                     ]
    },
    {
        "word":  "peccadillo",
        "definition":  "a small flaw or sin",
        "part_of_speech":  "noun",
        "group":  27,
        "example":  "Though a peccadillo in some eyes, he couldn\u0027t overlook her tardiness.",
        "synonyms":  [
                         "delinquency",
                         "misdeed",
                         "misdemeanor"
                     ]
    },
    {
        "word":  "philistine",
        "definition":  "a person who is ignorant or uneducated",
        "part_of_speech":  "noun",
        "group":  27,
        "example":  "The art community considered him a philistine because of his disdain for modern art.",
        "synonyms":  [
                         "materialist",
                         "lowbrow",
                         "boor"
                     ]
    },
    {
        "word":  "relegate",
        "definition":  "consign to a place or position of insignificance, lower rank, or inferiority",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "The old software was relegated to the back shelf.",
        "synonyms":  [
                         "demote",
                         "disrate",
                         "banish"
                     ]
    },
    {
        "word":  "repugnant",
        "definition":  "offensive or repulsive; arousing disgust or aversion",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "The idea of cheating was repugnant to her.",
        "synonyms":  [
                         "repellent",
                         "abhorrent",
                         "loathsome"
                     ]
    },
    {
        "word":  "sentimental",
        "definition":  "characterized by feelings or nostalgia",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "He kept the old letters for sentimental reasons.",
        "synonyms":  [
                         "tender",
                         "soppy",
                         "mawkish"
                     ]
    },
    {
        "word":  "squander",
        "definition":  "spend profusely or recklessly",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "He squandered all his earnings on luxury items.",
        "synonyms":  [
                         "lavish",
                         "splurge",
                         "dissipate"
                     ]
    },
    {
        "word":  "swindle",
        "definition":  "obtain money by fraudulent or deceitful methods",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "The con artist tried to swindle her out of her savings.",
        "synonyms":  [
                         "dupe",
                         "hoax",
                         "bamboozle"
                     ]
    },
    {
        "word":  "tangible",
        "definition":  "capable of being touched; real or actual",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "The benefits of the project were tangible and widely appreciated.",
        "synonyms":  [
                         "tactile",
                         "palpable",
                         "perceptible"
                     ]
    },
    {
        "word":  "turpitude",
        "definition":  "wickedness or moral corruption",
        "part_of_speech":  "noun",
        "group":  27,
        "example":  "The judge condemned the criminal\u0027s life of turpitude.",
        "synonyms":  [
                         "depravity",
                         "vice",
                         "villainy"
                     ]
    },
    {
        "word":  "unalloyed",
        "definition":  "pure; without any adulterations",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "His happiness was unalloyed when he heard the good news.",
        "synonyms":  [
                         "genuine",
                         "authentic",
                         "pristine"
                     ]
    },
    {
        "word":  "undercut",
        "definition":  "undermine; weaken",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "The store undercuts its competitors to attract more customers.",
        "synonyms":  [
                         "diminish",
                         "debilitate",
                         "sabotage"
                     ]
    },
    {
        "word":  "wheedle",
        "definition":  "attempt to persuade by flattery",
        "part_of_speech":  "verb",
        "group":  27,
        "example":  "She tried to wheedle her dad into buying her a new phone.",
        "synonyms":  [
                         "coax",
                         "cajole",
                         "lure"
                     ]
    },
    {
        "word":  "xenophobic",
        "definition":  "showing a fear or hatred of strangers or foreigners",
        "part_of_speech":  "adjective",
        "group":  27,
        "example":  "His xenophobic attitudes were not appreciated in the multicultural city.",
        "synonyms":  [
                         "prejudiced",
                         "jingoistic",
                         "bigoted"
                     ]
    },
    {
        "word":  "abeyance",
        "definition":  "suspension; temporary suppression",
        "part_of_speech":  "noun",
        "group":  28,
        "example":  "The project was held in abeyance until more funds became available.",
        "synonyms":  [
                         "remission",
                         "moratorium",
                         "dormancy"
                     ]
    },
    {
        "word":  "abstract",
        "definition":  "present in thought or concept but lacking physical existence",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "Justice is an abstract concept.",
        "synonyms":  [
                         "conceptual",
                         "hypothetical",
                         "ideational"
                     ]
    },
    {
        "word":  "affront",
        "definition":  "an open or intentional offense, slight, or insult",
        "part_of_speech":  "noun",
        "group":  28,
        "example":  "He took his friend\u0027s comment as an affront to his character.",
        "synonyms":  [
                         "snub",
                         "slur",
                         "malign"
                     ]
    },
    {
        "word":  "agitate",
        "definition":  "make someone disturbed or excited",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "The thought of speaking in public really agitates her.",
        "synonyms":  [
                         "ruffle",
                         "incite",
                         "faze"
                     ]
    },
    {
        "word":  "august",
        "definition":  "noble and respected; awe-inspiring",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "The august institution has stood for centuries as a beacon of knowledge.",
        "synonyms":  [
                         "venerable",
                         "eminent",
                         "majestic"
                     ]
    },
    {
        "word":  "burnish",
        "definition":  "improve or enhance",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "She worked hard to burnish her skills, ensuring she was recognized as a top expert in her field.",
        "synonyms":  [
                         "polish",
                         "refine",
                         "ameliorate"
                     ]
    },
    {
        "word":  "coy",
        "definition":  "being bashful, shy, or retiring",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "She gave him a coy smile across the room.",
        "synonyms":  [
                         "demure",
                         "reticent",
                         "timid"
                     ]
    },
    {
        "word":  "deprecate",
        "definition":  "belittle or express disapproval of",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "Environmentalists deprecate the use of plastic due to its long decomposition rate.",
        "synonyms":  [
                         "deplore",
                         "abhor",
                         "denounce"
                     ]
    },
    {
        "word":  "disdain",
        "definition":  "the state of being despised; shame",
        "part_of_speech":  "noun",
        "group":  28,
        "example":  "He looked at the broken watch with disdain, wondering why anyone would keep it.",
        "synonyms":  [
                         "contempt",
                         "scorn",
                         "hauteur"
                     ]
    },
    {
        "word":  "disperse",
        "definition":  "scatter in different directions",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "The smoke began to disperse after the fire was extinguished.",
        "synonyms":  [
                         "disseminate",
                         "diffuse",
                         "sprinkle"
                     ]
    },
    {
        "word":  "distend",
        "definition":  "extend or expand, as from internal pressure; swell",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "The balloon began to distend as it was filled with air.",
        "synonyms":  [
                         "bulge",
                         "dilate",
                         "bloat"
                     ]
    },
    {
        "word":  "endemic",
        "definition":  "regularly found and restricted to a particular area or population",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "The koala is endemic to certain parts of Australia, and cannot be found in the wild elsewhere.",
        "synonyms":  [
                         "native",
                         "indigenous",
                         "aboriginal"
                     ]
    },
    {
        "word":  "enmity",
        "definition":  "the quality of being an enemy; hostility",
        "part_of_speech":  "noun",
        "group":  28,
        "example":  "There was enmity between the two rival gangs.",
        "synonyms":  [
                         "acrimony",
                         "animus",
                         "loathing"
                     ]
    },
    {
        "word":  "gauche",
        "definition":  "awkward or lacking in social graces",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "His gauche comment about her dress made the evening uncomfortable.",
        "synonyms":  [
                         "inelegant",
                         "gawky",
                         "unrefined"
                     ]
    },
    {
        "word":  "hysterical",
        "definition":  "wildly emotional or exaggerated in reaction",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "Her hysterical laughter caught everyone\u0027s attention.",
        "synonyms":  [
                         "delirious",
                         "feverish",
                         "agitated"
                     ]
    },
    {
        "word":  "impudent",
        "definition":  "not showing due respect; bold-faced, impertinent",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "The student\u0027s impudent behavior got him sent to the principal\u0027s office.",
        "synonyms":  [
                         "brazen",
                         "insolent",
                         "flippant"
                     ]
    },
    {
        "word":  "inchoate",
        "definition":  "recently started but not fully formed yet",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "Their plans for the business were still inchoate.",
        "synonyms":  [
                         "nascent",
                         "incipient",
                         "preliminary"
                     ]
    },
    {
        "word":  "penchant",
        "definition":  "taste, liking, or inclination",
        "part_of_speech":  "noun",
        "group":  28,
        "example":  "She has a penchant for classical music.",
        "synonyms":  [
                         "appetite",
                         "fondness",
                         "predilection"
                     ]
    },
    {
        "word":  "quandary",
        "definition":  "a dilemma; a difficult decision or situation",
        "part_of_speech":  "noun",
        "group":  28,
        "example":  "Choosing between the two job offers left her in a quandary.",
        "synonyms":  [
                         "plight",
                         "conundrum",
                         "predicament"
                     ]
    },
    {
        "word":  "quarantine",
        "definition":  "place into isolation to prevent the spread of any contagious disease",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "Authorities quickly quarantined the town to contain the unknown virus.",
        "synonyms":  [
                         "sequester",
                         "seclude",
                         "segregate"
                     ]
    },
    {
        "word":  "quash",
        "definition":  "void or suppress",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "The judge decided to quash the case due to a lack of evidence.",
        "synonyms":  [
                         "rescind",
                         "quell",
                         "subdue"
                     ]
    },
    {
        "word":  "quibble",
        "definition":  "complain or argue in a trivial or petty manner",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "Let\u0027s not quibble over such minor details.",
        "synonyms":  [
                         "nitpick",
                         "pettifog",
                         "cavil"
                     ]
    },
    {
        "word":  "ravage",
        "definition":  "devastate, destroy, or lay waste to something",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "The hurricane ravaged the coastal town.",
        "synonyms":  [
                         "raze",
                         "plunder",
                         "havoc"
                     ]
    },
    {
        "word":  "recant",
        "definition":  "withdraw or repudiate a statement or opinion formerly expressed, especially formally and publicly",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "Under pressure, he recanted his statement.",
        "synonyms":  [
                         "abjure",
                         "disown",
                         "renege"
                     ]
    },
    {
        "word":  "redoubtable",
        "definition":  "eliciting respect or fear; notably formidable",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "The chess champion was a redoubtable adversary.",
        "synonyms":  [
                         "imposing",
                         "awe-inspiring",
                         "daunting"
                     ]
    },
    {
        "word":  "retiring",
        "definition":  "introverted and shy; liking privacy",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "Despite being a brilliant scientist, she was a retiring individual who shunned the limelight.",
        "synonyms":  [
                         "bashful",
                         "reclusive",
                         "timorous"
                     ]
    },
    {
        "word":  "shrill",
        "definition":  "high-pitched and piercing in sound quality",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "The shrill ring of the telephone startled him.",
        "synonyms":  [
                         "shrieking",
                         "strident",
                         "squawky"
                     ]
    },
    {
        "word":  "sophistry",
        "definition":  "plausible yet fallacious argumentations or reasoning",
        "part_of_speech":  "noun",
        "group":  28,
        "example":  "The politician\u0027s speech was pure sophistry, lacking genuine solutions.",
        "synonyms":  [
                         "casuistry",
                         "fallacy",
                         "paralogism"
                     ]
    },
    {
        "word":  "substantiate",
        "definition":  "verify something by supplying evidence",
        "part_of_speech":  "verb",
        "group":  28,
        "example":  "She was able to substantiate her claim with documents.",
        "synonyms":  [
                         "endorse",
                         "corroborate",
                         "validate"
                     ]
    },
    {
        "word":  "wily",
        "definition":  "sly, cunning, full of tricks",
        "part_of_speech":  "adjective",
        "group":  28,
        "example":  "The wily fox managed to escape the trap every time.",
        "synonyms":  [
                         "cunning",
                         "shrewd",
                         "crafty"
                     ]
    },
    {
        "word":  "abscond",
        "definition":  "leave hurriedly and secretly, typically to avoid capture",
        "part_of_speech":  "verb",
        "group":  29,
        "example":  "After committing the crime, the thief decided to abscond before the police arrived.",
        "synonyms":  [
                         "flee",
                         "bolt",
                         "decamp"
                     ]
    },
    {
        "word":  "apogee",
        "definition":  "the peak or highest point of something",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "The athlete\u0027s gold medal win was the apogee of her years of training.",
        "synonyms":  [
                         "zenith",
                         "apex",
                         "acme"
                     ]
    },
    {
        "word":  "aspersion",
        "definition":  "a critical or damaging remark or criticism",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "She was hurt by the aspersions cast on her professionalism.",
        "synonyms":  [
                         "vilification",
                         "smear",
                         "defamation"
                     ]
    },
    {
        "word":  "bawdy",
        "definition":  "humorously dealing with sexual subjects; risquÃ© in a comedic way",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "The play was filled with bawdy jokes that made some viewers blush.",
        "synonyms":  [
                         "ribald",
                         "lewd",
                         "titillating"
                     ]
    },
    {
        "word":  "chagrin",
        "definition":  "a feeling of frustration, annoyance, or anger",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "To her chagrin, she realized she had been wearing mismatched shoes all day.",
        "synonyms":  [
                         "pique",
                         "vexation",
                         "resentment"
                     ]
    },
    {
        "word":  "collude",
        "definition":  "secretly cooperate for deceitful or fraudulent purposes",
        "part_of_speech":  "verb",
        "group":  29,
        "example":  "The two companies were accused of colluding to raise prices.",
        "synonyms":  [
                         "connive",
                         "conspire",
                         "scheme"
                     ]
    },
    {
        "word":  "commiserate",
        "definition":  "express sympathy or sorrow with someone who has experienced misfortune",
        "part_of_speech":  "verb",
        "group":  29,
        "example":  "She commiserated with her friend after the loss of her job.",
        "synonyms":  [
                         "comfort",
                         "console",
                         "solace"
                     ]
    },
    {
        "word":  "conflagration",
        "definition":  "a large, destructive fire",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "A conflagration in the town\u0027s center caused widespread damage.",
        "synonyms":  [
                         "inferno",
                         "blaze",
                         "firestorm"
                     ]
    },
    {
        "word":  "contretemps",
        "definition":  "a small disagreement or mishap",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "A brief contretemps over the bill was resolved when she agreed to pay.",
        "synonyms":  [
                         "dissension",
                         "quarrel",
                         "squabble"
                     ]
    },
    {
        "word":  "conviction",
        "definition":  "a strong belief or principle held with confidence",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "Her conviction in justice inspired many to seek change passionately.",
        "synonyms":  [
                         "stance",
                         "tenet",
                         "credo"
                     ]
    },
    {
        "word":  "croon",
        "definition":  "sing softly, typically in a sentimental manner",
        "part_of_speech":  "verb",
        "group":  29,
        "example":  "Under the moonlight, he\u0027d croon love ballads.",
        "synonyms":  [
                         "serenade",
                         "warble",
                         "hum"
                     ]
    },
    {
        "word":  "depose",
        "definition":  "forcibly remove someone from office or power",
        "part_of_speech":  "verb",
        "group":  29,
        "example":  "A plan was in place to depose the corrupt leader.",
        "synonyms":  [
                         "axe",
                         "oust",
                         "expel"
                     ]
    },
    {
        "word":  "detente",
        "definition":  "a period of improved relations between countries, especially when tensions have been high",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "The two rival nations entered a detente after the peace talks.",
        "synonyms":  [
                         "thawing",
                         "pacification",
                         "conciliation"
                     ]
    },
    {
        "word":  "dowdy",
        "definition":  "lacking style or elegance; out of fashion",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "His clothes were considered dowdy by modern standards.",
        "synonyms":  [
                         "shabby",
                         "frumpy",
                         "frumpish"
                     ]
    },
    {
        "word":  "echelon",
        "definition":  "a level or tier within a system or organization",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "As a new recruit, he was in the lowest echelon of the company.",
        "synonyms":  [
                         "rank",
                         "rung",
                         "stratum"
                     ]
    },
    {
        "word":  "ennui",
        "definition":  "a feeling of boredom and dissatisfaction due to a lack of excitement or interest",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "His days were filled with ennui, as his routine never varied.",
        "synonyms":  [
                         "tedium",
                         "languor",
                         "lethargy"
                     ]
    },
    {
        "word":  "expatiate",
        "definition":  "talk or write in great detail about a topic",
        "part_of_speech":  "verb",
        "group":  29,
        "example":  "The professor was known to expatiate on any subject he found interesting.",
        "synonyms":  [
                         "expound",
                         "embellish",
                         "dilate on"
                     ]
    },
    {
        "word":  "fraught",
        "definition":  "filled with tension, stress, or negative emotions",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "The meeting was fraught with disagreements and shouting matches.",
        "synonyms":  [
                         "strained",
                         "contentious",
                         "volatile"
                     ]
    },
    {
        "word":  "fulcrum",
        "definition":  "the main factor or element that plays a pivotal role in a situation",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "Trust is the fulcrum of their strong, enduring relationship together.",
        "synonyms":  [
                         "crux",
                         "linchpin",
                         "keystone"
                     ]
    },
    {
        "word":  "imbroglio",
        "definition":  "a complex and confusing situation, often of a messy or controversial nature",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "The political scandal turned into an imbroglio that lasted for months.",
        "synonyms":  [
                         "dilemma",
                         "muddle",
                         "quandary"
                     ]
    },
    {
        "word":  "jocund",
        "definition":  "merry and in high spirits; exhibiting happiness",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "The jocund melody brightened up the room.",
        "synonyms":  [
                         "genial",
                         "exuberant",
                         "buoyant"
                     ]
    },
    {
        "word":  "languish",
        "definition":  "become weak or feeble, often from neglect or lack of attention",
        "part_of_speech":  "verb",
        "group":  29,
        "example":  "Without water, the plants began to languish.",
        "synonyms":  [
                         "deteriorate",
                         "wane",
                         "wither"
                     ]
    },
    {
        "word":  "nadir",
        "definition":  "the absolute lowest point or worst moment",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "Losing his job marked the nadir of his career.",
        "synonyms":  [
                         "depths",
                         "rock bottom",
                         "abyss"
                     ]
    },
    {
        "word":  "nimble",
        "definition":  "quick and agile in movement or thinking",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "The nimble cat easily jumped from one rooftop to the next.",
        "synonyms":  [
                         "lithe",
                         "deft",
                         "adroit"
                     ]
    },
    {
        "word":  "ominous",
        "definition":  "indicating that something unfavorable is likely to happen",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "Dark clouds on the horizon gave an ominous sign of the coming storm.",
        "synonyms":  [
                         "inauspicious",
                         "menacing",
                         "sinister"
                     ]
    },
    {
        "word":  "outlandish",
        "definition":  "strange, unusual, or bizarre in appearance or style",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "His outfit was outlandish, with bright colors and mismatched patterns.",
        "synonyms":  [
                         "eccentric",
                         "quirky",
                         "anomalous"
                     ]
    },
    {
        "word":  "propitious",
        "definition":  "favorable; advantageous",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "The sunny weather was propitious for our picnic.",
        "synonyms":  [
                         "providential",
                         "auspicious",
                         "opportune"
                     ]
    },
    {
        "word":  "prurient",
        "definition":  "displaying or prompting an undue interest in sexual matters",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "The film was criticized for its prurient scenes.",
        "synonyms":  [
                         "salacious",
                         "lustful",
                         "lascivious"
                     ]
    },
    {
        "word":  "sadistic",
        "definition":  "taking pleasure in causing pain or suffering to others",
        "part_of_speech":  "adjective",
        "group":  29,
        "example":  "The villain\u0027s sadistic tendencies made the movie quite intense.",
        "synonyms":  [
                         "fiendish",
                         "ruthless",
                         "bestial"
                     ]
    },
    {
        "word":  "zenith",
        "definition":  "the point at which something attains its maximum strength or power",
        "part_of_speech":  "noun",
        "group":  29,
        "example":  "The festival is at its zenith when thousands gather for the grand parade.",
        "synonyms":  [
                         "apogee",
                         "acme",
                         "climax"
                     ]
    },
    {
        "word":  "aberrant",
        "definition":  "deviating from what is normal or expected",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "His aberrant behavior raised concerns among his friends.",
        "synonyms":  [
                         "deviant",
                         "anomalous",
                         "peculiar"
                     ]
    },
    {
        "word":  "abide",
        "definition":  "tolerate, follow, or accept",
        "part_of_speech":  "verb",
        "group":  30,
        "example":  "I will abide by the rules of the game.",
        "synonyms":  [
                         "uphold",
                         "heed",
                         "adhere to"
                     ]
    },
    {
        "word":  "bravado",
        "definition":  "a display of boldness or confidence, often feigned",
        "part_of_speech":  "noun",
        "group":  30,
        "example":  "She showed bravado when faced with the challenge, but inside she was nervous.",
        "synonyms":  [
                         "swagger",
                         "bluster",
                         "machismo"
                     ]
    },
    {
        "word":  "callow",
        "definition":  "young and inexperienced; immature",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The callow intern made several mistakes on his first day.",
        "synonyms":  [
                         "jejune",
                         "guileless",
                         "artless"
                     ]
    },
    {
        "word":  "capitulate",
        "definition":  "surrender or give up resistance",
        "part_of_speech":  "verb",
        "group":  30,
        "example":  "The army capitulated after a long battle.",
        "synonyms":  [
                         "yield",
                         "succumb",
                         "relent"
                     ]
    },
    {
        "word":  "cogitate",
        "definition":  "think deeply; ponder or reflect",
        "part_of_speech":  "verb",
        "group":  30,
        "example":  "He took a moment to cogitate before answering the question.",
        "synonyms":  [
                         "contemplate",
                         "ruminate on",
                         "mull over"
                     ]
    },
    {
        "word":  "deportment",
        "definition":  "behavior or manners",
        "part_of_speech":  "noun",
        "group":  30,
        "example":  "His deportment at the formal event was impeccable.",
        "synonyms":  [
                         "conduct",
                         "etiquette",
                         "habits"
                     ]
    },
    {
        "word":  "extemporize",
        "definition":  "improvise, especially in speech or performance",
        "part_of_speech":  "verb",
        "group":  30,
        "example":  "The musician had to extemporize when she forgot her sheet music.",
        "synonyms":  [
                         "ad-lib",
                         "wing it",
                         "play it by ear"
                     ]
    },
    {
        "word":  "factious",
        "definition":  "causing division or disagreement",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The factious debate split the committee in two.",
        "synonyms":  [
                         "schismatic",
                         "discordant",
                         "sectarian"
                     ]
    },
    {
        "word":  "fallow",
        "definition":  "(of farmland) not cultivated; barren",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The farmland lay fallow, awaiting next season\u0027s crops.",
        "synonyms":  [
                         "untilled",
                         "unsown",
                         "unplowed"
                     ]
    },
    {
        "word":  "feint",
        "definition":  "a deceptive movement or action",
        "part_of_speech":  "noun",
        "group":  30,
        "example":  "The boxer used a feint to distract his opponent.",
        "synonyms":  [
                         "pretense",
                         "sham",
                         "ruse"
                     ]
    },
    {
        "word":  "flagrant",
        "definition":  "noticeably offensive; blatant",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "His flagrant disregard for the rules earned him a suspension.",
        "synonyms":  [
                         "egregious",
                         "glaring",
                         "overt"
                     ]
    },
    {
        "word":  "gratuitous",
        "definition":  "unwarranted; without justification",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The movie\u0027s gratuitous violence upset many viewers.",
        "synonyms":  [
                         "undue",
                         "redundant",
                         "superfluous"
                     ]
    },
    {
        "word":  "grovel",
        "definition":  "show submission or fear; beg for favor",
        "part_of_speech":  "verb",
        "group":  30,
        "example":  "He refused to grovel, even when faced with adversity.",
        "synonyms":  [
                         "kowtow to",
                         "fawn over",
                         "curry favor with"
                     ]
    },
    {
        "word":  "indecorous",
        "definition":  "not in good taste; inappropriate or unseemly",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "It was indecorous to make such a joke at a funeral.",
        "synonyms":  [
                         "unbecoming",
                         "indelicate",
                         "wanton"
                     ]
    },
    {
        "word":  "intrigue",
        "definition":  "a secret scheme or plot",
        "part_of_speech":  "noun",
        "group":  30,
        "example":  "The movie revolved around political intrigue and espionage.",
        "synonyms":  [
                         "collusion",
                         "conniving",
                         "conspiracy"
                     ]
    },
    {
        "word":  "nominal",
        "definition":  "in name only",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "He was the nominal leader, but others pulled the strings behind the scenes.",
        "synonyms":  [
                         "token",
                         "symbolic",
                         "titular"
                     ]
    },
    {
        "word":  "obdurate",
        "definition":  "stubborn; unyielding",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "His obdurate refusal to listen was frustrating.",
        "synonyms":  [
                         "obstinate",
                         "intransigent",
                         "intractable"
                     ]
    },
    {
        "word":  "obstreperous",
        "definition":  "noisy, unruly, or hard to control",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The obstreperous child disrupted the entire classroom.",
        "synonyms":  [
                         "boisterous",
                         "disruptive",
                         "rowdy"
                     ]
    },
    {
        "word":  "odious",
        "definition":  "highly offensive; repugnant",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The odious crime shocked the community.",
        "synonyms":  [
                         "detestable",
                         "abhorrent",
                         "revolting"
                     ]
    },
    {
        "word":  "plucky",
        "definition":  "showing courage or determination",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The plucky underdog team won the championship.",
        "synonyms":  [
                         "intrepid",
                         "valiant",
                         "spirited"
                     ]
    },
    {
        "word":  "precocious",
        "definition":  "showing advanced skills or development earlier than usual",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The precocious child was reading novels at age five.",
        "synonyms":  [
                         "gifted",
                         "brilliant",
                         "mature"
                     ]
    },
    {
        "word":  "remuneration",
        "definition":  "payment or compensation for services or work",
        "part_of_speech":  "noun",
        "group":  30,
        "example":  "He received remuneration for his consulting services.",
        "synonyms":  [
                         "stipend",
                         "remittance",
                         "recompense"
                     ]
    },
    {
        "word":  "slovenly",
        "definition":  "untidy, especially in personal appearance",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "His slovenly attire was deemed inappropriate for the interview.",
        "synonyms":  [
                         "unkempt",
                         "disheveled",
                         "scruffy"
                     ]
    },
    {
        "word":  "soliloquy",
        "definition":  "a speech in a drama where a character talks to themselves, expressing inner thoughts",
        "part_of_speech":  "noun",
        "group":  30,
        "example":  "Hamlet\u0027s \"To be or not to be\" is a famous soliloquy.",
        "synonyms":  [
                         "monologue",
                         "oration",
                         "sermon"
                     ]
    },
    {
        "word":  "spurn",
        "definition":  "reject or refuse disdainfully",
        "part_of_speech":  "verb",
        "group":  30,
        "example":  "She spurned his advances, making her feelings clear.",
        "synonyms":  [
                         "repudiate",
                         "rebuff",
                         "scorn"
                     ]
    },
    {
        "word":  "stolid",
        "definition":  "not easily moved or emotional",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "His stolid demeanor made it hard to read his feelings.",
        "synonyms":  [
                         "phlegmatic",
                         "stoic",
                         "impassive"
                     ]
    },
    {
        "word":  "temerity",
        "definition":  "reckless boldness or audacity",
        "part_of_speech":  "noun",
        "group":  30,
        "example":  "She had the temerity to challenge the established norms.",
        "synonyms":  [
                         "nerve",
                         "effrontery",
                         "cheek"
                     ]
    },
    {
        "word":  "tenuous",
        "definition":  "thin or weak",
        "part_of_speech":  "adjective",
        "group":  30,
        "example":  "The evidence against him was tenuous at best.",
        "synonyms":  [
                         "negligible",
                         "shaky",
                         "dubious"
                     ]
    },
    {
        "word":  "verve",
        "definition":  "energy, enthusiasm, or vigor",
        "part_of_speech":  "noun",
        "group":  30,
        "example":  "She performed the dance with unmatched verve and passion.",
        "synonyms":  [
                         "buoyancy",
                         "elan",
                         "vitality"
                     ]
    },
    {
        "word":  "abrogate",
        "definition":  "formally cancel or do away with",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "The government decided to abrogate the outdated law.",
        "synonyms":  [
                         "axe",
                         "repeal",
                         "repudiate"
                     ]
    },
    {
        "word":  "aghast",
        "definition":  "shocked or horrified; struck with amazement",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "She was aghast at the news of the sudden tragedy.",
        "synonyms":  [
                         "appalled",
                         "dismayed",
                         "agog"
                     ]
    },
    {
        "word":  "apprise",
        "definition":  "inform, notify, or advise",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "The manager apprised him of the changes in the plan.",
        "synonyms":  [
                         "intimate",
                         "illuminate",
                         "enlighten"
                     ]
    },
    {
        "word":  "beguile",
        "definition":  "charm or captivate, sometimes in a deceiving way",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "The magician\u0027s tricks beguiled the audience.",
        "synonyms":  [
                         "seduce",
                         "enchant",
                         "mesmerize"
                     ]
    },
    {
        "word":  "boon",
        "definition":  "a good thing; a blessing or a benefit",
        "part_of_speech":  "noun",
        "group":  31,
        "example":  "The new technology proved a boon to students.",
        "synonyms":  [
                         "perk",
                         "privilege",
                         "benison"
                     ]
    },
    {
        "word":  "callous",
        "definition":  "emotionally unfeeling or insensitive",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "His callous remarks upset her deeply.",
        "synonyms":  [
                         "cruel",
                         "hard-bitten",
                         "ruthless"
                     ]
    },
    {
        "word":  "coddle",
        "definition":  "pamper or treat with excessive care",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "Some believe modern children are coddled too much.",
        "synonyms":  [
                         "indulge",
                         "cosset",
                         "gratify"
                     ]
    },
    {
        "word":  "crescendo",
        "definition":  "the loudest or highest point of something",
        "part_of_speech":  "noun",
        "group":  31,
        "example":  "The music reached a crescendo during the finale.",
        "synonyms":  [
                         "apex",
                         "acme",
                         "pinnacle"
                     ]
    },
    {
        "word":  "extenuating",
        "definition":  "lessening the seriousness by providing excuses",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "The judge considered the extenuating circumstances before sentencing.",
        "synonyms":  [
                         "alleviating",
                         "palliative",
                         "diminishing"
                     ]
    },
    {
        "word":  "frenetic",
        "definition":  "fast-paced or wildly energetic",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "The office atmosphere was frenetic during the product launch.",
        "synonyms":  [
                         "frantic",
                         "manic",
                         "feverish"
                     ]
    },
    {
        "word":  "fringe",
        "definition":  "unconventional, extreme, or marginal",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "Her ideas were considered fringe by many of her peers.",
        "synonyms":  [
                         "radical",
                         "peripheral",
                         "outermost"
                     ]
    },
    {
        "word":  "hapless",
        "definition":  "unlucky or unfortunate",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "The hapless traveler lost his luggage twice.",
        "synonyms":  [
                         "doomed",
                         "jinxed",
                         "forlorn"
                     ]
    },
    {
        "word":  "immaculate",
        "definition":  "spotlessly clean or free from errors",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "She wore an immaculate white dress.",
        "synonyms":  [
                         "unsoiled",
                         "pristine",
                         "gleaming"
                     ]
    },
    {
        "word":  "obfuscate",
        "definition":  "obscure or confuse",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "Legal jargon can often obfuscate a document\u0027s true meaning.",
        "synonyms":  [
                         "blur",
                         "muddy",
                         "garble"
                     ]
    },
    {
        "word":  "ossify",
        "definition":  "harden or become unchanging",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "Over time, his beliefs began to ossify.",
        "synonyms":  [
                         "rigidify",
                         "petrify",
                         "solidify"
                     ]
    },
    {
        "word":  "pastiche",
        "definition":  "a work that either imitates the style of multiple other works or combines elements from various works",
        "part_of_speech":  "noun",
        "group":  31,
        "example":  "The film was a pastiche of several genres.",
        "synonyms":  [
                         "parody",
                         "melange",
                         "patchwork"
                     ]
    },
    {
        "word":  "perspicacious",
        "definition":  "keenly perceptive or understanding",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "Her perspicacious insights solved the complex puzzle.",
        "synonyms":  [
                         "shrewd",
                         "observant",
                         "discerning"
                     ]
    },
    {
        "word":  "ponderous",
        "definition":  "heavy or slow-moving, often due to weight; extremely dull",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "His speech had a ponderous tone, making it hard to follow.",
        "synonyms":  [
                         "clumsy",
                         "labored",
                         "lumbering"
                     ]
    },
    {
        "word":  "recluse",
        "definition":  "a person who lives in self-imposed isolation",
        "part_of_speech":  "noun",
        "group":  31,
        "example":  "After years in the spotlight, the star became a recluse.",
        "synonyms":  [
                         "eremite",
                         "hermit",
                         "ascetic"
                     ]
    },
    {
        "word":  "retaliate",
        "definition":  "take revenge or counteract",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "After the attack, there were fears the nation would retaliate.",
        "synonyms":  [
                         "redress",
                         "avenge",
                         "retort"
                     ]
    },
    {
        "word":  "rhapsody",
        "definition":  "an ecstatic expression of feeling or enthusiasm",
        "part_of_speech":  "noun",
        "group":  31,
        "example":  "She went into a rhapsody about her favorite book.",
        "synonyms":  [
                         "ecstasy",
                         "elation",
                         "euphoria"
                     ]
    },
    {
        "word":  "serendipitous",
        "definition":  "occurring by chance in a fortunate way",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "The unexpected meeting was a serendipitous event.",
        "synonyms":  [
                         "fluky",
                         "fortuitous",
                         "providential"
                     ]
    },
    {
        "word":  "shirk",
        "definition":  "avoid or neglect a responsibility or duty",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "He was criticized for trying to shirk his responsibilities.",
        "synonyms":  [
                         "evade",
                         "dodge",
                         "shun"
                     ]
    },
    {
        "word":  "sinecure",
        "definition":  "a job requiring minimal effort but offering a salary",
        "part_of_speech":  "noun",
        "group":  31,
        "example":  "After years of hard work, she longed for a sinecure.",
        "synonyms":  [
                         "cushy job",
                         "plum job",
                         "free ride"
                     ]
    },
    {
        "word":  "sinuous",
        "definition":  "winding or having many smooth turns",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "The sinuous path followed the course of the river.",
        "synonyms":  [
                         "flexuous",
                         "tortuous",
                         "serpentine"
                     ]
    },
    {
        "word":  "sordid",
        "definition":  "involving ignoble actions and motives",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "The detective uncovered the sordid details of the case.",
        "synonyms":  [
                         "seedy",
                         "louche",
                         "sleazy"
                     ]
    },
    {
        "word":  "stanch",
        "definition":  "stop or reduce the flow of",
        "part_of_speech":  "verb",
        "group":  31,
        "example":  "The doctor worked to stanch the bleeding.",
        "synonyms":  [
                         "curb",
                         "halt",
                         "suppress"
                     ]
    },
    {
        "word":  "surfeit",
        "definition":  "an excessive amount of something",
        "part_of_speech":  "noun",
        "group":  31,
        "example":  "There was a surfeit of food at the banquet.",
        "synonyms":  [
                         "surplus",
                         "glut",
                         "plethora"
                     ]
    },
    {
        "word":  "ulterior",
        "definition":  "concealed, typically with a hidden motive",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "She had ulterior motives for attending the event.",
        "synonyms":  [
                         "covert",
                         "underlying",
                         "undivulged"
                     ]
    },
    {
        "word":  "voluble",
        "definition":  "speaking a lot, with great ease, often about unimportant matters",
        "part_of_speech":  "adjective",
        "group":  31,
        "example":  "The voluble salesman pitched his product for hours.",
        "synonyms":  [
                         "verbose",
                         "articulate",
                         "loquacious"
                     ]
    },
    {
        "word":  "abstruse",
        "definition":  "difficult to comprehend or understand",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "Quantum physics is an abstruse topic for many.",
        "synonyms":  [
                         "obscure",
                         "arcane",
                         "esoteric"
                     ]
    },
    {
        "word":  "auxiliary",
        "definition":  "supplementary or additional, often in support",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "The ship has an auxiliary engine in case the main one fails.",
        "synonyms":  [
                         "subsidiary",
                         "ancillary",
                         "fallback"
                     ]
    },
    {
        "word":  "caricature",
        "definition":  "exaggerate features for comedic or satirical effect",
        "part_of_speech":  "verb",
        "group":  32,
        "example":  "The cartoonist caricatured the mayor with an exaggerated, oversized head.",
        "synonyms":  [
                         "parody",
                         "satirize",
                         "lampoon"
                     ]
    },
    {
        "word":  "depravity",
        "definition":  "the state or condition of being depraved or morally corrupted",
        "part_of_speech":  "noun",
        "group":  32,
        "example":  "Tales of the villain\u0027s depravity were spread across the land.",
        "synonyms":  [
                         "perversion",
                         "turpitude",
                         "debauchery"
                     ]
    },
    {
        "word":  "dilettante",
        "definition":  "a person with an amateur interest in the arts or a particular field",
        "part_of_speech":  "noun",
        "group":  32,
        "example":  "Though a passionate painter, he was dismissed as a dilettante by professionals.",
        "synonyms":  [
                         "layperson",
                         "dabbler",
                         "layman"
                     ]
    },
    {
        "word":  "effrontery",
        "definition":  "insolent or bold behavior",
        "part_of_speech":  "noun",
        "group":  32,
        "example":  "He had the effrontery to deny the clear evidence against him.",
        "synonyms":  [
                         "impudence",
                         "audacity",
                         "temerity"
                     ]
    },
    {
        "word":  "encroach",
        "definition":  "intrude or trespass, especially on another\u0027s territory or rights",
        "part_of_speech":  "verb",
        "group":  32,
        "example":  "Developers began to encroach upon the forested area.",
        "synonyms":  [
                         "invade",
                         "infringe",
                         "impinge"
                     ]
    },
    {
        "word":  "endow",
        "definition":  "enrich or furnish with some faculty or quality",
        "part_of_speech":  "verb",
        "group":  32,
        "example":  "Nature has endowed him with great athletic talent.",
        "synonyms":  [
                         "endue",
                         "bestow",
                         "confer"
                     ]
    },
    {
        "word":  "entreat",
        "definition":  "ask earnestly or anxiously; beg",
        "part_of_speech":  "verb",
        "group":  32,
        "example":  "She entreated him to stay for one more day.",
        "synonyms":  [
                         "plead",
                         "implore",
                         "beseech"
                     ]
    },
    {
        "word":  "gregarious",
        "definition":  "sociable and enjoying the company of others",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "Dolphins are known to be gregarious creatures.",
        "synonyms":  [
                         "convivial",
                         "affable",
                         "amiable"
                     ]
    },
    {
        "word":  "indictment",
        "definition":  "an official formal accusation for a criminal offence",
        "part_of_speech":  "noun",
        "group":  32,
        "example":  "The grand jury returned an indictment against the accused.",
        "synonyms":  [
                         "plaint",
                         "imputation",
                         "impeachment"
                     ]
    },
    {
        "word":  "indignant",
        "definition":  "feeling or expressing strong displeasure at something unjust or offensive",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "She was indignant at the way she was treated.",
        "synonyms":  [
                         "resentful",
                         "vexed",
                         "aggrieved"
                     ]
    },
    {
        "word":  "ineluctable",
        "definition":  "inescapable or inevitable",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "Aging is an ineluctable process of life.",
        "synonyms":  [
                         "irrevocable",
                         "predestined",
                         "immutable"
                     ]
    },
    {
        "word":  "inquisitive",
        "definition":  "curious or eager to acquire knowledge",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "Her inquisitive nature led her to explore various topics.",
        "synonyms":  [
                         "nosy",
                         "prying",
                         "intrigued"
                     ]
    },
    {
        "word":  "latitude",
        "definition":  "scope to do something; relative freedom from restrictions",
        "part_of_speech":  "noun",
        "group":  32,
        "example":  "The manager gave him considerable latitude in making decisions.",
        "synonyms":  [
                         "slack",
                         "leeway",
                         "license"
                     ]
    },
    {
        "word":  "levity",
        "definition":  "humor or lightness, especially when inappropriate",
        "part_of_speech":  "noun",
        "group":  32,
        "example":  "The levity in his speech was surprising given the serious occasion.",
        "synonyms":  [
                         "vivacity",
                         "gaiety",
                         "hilarity"
                     ]
    },
    {
        "word":  "malevolent",
        "definition":  "showing ill will or wishing harm to others",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "The villain had a malevolent glare.",
        "synonyms":  [
                         "vicious",
                         "hostile",
                         "malignant"
                     ]
    },
    {
        "word":  "mediate",
        "definition":  "intervene between parties to bring about a resolution",
        "part_of_speech":  "verb",
        "group":  32,
        "example":  "The counselor helped mediate the dispute between the siblings.",
        "synonyms":  [
                         "arbitrate",
                         "conciliate",
                         "intercede"
                     ]
    },
    {
        "word":  "occlude",
        "definition":  "block or stop up; cover",
        "part_of_speech":  "verb",
        "group":  32,
        "example":  "A blood clot can occlude an artery, causing serious health issues.",
        "synonyms":  [
                         "obstruct",
                         "choke",
                         "clog"
                     ]
    },
    {
        "word":  "pacify",
        "definition":  "bring peace to or calm someone down",
        "part_of_speech":  "verb",
        "group":  32,
        "example":  "The lullaby worked to pacify the crying baby.",
        "synonyms":  [
                         "placate",
                         "appease",
                         "conciliate"
                     ]
    },
    {
        "word":  "paragon",
        "definition":  "a model of excellence or perfection",
        "part_of_speech":  "noun",
        "group":  32,
        "example":  "She was seen as a paragon of virtue in the community.",
        "synonyms":  [
                         "exemplar",
                         "epitome",
                         "acme"
                     ]
    },
    {
        "word":  "patronize",
        "definition":  "treat with an apparent kindness that is condescending",
        "part_of_speech":  "verb",
        "group":  32,
        "example":  "No one liked to be patronized by the arrogant manager.",
        "synonyms":  [
                         "disdain",
                         "belittle",
                         "spurn"
                     ]
    },
    {
        "word":  "penurious",
        "definition":  "extremely poor or stingy",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "His penurious habits often led him to avoid spending money, even on essentials.",
        "synonyms":  [
                         "indigent",
                         "destitute",
                         "impecunious"
                     ]
    },
    {
        "word":  "piquant",
        "definition":  "stimulating to the senses; engaging; charming",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "The mystery novel had a piquant plot twist that kept readers engaged until the very end.",
        "synonyms":  [
                         "intriguing",
                         "spirited",
                         "sparkling"
                     ]
    },
    {
        "word":  "rampant",
        "definition":  "unrestrained or unchecked, usually in a negative manner",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "Corruption was rampant in the city.",
        "synonyms":  [
                         "rife",
                         "pervasive",
                         "unbridled"
                     ]
    },
    {
        "word":  "remote",
        "definition":  "not likely to happen",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "There\u0027s a remote possibility that we might move to another city.",
        "synonyms":  [
                         "far-fetched",
                         "implausible",
                         "improbable"
                     ]
    },
    {
        "word":  "reprobate",
        "definition":  "a person who is immoral or who lacks principles",
        "part_of_speech":  "noun",
        "group":  32,
        "example":  "Despite being a reprobate, he charmed everyone with his eloquence.",
        "synonyms":  [
                         "rogue",
                         "rascal",
                         "wretch"
                     ]
    },
    {
        "word":  "turbid",
        "definition":  "(of water) muddy or opaque due to suspended particles",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "The river\u0027s rapid flow left the water extremely turbid and muddy.",
        "synonyms":  [
                         "murky",
                         "riled",
                         "roily"
                     ]
    },
    {
        "word":  "turgid",
        "definition":  "swollen or bloated",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "His leg was turgid with fluid, painfully stretched and discolored.",
        "synonyms":  [
                         "inflated",
                         "engorged",
                         "bulging"
                     ]
    },
    {
        "word":  "vacuous",
        "definition":  "lacking intelligence or thought",
        "part_of_speech":  "adjective",
        "group":  32,
        "example":  "The actor gave a vacuous smile during the interview.",
        "synonyms":  [
                         "vacant",
                         "inane",
                         "inscrutable"
                     ]
    },
    {
        "word":  "affluent",
        "definition":  "abounding in goods or riches",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The affluent neighborhood boasted large houses and expensive cars.",
        "synonyms":  [
                         "prosperous",
                         "opulent",
                         "well-to-do"
                     ]
    },
    {
        "word":  "allegorical",
        "definition":  "containing symbolic representation",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The novel\u0027s allegorical themes provoke deep thought.",
        "synonyms":  [
                         "emblematic",
                         "figurative",
                         "metaphorical"
                     ]
    },
    {
        "word":  "allude",
        "definition":  "refer to something indirectly or by suggestion",
        "part_of_speech":  "verb",
        "group":  33,
        "example":  "The poet often alludes to classical myths in her work.",
        "synonyms":  [
                         "imply",
                         "intimate",
                         "suggest"
                     ]
    },
    {
        "word":  "amplify",
        "definition":  "render larger, more extended, or more intense",
        "part_of_speech":  "verb",
        "group":  33,
        "example":  "The speaker amplified his argument effectively.",
        "synonyms":  [
                         "augment",
                         "magnify",
                         "escalate"
                     ]
    },
    {
        "word":  "catastrophic",
        "definition":  "disastrous or ruinous, from which recovery is impossible",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The catastrophic economic collapse affected millions of lives.",
        "synonyms":  [
                         "cataclysmic",
                         "woeful",
                         "calamitous"
                     ]
    },
    {
        "word":  "contemporary",
        "definition":  "from the same time period",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "Shakespeare and Cervantes were contemporary writers in the early 1600s.",
        "synonyms":  [
                         "contemporaneous",
                         "concurrent",
                         "coexistent"
                     ]
    },
    {
        "word":  "conundrum",
        "definition":  "a difficult choice or decision that must be made",
        "part_of_speech":  "noun",
        "group":  33,
        "example":  "Solving the energy crisis presents a conundrum for modern scientists.",
        "synonyms":  [
                         "dilemma",
                         "quandary",
                         "enigma"
                     ]
    },
    {
        "word":  "defame",
        "definition":  "disgrace; harm or diminish the reputation of someone",
        "part_of_speech":  "verb",
        "group":  33,
        "example":  "The article unjustly defamed the politician\u0027s character.",
        "synonyms":  [
                         "libel",
                         "slander",
                         "traduce"
                     ]
    },
    {
        "word":  "detract",
        "definition":  "reduce the value, importance, or quality of something",
        "part_of_speech":  "verb",
        "group":  33,
        "example":  "Frequent errors detract from the author\u0027s credibility.",
        "synonyms":  [
                         "trivialize",
                         "belittle",
                         "undermine"
                     ]
    },
    {
        "word":  "detrimental",
        "definition":  "causing damage or harm",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "Smoking is highly detrimental to long-term health.",
        "synonyms":  [
                         "pernicious",
                         "inimical",
                         "deleterious"
                     ]
    },
    {
        "word":  "devious",
        "definition":  "cunning or deceiving; not straightforward or honest",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "His devious tactics outsmarted even the shrewdest opponents.",
        "synonyms":  [
                         "dubious",
                         "disreputable",
                         "unscrupulous"
                     ]
    },
    {
        "word":  "dormant",
        "definition":  "inactive or asleep; in a suspended state",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The volcano remains dormant for now.",
        "synonyms":  [
                         "reposing",
                         "latent",
                         "quiescent"
                     ]
    },
    {
        "word":  "draconian",
        "definition":  "very severe, cruel, or harsh",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The company\u0027s draconian policies led to widespread employee dissatisfaction.",
        "synonyms":  [
                         "drastic",
                         "punitive",
                         "stringent"
                     ]
    },
    {
        "word":  "egalitarian",
        "definition":  "characterized by social equality and equal rights for all people",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "She advocates egalitarian education policies.",
        "synonyms":  [
                         "equalitarian",
                         "equitable",
                         "unbigoted"
                     ]
    },
    {
        "word":  "elusive",
        "definition":  "evading capture, comprehension or remembrance",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The elusive answer evaded even the smartest scholars.",
        "synonyms":  [
                         "ambiguous",
                         "baffling",
                         "fugitive"
                     ]
    },
    {
        "word":  "erstwhile",
        "definition":  "former; previous",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "Her erstwhile friend became her fiercest competitor.",
        "synonyms":  [
                         "antecedent",
                         "quondam",
                         "precursory"
                     ]
    },
    {
        "word":  "gloat",
        "definition":  "exhibit pleasure at an adversary\u0027s misfortune",
        "part_of_speech":  "verb",
        "group":  33,
        "example":  "He gloated over his rival\u0027s mistake.",
        "synonyms":  [
                         "exult in",
                         "revel in",
                         "crow over"
                     ]
    },
    {
        "word":  "harrowing",
        "definition":  "causing pain or distress",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The harrowing tale of survival left the audience speechless.",
        "synonyms":  [
                         "traumatic",
                         "excruciating",
                         "agonizing"
                     ]
    },
    {
        "word":  "indefinite",
        "definition":  "without limit or until further notice",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The project was postponed for an indefinite period.",
        "synonyms":  [
                         "unspecified",
                         "unfixed",
                         "indeterminate"
                     ]
    },
    {
        "word":  "ingenious",
        "definition":  "showing originality or sagacity; witty",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "His ingenious approach streamlined the entire process.",
        "synonyms":  [
                         "inventive",
                         "dexterous",
                         "adroit"
                     ]
    },
    {
        "word":  "keen",
        "definition":  "showing a quick willingness to do something",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "He was keen to embrace innovative solutions in the tech conference.",
        "synonyms":  [
                         "fervent",
                         "enthusiastic",
                         "impassioned"
                     ]
    },
    {
        "word":  "multifaceted",
        "definition":  "having many aspects; nuanced or diverse",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The multifaceted program addresses health, education, and welfare.",
        "synonyms":  [
                         "versatile",
                         "sundry",
                         "heterogeneous"
                     ]
    },
    {
        "word":  "omniscient",
        "definition":  "having total knowledge",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "An omniscient narrator describes the story.",
        "synonyms":  [
                         "all-knowing",
                         "all-seeing",
                         "pansophical"
                     ]
    },
    {
        "word":  "remarkable",
        "definition":  "worthy of remark; surprising",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The team\u0027s remarkable cohesion led to their unprecedented success.",
        "synonyms":  [
                         "extraordinary",
                         "astounding",
                         "exceptional"
                     ]
    },
    {
        "word":  "sober",
        "definition":  "not drunk; not intoxicated",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "He remained sober throughout the evening.",
        "synonyms":  [
                         "temperate",
                         "abstinent",
                         "clear-headed"
                     ]
    },
    {
        "word":  "stem from",
        "definition":  "be caused by or derived from",
        "part_of_speech":  "verb",
        "group":  33,
        "example":  "Her fear stems from a past incident.",
        "synonyms":  [
                         "arise from",
                         "originate from",
                         "emanate from"
                     ]
    },
    {
        "word":  "subdued",
        "definition":  "conquered; overpowered; crushed; submissive",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "The subdued rebellion ended with a peaceful agreement.",
        "synonyms":  [
                         "quelled",
                         "subjugated",
                         "hegemonized"
                     ]
    },
    {
        "word":  "token",
        "definition":  "merely symbolic; done only for appearance\u0027s sake",
        "part_of_speech":  "adjective",
        "group":  33,
        "example":  "His apology was a mere token gesture.",
        "synonyms":  [
                         "nominal",
                         "hollow",
                         "inconsequential"
                     ]
    },
    {
        "word":  "unravel",
        "definition":  "clear from complication or difficulty",
        "part_of_speech":  "verb",
        "group":  33,
        "example":  "The journalist managed to unravel the complex political scandal.",
        "synonyms":  [
                         "elucidate",
                         "untangle",
                         "resolve"
                     ]
    },
    {
        "word":  "withstand",
        "definition":  "resist or endure (something) successfully",
        "part_of_speech":  "verb",
        "group":  33,
        "example":  "The structure withstood the earthquake.",
        "synonyms":  [
                         "outface",
                         "defy",
                         "persevere"
                     ]
    },
    {
        "word":  "abrasive",
        "definition":  "overly aggressive and causing irritation",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "His abrasive comments during the meeting hindered constructive discussion.",
        "synonyms":  [
                         "acerbic",
                         "brusque",
                         "grating"
                     ]
    },
    {
        "word":  "artful",
        "definition":  "skilful at using dishonest or unfair means to achieve a purpose",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "The lawyer\u0027s artful cross-examination revealed the truth.",
        "synonyms":  [
                         "sly",
                         "guileful",
                         "astute"
                     ]
    },
    {
        "word":  "avert",
        "definition":  "prevent the occurence of",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "The diplomat\u0027s timely intervention averted a potential conflict.",
        "synonyms":  [
                         "preclude",
                         "halt",
                         "ward of"
                     ]
    },
    {
        "word":  "avid",
        "definition":  "enthusiastic; showing great interest in something or desire to do something",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "An avid collector, she sought rare books from around the world.",
        "synonyms":  [
                         "ardent",
                         "fanatical",
                         "voracious"
                     ]
    },
    {
        "word":  "brevity",
        "definition":  "conciseness",
        "part_of_speech":  "noun",
        "group":  34,
        "example":  "His speech was admired for its clarity and brevity.",
        "synonyms":  [
                         "succinctness",
                         "concision",
                         "pithiness"
                     ]
    },
    {
        "word":  "bromide",
        "definition":  "a trite and unoriginal remark",
        "part_of_speech":  "noun",
        "group":  34,
        "example":  "His speech was filled with the usual bromides, offering nothing new.",
        "synonyms":  [
                         "truism",
                         "banality",
                         "inanity"
                     ]
    },
    {
        "word":  "circumstantial",
        "definition":  "suggesting guilt, but not proving it conclusively",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "The case hinged on circumstantial evidence that hinted at the suspect\u0027s involvement.",
        "synonyms":  [
                         "inferential",
                         "conjectural",
                         "implicative"
                     ]
    },
    {
        "word":  "cloying",
        "definition":  "unpleasantly excessive; excessively sweet",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "The movie\u0027s cloying sentimentality overshadowed its potential depth.",
        "synonyms":  [
                         "nauseating",
                         "saccharine",
                         "mawkish"
                     ]
    },
    {
        "word":  "counterfeit",
        "definition":  "false, especially of money; inauthentic",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "The museum discovered the painting was a counterfeit masterpiece.",
        "synonyms":  [
                         "feigned",
                         "spurious",
                         "pseudo"
                     ]
    },
    {
        "word":  "denigrate",
        "definition":  "criticize so as to disparage or defame",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "It\u0027s not right to denigrate someone\u0027s achievements without evidence.",
        "synonyms":  [
                         "deprecate",
                         "besmirch",
                         "calumniate"
                     ]
    },
    {
        "word":  "disciple",
        "definition":  "an active follower of someone, or some philosophy",
        "part_of_speech":  "noun",
        "group":  34,
        "example":  "He was a loyal disciple of the renowned philosopher.",
        "synonyms":  [
                         "adherent",
                         "acolyte",
                         "apologist"
                     ]
    },
    {
        "word":  "extol",
        "definition":  "praise highly; express admiration",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "The mayor extolled the hero\u0027s bravery in the ceremony.",
        "synonyms":  [
                         "eulogize",
                         "acclaim",
                         "panegyrize"
                     ]
    },
    {
        "word":  "forebode",
        "definition":  "be prescient of some ill or misfortune; inward conviction of a calamity to happen",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "His sudden mood change seemed to forebode trouble in the office.",
        "synonyms":  [
                         "prognosticate",
                         "augur",
                         "foretoken"
                     ]
    },
    {
        "word":  "ideologue",
        "definition":  "a person who advocates an ideology",
        "part_of_speech":  "noun",
        "group":  34,
        "example":  "The political ideologue refused to consider alternative viewpoints.",
        "synonyms":  [
                         "partisan",
                         "adherent",
                         "devotee"
                     ]
    },
    {
        "word":  "impediment",
        "definition":  "a hindrance which obstructs progress; a disability affecting the hearing or speech",
        "part_of_speech":  "noun",
        "group":  34,
        "example":  "His stutter was an impediment to his public speaking career.",
        "synonyms":  [
                         "encumbrance",
                         "deterrent",
                         "restraint"
                     ]
    },
    {
        "word":  "imperative",
        "definition":  "extremely important",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "Addressing climate change is an imperative task for future generations.",
        "synonyms":  [
                         "exigent",
                         "indispensable",
                         "compulsory"
                     ]
    },
    {
        "word":  "impulsive",
        "definition":  "making rapid decisions carelessly",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "Her impulsive purchase left her with regret and financial stress.",
        "synonyms":  [
                         "impetuous",
                         "uninhibited",
                         "hasty"
                     ]
    },
    {
        "word":  "interminable",
        "definition":  "existing without an end; ceaseless",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "The meeting felt interminable, lasting for hours without a clear conclusion.",
        "synonyms":  [
                         "incessant",
                         "perpetual",
                         "relentless"
                     ]
    },
    {
        "word":  "intuitive",
        "definition":  "spontaneous, without requiring conscious thought",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "His intuitive response to the emergency situation saved lives.",
        "synonyms":  [
                         "instinctive",
                         "congenital",
                         "involuntary"
                     ]
    },
    {
        "word":  "lassitude",
        "definition":  "lack of energy; fatigue",
        "part_of_speech":  "noun",
        "group":  34,
        "example":  "After a long day of hiking, a feeling of lassitude set in.",
        "synonyms":  [
                         "lethargy",
                         "languor",
                         "enervation"
                     ]
    },
    {
        "word":  "omit",
        "definition":  "leave out or exclude; fail to do",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "Please do not omit any important details from your report.",
        "synonyms":  [
                         "eliminate",
                         "expunge",
                         "neglect"
                     ]
    },
    {
        "word":  "ornate",
        "definition":  "elaborately ornamented, often to excess",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "The ballroom was adorned with ornate chandeliers and golden trim.",
        "synonyms":  [
                         "embellished",
                         "ostentatious",
                         "florid"
                     ]
    },
    {
        "word":  "paltry",
        "definition":  "of little monetary worth; trivial",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "The paltry allowance they received was barely enough to cover basic expenses.",
        "synonyms":  [
                         "inconsequential",
                         "meager",
                         "pitiful"
                     ]
    },
    {
        "word":  "pejorative",
        "definition":  "disparaging; a negative remark",
        "part_of_speech":  "adjective",
        "group":  34,
        "example":  "Using pejorative language can be hurtful and offensive to others.",
        "synonyms":  [
                         "deprecatory",
                         "vituperative",
                         "denigration"
                     ]
    },
    {
        "word":  "prefigure",
        "definition":  "show or suggest ahead of time; predict or foresee",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "Early innovations in technology often prefigure future societal changes.",
        "synonyms":  [
                         "foreshadow",
                         "presage",
                         "herald"
                     ]
    },
    {
        "word":  "presage",
        "definition":  "foretell something",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "The sudden drop in temperature presaged an approaching winter storm.",
        "synonyms":  [
                         "portend",
                         "augur",
                         "foreshadow"
                     ]
    },
    {
        "word":  "prescribe",
        "definition":  "recommend; assert authoritatively",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "Regulations prescribe safety standards that all workers must follow.",
        "synonyms":  [
                         "dictate",
                         "stipulate",
                         "impose"
                     ]
    },
    {
        "word":  "prevail",
        "definition":  "emerge victorious or dominant",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "In the end, her perseverance prevailed over all obstacles.",
        "synonyms":  [
                         "triumph",
                         "dominate",
                         "gain ascendancy"
                     ]
    },
    {
        "word":  "propitiate",
        "definition":  "make peace with; appease or pacify",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "The villagers offered gifts to propitiate the angry visitors.",
        "synonyms":  [
                         "placate",
                         "conciliate",
                         "mollify"
                     ]
    },
    {
        "word":  "recapitulate",
        "definition":  "summarize or repeat in concise form",
        "part_of_speech":  "verb",
        "group":  34,
        "example":  "At the meeting\u0027s end, she recapitulated the main goals for the project.",
        "synonyms":  [
                         "restate",
                         "enumerate",
                         "epitomize"
                     ]
    }
];
