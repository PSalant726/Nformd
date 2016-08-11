const FollowingApiUtil = {
  getFollowings(userId, success){
    $.ajax({
      url: `api/users/${userId}/followings`,
      method: 'GET',
      success
    });
  },

  createFollowing(following, success){
    $.ajax({
      url: `api/users/${following.followee_id}/followings`,
      method: 'POST',
      data: following,
      success
    });
  },

  deleteFollowing(following, success){
    $.ajax({
      url: `api/users/${following.followee_id}/followings`,
      method: 'DELETE',
      success
    });
  }
};

module.exports = FollowingApiUtil;
