# Nformd

[Nformd][heroku]

[heroku]: https://nformd.herokuapp.com/

## Minimum Viable Product

Nformd is a web application inspired by Medium that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [x] Stories
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Commenting on Stories
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Follows and Feed
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Recommends
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [ ] Infinite Scroll for Stories

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### [Phase 1][phase-one]: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create `StaticPages` controller and root view
- [x] set up webpack & flux scaffold with skeleton files
- [x] setup `APIUtil` to interact with the API
- [x] set up flux cycle for front-end authentication
- [x] user signup/sign-in components
- [x] blank landing component after sign-in
- [x] style sign-in/signup components
- [x] seed users

### [Phase 2][phase-two]: Stories Model, API, and components (2 days, W1 F 6pm)

**Objective:** Stories can be created, read, edited and destroyed through the API.

- [x] create `Story` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for Stories (`StoriesController`)
- [x] jBuilder views for Stories
- [x] test out API interaction in the console.
- implement each Story component, building out the flux loop as needed.
  - [x] `Story Flux Loop`
  - [x] `StoriesIndex`
  - [x] `StoryIndexItem`
  - [x] `StoryShow`
  - [x] `StoryForm`
- [x] style Stories components
- [x] seed Stories

### [Phase 3][phase-three]: Comments (2 day, W2 Tu 6pm)

**Objective:** Comments belong to Stories, and can be viewed by Story.

- [x] create `Comments` model
- build out API, Flux loop, and components for:
  - [x] Comment CRUD
  - [x] adding Comments requires a Story
  - [x] viewing Comments by Story
- [x] Use CSS to style new components
- [x] Seed Comments

Phase 3 adds organization to the Comments. Comments belong to a Story, which has its own `Index` view.

### [Phase 4][phase-four]: Followers and Feed (1 days, W2 W 6pm)

**Objective:** Users can follow many other Users, and view all of their followed Users' Stories in their Feed.

- [x] create `Followings` model and join table
- build out API, Flux loop, and components for:
  - [x] fetching Followers for Users
  - [x] adding Followers to Users
  - [x] unfollowing Users
- [x] Style new elements
- [x] Seed additional Users and add Followers to the seeded Users

### [Phase 5][phase-five]: Allow Users to 'Recommend' Stories (1 days, W2 Th 6pm)

**objective:** Users can Recommend Stories for later viewing.

- [x] create `Recommends` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching Recommended Stories for Users
  - [x] adding Recommends to Stories
  - [ ] un-Recommending Stories
- [x] Style new elements
- [x] Seed additional Stories, add Recommends for the seeded Stories

### Phase 6: - Pagination / infinite scroll for Stories Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Stories Index

- [ ] Paginate Stories Index API to send 10 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Make sure styling still looks good
- [ ] Ensure we have enough seeded Stories to demo infinite scroll

### Bonus Features (TBD)
- [ ] Topics/Categories
- [ ] Bookmarks
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
