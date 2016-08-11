const FollowingApiUtil = require('../util/following_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const FollowingConstants = require('../constants/following_constants');

const FollowingActions = {
  fetchFollowings(userId){
    FollowingApiUtil.fetchFollowings(userId, this.receiveFollowings);
  },

  createFollowing(following){
    FollowingApiUtil.createFollowing(following, this.receiveNewFollowee);
  },

  deleteFollowing(following){
    FollowingApiUtil.deleteFollowing(following, this.removeFollowee);
  },

  receiveFollowings(followings){
    AppDispatcher.dispatch({
      actionType: FollowingConstants.FOLLOWINGS_RECEIVED,
      followings: followings
    });
  },

  receiveNewFollowee(followee){
    AppDispatcher.dispatch({
      actionType: FollowingConstants.FOLLOWEE_RECEIVED,
      followee: followee
    });
  },

  removeFollowee(followee_id){
    AppDispatcher.dispatch({
      actionType: FollowingConstants.FOLLOWEE_REMOVED,
      followee_id: followee_id
    });
  },
};

module.exports = FollowingActions;
