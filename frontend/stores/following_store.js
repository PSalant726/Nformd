const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const FollowingConstants = require('../constants/following_constants');

const FollowingStore = new Store(AppDispatcher);

let _following = {};

const setFollowing = function(following){
  _following = following;
};

const removeFollowing = function(following){
  _following = {};
};

FollowingStore.following = function(){
  return Object.assign({}, _following);
};

FollowingStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case FollowingConstants.FOLLOWING_RECEIVED:
      setFollowing(payload.following);
      FollowingStore.__emitChange();
      break;
    case FollowingConstants.FOLLOWING_REMOVED:
      removeFollowing(payload.following);
      FollowingStore.__emitChange();
      break;
  }
};
