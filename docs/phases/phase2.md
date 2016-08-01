# Phase 2: Flux Architecture and Story CRUD (2 days, W1 F 6pm)

## Rails
### Models
* Story

### Controllers
* Api::StoriesController (create, destroy, index, show, update)

### Views
* stories/index.json.jbuilder
* stories/show.json.jbuilder

## Flux
### Views (React Components)
* StoriesIndex
  - StoriesIndexItem
* StoryForm

### Stores
* Story

### Actions
* `ApiActions.receiveAllStories`
* `ApiActions.receiveSingleStory`
* `ApiActions.deleteStory`
* `NoteActions.fetchAllStories`
* `NoteActions.fetchSingleStory`
* `NoteActions.createStory`
* `NoteActions.editStory`
* `NoteActions.destroyStory`

### ApiUtil
* `ApiUtil.fetchAllStories`
* `ApiUtil.fetchSingleStory`
* `ApiUtil.createStory`
* `ApiUtil.editStory`
* `ApiUtil.destroyStory`

## Gems/Libraries
