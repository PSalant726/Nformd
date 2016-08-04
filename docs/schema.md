# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
image_url   | url       |
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
story_id    | integer   | not null, foreign key (references stories), indexed
body        | text      | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
story_id    | integer   | not null, foreign key (references stories), indexed
author_id   | integer   | not null, foreign key (references users), indexed

## follows (join table)
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
follower_id       | integer   | not null, foreign key (references users), indexed
user_followed_id  | integer   | not null, foreign key (references users), indexed
