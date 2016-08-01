# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Stories

- `GET /api/stories`
  - Stories index/search
  - accepts `user_name` query param to list stories by user
  - accepts pagination params (if I get there)
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `GET /api/comments/:id`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Likes/Favorites

- A story's likes will be included in the story show template
- `GET /api/likes`
  - includes query param for typeahead suggestions
- `POST /api/stories/:story_id/likes`: add like to story
- `DELETE /api/stories/:story_id/likes/:like_id`: remove like from story by like_id
