const RecommendApiUtil = require('../util/recommend_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const RecommendConstants = require('../constants/recommend_constants');

const RecommendActions = {
  fetchRecommends(){
    RecommendApiUtil.fetchRecommends(this.receiveAllRecommends);
  },

  fetchRecommendsByStory(storyId){
    RecommendApiUtil.fetchRecommendsByStory(storyId, this.receiveAllRecommends);
  },

  fetchRecommendsByAuthor(authorId){
    RecommendApiUtil.fetchRecommendsByAuthor(authorId, this.receiveAllRecommends);
  },

  createRecommend(recommend){
    RecommendApiUtil.createRecommend(recommend, this.receiveRecommend);
  },

  deleteRecommend(id){
    RecommendApiUtil.deleteRecommend(id, this.removeRecommend);
  },

  receiveAllRecommends(recommends){
    AppDispatcher.dispatch({
      actionType: RecommendConstants.RECOMMENDS_RECEIVED,
      recommends: recommends
    });
  },

  receiveRecommend(recommend){
    AppDispatcher.dispatch({
      actionType: RecommendConstants.RECOMMEND_RECEIVED,
      recommend: recommend
    });
  },

  removeRecommend(recommend){
    AppDispatcher.dispatch({
      actionType: RecommendConstants.RECOMMEND_REMOVED,
      recommend: recommend
    });
  }
};

module.exports = RecommendActions;
