const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

const SessionActions = {
  signup(user){
    SessionApiUtil.signup(user, SessionActions.receiveCurrentUser);
  },

  login(user){
    SessionApiUtil.login(user, SessionActions.receiveCurrentUser);
  },

  logout(){
    SessionApiUtil.logout(SessionActions.removeCurrentUser);
  },

  receiveCurrentUser(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },

  removeCurrentUser(){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
