const Store = require("flux/utils").Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};

const _login = function(user){
  _currentUser = user;
};

const _logout = function(){
  _currentUser = {};
};

SessionStore.currentUser = function(){
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function(){
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
  }
};

module.exports = SessionStore;
