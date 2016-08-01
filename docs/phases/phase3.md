# Phase 3: Comments (2 day, W2 Tu 6pm)

## Rails
### Models
* Comment

### Controllers
* Api::CommentsController (create, destroy, index, show, update)

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
  - CommentIndexItem
* CommentForm

### Stores
* Comment

### Actions
* `ApiActions.receiveAllComments`
* `ApiActions.receiveSingleComment`
* `ApiActions.deleteComment`
* `CommentActions.fetchAllComments`
* `CommentActions.fetchSingleComment`
* `CommentActions.createComment`
* `CommentActions.editComment`
* `CommentActions.destroyComment`

### ApiUtil
* `ApiUtil.fetchAllComments`
* `ApiUtil.fetchSingleComment`
* `ApiUtil.createComment`
* `ApiUtil.editComment`
* `ApiUtil.destroyComment`

## Gems/Libraries
