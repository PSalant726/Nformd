const UserApiUtil = require('../util/user_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');

const UserActions = {
  getUser(id){
    UserApiUtil.getUser(id, this.receiveUser);
  },

  updateUser(user){
    UserApiUtil.updateUser(user, this.receiveUser);
  },

  updateUserPic(user, formData){
    UserApiUtil.updateUserPic(user, formData, this.receiveUser);
  },

  deleteUser(id){
    UserApiUtil.deleteUser(id, this.removeUser);
  },

  receiveUser(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  removeUser(){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_REMOVED
    });
  }
};

module.exports = UserActions;
