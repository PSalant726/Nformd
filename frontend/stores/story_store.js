const Store = require("flux/utils").Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const StoryConstants = require('../constants/story_constants');

const StoryStore = new Store(AppDispatcher);

let _stories = {};

const resetStories = function (stories) {
  _stories = {};
  stories.forEach(story => {
    _stories[story.id] = story;
  });
};

const setStory = function (story) {
  _stories[story.id] = story;
};

const removeStory = function (story) {
  delete _stories[story.id];
};

StoryStore.all = function(){
  return Object.keys(_stories).map(storyId => {
    return _stories[storyId];
  });
};

StoryStore.find = function (id) {
  return _stories[id];
};

StoryStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case StoryConstants.STORIES_RECEIVED:
      resetStories(payload.stories);
      StoryStore.__emitChange();
      break;
    case StoryConstants.STORY_RECEIVED:
      setStory(payload.story);
      StoryStore.__emitChange();
      break;
    case StoryConstants.STORY_REMOVED:
      removeStory(payload.story);
      StoryStore.__emitChange();
      break;
  }
};

module.exports = StoryStore;
