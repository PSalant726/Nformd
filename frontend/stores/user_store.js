const Store = require("flux/utils").Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');

const UserStore = new Store(AppDispatcher);

let _user = {};

const setUser = function(user){
  _user = user;
};

const removeUser = function(){
  _user = {};
};

UserStore.user = function(){
  return Object.assign({}, _user);
};

UserStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      setUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.USER_REMOVED:
      removeUser();
      UserStore.__emitChange();
      break;
    case UserConstants.NEW_USER_PIC_RECEIVED:
      setUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
