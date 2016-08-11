const FollowingApiUtil = {
  fetchFollowings(userId, success){
    $.ajax({
      url: `api/users/${userId}/followings`,
      method: 'GET',
      success
    });
  },

  addFollowee(followeeId, success){
    $.ajax({
      url: `api/users/${followeeId}/followings`,
      method: 'POST',
      success
    });
  },

  deleteFollowee(followingId, success){
    $.ajax({
      url: `api/followings/${followingId}`,
      method: 'DELETE',
      success
    });
  }
};

module.exports = FollowingApiUtil;
