const StoryApiUtil = {
  fetchStories(success){
    $.ajax({
      url: 'api/stories',
      method: 'GET',
      success
    });
  },

  getStory(id, success){
    $.ajax({
      url: `api/stories/${id}`,
      method: 'GET',
      success
    });
  },

  createStory(story, success){
    $.ajax({
      url: 'api/stories',
      method: 'POST',
      data: { story: story },
      success
    });
  },

  updateStory(story, success){
    $.ajax({
      url: `api/stories/${story.id}`,
      method: 'PATCH',
      data: { story: story },
      success
    });
  },

  deleteStory(id, success){
    $.ajax({
      url: `api/stories/${id}`,
      method: "DELETE",
      success
    });
  }
};

module.exports = StoryApiUtil;
