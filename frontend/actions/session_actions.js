const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signup(user, closeModal){
    SessionApiUtil.signup(
      user,
      closeModal,
      ErrorActions.clearErrors,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  login(user, closeModal){
    SessionApiUtil.login(
      user,
      closeModal,
      ErrorActions.clearErrors,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logout(){
    SessionApiUtil.logout(SessionActions.removeCurrentUser);
  },

  fetchCurrentUser(){
    SessionApiUtil.fetchCurrentUser(SessionActions.receiveCurrentUser);
  },

  receiveCurrentUser(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
    hashHistory.push("/");
  },

  removeCurrentUser(){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/");
  }
};

module.exports = SessionActions;
