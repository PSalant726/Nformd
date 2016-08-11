const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const FollowingConstants = require('../constants/following_constants');

const FollowingStore = new Store(AppDispatcher);

let _followers = {};
let _followees = {};
let _following_id = "";

const resetFollowings = function(followings){
  _followers = {};
  _followees = {};
  _following_id = "";
  followings.followers.forEach(follower => {
    _followers[follower.id] = follower;
  });
  followings.followees.forEach(followee => {
    _followees[followee.id] = followee;
  });
  _following_id = followings.following_id;
};

// const addFollowee = function(followee){
//   _following_id = "";
//   _followees[followee.id] = followee;
// };
//
// const removeFollowee = function(followee_id){
//   _following_id = "";
//   delete _followees[followee_id];
// };

FollowingStore.followers = function(){
  return Object.assign({}, _followers);
};

FollowingStore.followees = function(){
  return Object.assign({}, _followees);
};

FollowingStore.following_id = function(){
  return _following_id;
};

FollowingStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case FollowingConstants.FOLLOWINGS_RECEIVED:
      resetFollowings(payload.followings);
      FollowingStore.__emitChange();
      break;
    // case FollowingConstants.FOLLOWEE_RECEIVED:
    //   addFollowee(payload.followee);
    //   FollowingStore.__emitChange();
    //   break;
    // case FollowingConstants.FOLLOWEE_REMOVED:
    //   removeFollowee(payload.followee_id);
    //   FollowingStore.__emitChange();
    //   break;
  }
};

module.exports = FollowingStore;
