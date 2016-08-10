const Store = require("flux/utils").Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const UserConstants = require('../constants/user_constants');

let _currentUser = {};

const SessionStore = new Store(AppDispatcher);

const _login = function(user){
  _currentUser = user;
};

const _logout = function(){
  _currentUser = {};
};

const setUserPic = function(user){
  _currentUser.avatar_url = user.avatar_url;
};

SessionStore.currentUser = function(){
  return Object.assign({}, _currentUser);
};

SessionStore.thisUser = function(){
  return Object.assign({}, _thisUser);
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
    case UserConstants.NEW_USER_PIC_RECEIVED:
      setUserPic(payload.user);
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
