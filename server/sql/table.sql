create table users(
    id serial not null primary key,
    first_name text NOT NULL,
    last_name text NOT NULL,
    username text NOT NULL,
    password varchar NOT NULL
);

