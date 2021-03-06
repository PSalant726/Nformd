const UserApiUtil = {
  getUser(id, success){
    $.ajax({
      url: `api/users/${id}`,
      method: 'GET',
      success
    });
  },

  updateUser(user, success){
    $.ajax({
      url: `api/users/${user.id}`,
      method: 'PATCH',
      data: { user: user },
      success
    });
  },

  updateUserPic(user, formData, success){
    $.ajax({
      url: `api/users/${user.id}`,
      method: 'PATCH',
      dataType: 'json',
      contentType: false,
      processData: false,
      data: formData,
      success
    });
  },

  deleteUser(id, success){
    $.ajax({
      url: `api/users/${id}`,
      method: 'DELETE',
      success
    });
  }
};

module.exports = UserApiUtil;
