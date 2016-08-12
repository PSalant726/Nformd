# Schema Information

## users
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
username            | string    | not null, indexed, unique
password_digest     | string    | not null
session_token       | string    | not null, indexed, unique
email               | string    | not null, unique
fname               | string    |
lname               | string    |
bio                 | string    |
avatar_file_name    | string    |
avatar_content_type | string    |
avatar_file_size    | integer   |
avatar_updated_at   | datetime  |
created_at          | datetime  | not null
updated_at          | datetime  | not null

## stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
created_at  | datetime  | not null
updated_at  | datetime  | not null

## comments (responses) (join table)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
story_id    | integer   | not null, foreign key (references stories), indexed
body        | text      | not null
created_at  | datetime  | not null
updated_at  | datetime  | not null

## followings (join table)
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
follower_id       | integer   | not null, foreign key (references users), indexed
user_followed_id  | integer   | not null, foreign key (references users), indexed

## recommends (join table)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
story_id    | integer   | not null, foreign key (references stories), indexed
