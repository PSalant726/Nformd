const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signup(user){
    SessionApiUtil.signup(
      user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  login(user){
    SessionApiUtil.login(
      user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
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
    hashHistory.push("/");
  }
};

module.exports = SessionActions;
