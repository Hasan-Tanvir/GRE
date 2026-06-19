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

create trigger trigger_update_vocab_progress_timestamp
before update on public.vocab_progress
for each row execute function public.update_vocab_progress_timestamp();
