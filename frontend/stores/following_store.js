const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const FollowingConstants = require('../constants/following_constants');

const FollowingStore = new Store(AppDispatcher);

let _followers = {};
let _followees = {};

const resetFollowings = function(followings){
  _followers = {};
  _followees = {};
  followings.followers.forEach(follower => {
    _followers[follower.id] = follower;
  });
  followings.followees.forEach(followee => {
    _followees[followee.id] = followee;
  });
};

const addFollowee = function(followee){
  _followees[followee.id] = followee;
};

const removeFollowee = function(followee_id){
  delete _followees[followee_id];
};

FollowingStore.following = function(){
  return Object.assign({}, _following);
};

FollowingStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case FollowingConstants.FOLLOWINGS_RECEIVED:
      resetFollowings(payload.followings);
      FollowingStore.__emitChange();
      break;
    case FollowingConstants.FOLLOWEE_RECEIVED:
      addFollowee(payload.followee);
      FollowingStore.__emitChange();
      break;
    case FollowingConstants.FOLLOWEE_REMOVED:
      removeFollowee(payload.followee_id);
      FollowingStore.__emitChange();
      break;
  }
};
