const StoryApiUtil = require('../util/story_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const StoryConstants = require('../constants/story_constants');

const StoryActions = {
  fetchStories(){
    StoryApiUtil.fetchStories(this.receiveAllStories);
  },

  getStory(id){
    StoryApiUtil.getStory(id, this.receiveStory);
  },

  createStory(story){
    StoryApiUtil.createStory(story, this.receiveStory);
  },

  editStory(story){
    StoryApiUtil.updateStory(story, this.receiveStory);
  },

  deleteStory(id){
    StoryApiUtil.deleteStory(id, this.removeStory);
  },

  receiveAllStories(story){
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORIES_RECIEVED,
      stories: stories
    });
  },

  receiveStory(story){
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_RECEIVED,
      story: story
    });
  },

  removeStory(story){
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_REMOVED,
      story: story
    });
  }
};

module.exports = StoryActions;
