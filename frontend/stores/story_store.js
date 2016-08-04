const Store = require("flux/utils").Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const StoryConstants = require('../constants/story_constants');

const StoryStore = new Store(AppDispatcher);

let _stories = {};

resetStories = function (stories) {
  _stories = {};
  stories.forEach(story => {
    _stories[story.id] = story;
  });
};

setStory = function (story) {
  _stories[story.id] = story;
};

removeStory = function (story) {
  delete _story[story.id];
};

StoryStore.all = function(){
  return Object.assign({}, _stories);
};

StoryStore.find = function (id) {
  return _stories[id];
};

StoryStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case StoryConstants.STORIES_RECIEVED:
      resetStories(payload.stories);
      StoriesStore.__emitChange();
      break;
    case StoryConstants.STORY_RECEIVED:
      setStory(payload.story);
      StoriesStore.__emitChange();
      break;
    case StoryConstants.STORY_REMOVED:
      removeStory(payload.story);
      StoriesStore.__emitChange();
      break;
  }
};

module.exports = StoryStore;
