const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const RecommendConstants = require('../constants/recommend_constants');

const RecommendStore = new Store(AppDispatcher);

let _recommends = {};

const resetRecommends = function(recommends){
  _recommends = {};
  recommends.forEach(recommend => {
    _recommends[recommend.id] = recommend;
  });
};

const setRecommend = function(recommend){
  _recommends[recommend.id] = recommend;
};

const removeRecommend = function(recId){
  delete _recommends[recId];
};

RecommendStore.all = function(){
  return Object.keys(_recommends).map(recommendId => {
    return _recommends[recommendId];
  });
};

RecommendStore.find = function(id){
  return _recommends[id];
};

RecommendStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case RecommendConstants.RECOMMENDS_RECEIVED:
      resetRecommends(payload.recommends);
      RecommendStore.__emitChange();
      break;
    case RecommendConstants.RECOMMEND_RECEIVED:
      setRecommend(payload.recommend);
      RecommendStore.__emitChange();
      break;
    case RecommendConstants.RECOMMEND_REMOVED:
      removeRecommend(payload.recommend);
      RecommendStore.__emitChange();
      break;
  }
};

module.exports = RecommendStore;
