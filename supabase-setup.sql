-- Supabase SQL setup for user-specific vocab sync.
-- Run this in Supabase SQL editor under the SQL tab.

create table if not exists public.vocab_progress (
  id text primary key,
  status jsonb,
  notes text,
  inserted_at timestamptz default now(),
  updated_at timestamptz default now()
);

create or replace function public.update_vocab_progress_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trigger_update_vocab_progress_timestamp on public.vocab_progress;
create trigger trigger_update_vocab_progress_timestamp
before update on public.vocab_progress
for each row execute function public.update_vocab_progress_timestamp();

alter table public.vocab_progress enable row level security;

drop policy if exists "Select own vocab progress" on public.vocab_progress;
create policy "Select own vocab progress"
  on public.vocab_progress
  for select
  using (auth.uid()::text = id);

drop policy if exists "Insert own vocab progress" on public.vocab_progress;
create policy "Insert own vocab progress"
  on public.vocab_progress
  for insert
  with check (auth.uid()::text = id);

drop policy if exists "Update own vocab progress" on public.vocab_progress;
create policy "Update own vocab progress"
  on public.vocab_progress
  for update
  using (auth.uid()::text = id)
  with check (auth.uid()::text = id);

drop policy if exists "Delete own vocab progress" on public.vocab_progress;
create policy "Delete own vocab progress"
  on public.vocab_progress
  for delete
  using (auth.uid()::text = id);
