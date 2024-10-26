create table users (
  id uuid not null primary key,
  avatar text,
  first_name varchar,
  last_name varchar,
  created_at timestamptz not null default now(),
  updated_at timestamptz default now(),
  foreign key (id) references auth.users(id) on delete cascade
);

create or replace function create_user_record() 
returns trigger language plpgsql security definer as $$ 
begin 
    insert into public.users (id)
    values (new.id);
    return new;
end;
$$;

create trigger insert_database_user after insert on auth.users 
for each row execute function create_user_record();