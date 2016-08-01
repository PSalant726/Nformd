## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * Navbar
  * CommentsIndex
    * Search
    * CommentIndexItem
    * CommentForm
  * **LoginForm**
  * **SignupForm**
  * **NotesIndex**
    * StoryForm
    * StoryIndexItem
    * **StoryDetail**
      * StoryTags
      * StoryEditArea


## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `StoriesIndex` **path:** index
  * **component:** `StoriesIndex` **path:** `comments/:commentId`
    * **component:** `StoryDetail` **path:** `stories/:storyId`
  * **component:** `StoriesIndex` **path:** none
    * **component:** `StoryDetail` **path:** `stories/:storyId`

For Routes that have no `commentId`, `StoriesIndex` will render all
stories.
