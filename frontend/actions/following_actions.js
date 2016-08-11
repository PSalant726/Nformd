const FollowingApiUtil = require('../util/following_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const FollowingConstants = require('../constants/following_constants');

const FollowingActions = {
  getFollowing(userId){
    FollowingApiUtil.getFollowing(userId, this.receiveFollowing);
  },

  createFollowing(following){
    FollowingApiUtil.createFollowing(following, this.receiveFollowing);
  },

  deleteFollowing(following){
    FollowingApiUtil.deleteFollowing(following, this.removeFollowing);
  },

  receiveFollowing(following){
    AppDispatcher.dispatch({
      actionType: FollowingConstants.FOLLOWING_RECEIVED,
      following: following
    });
  },

  removeFollowing(following){
    AppDispatcher.dispatch({
      actionType: FollowingConstants.FOLLOWING_REMOVED,
      following: following
    });
  }
};

module.exports = FollowingActions;
