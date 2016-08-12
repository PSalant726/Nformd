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

  createRecommend(recommend, success){
    $.ajax({
      url: 'api/recommends',
      method: 'POST',
      data: { recommend: recommend },
      success
    });
  },

  deleteRecommend(id, success){
    $.ajax({
      url: `api/recommends/${id}`,
      method: 'DELETE',
      success
    });
  }
};

module.exports = RecommendApiUtil;
