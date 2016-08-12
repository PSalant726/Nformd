const RecommendApiUtil = {
  fetchRecommends(success){
    $.ajax({
      url: 'api/recommends',
      method: 'GET',
      success
    });
  },

  fetchRecommendsByStory(storyId, success){
    $.ajax({
      url: `api/stories/${storyId}/recommends`,
      method: 'GET',
      success
    });
  },

  fetchRecommendsByAuthor(authorId, success){
    $.ajax({
      url: `api/users/${authorId}/recommends`,
      method: 'GET',
      success
    });
  },

  createRecommend(recommend, success, fetchUser){
    $.ajax({
      url: 'api/recommends',
      method: 'POST',
      data: { recommend: recommend },
      success: function(response){
        success(response);
        fetchUser(response);
      }
    });
  },

  deleteRecommend(id, success, fetchUser){
    $.ajax({
      url: `api/recommends/${id}`,
      method: 'DELETE',
      success: function(response){
        success(response);
        fetchUser(response);
      }
    });
  }
};

module.exports = RecommendApiUtil;
