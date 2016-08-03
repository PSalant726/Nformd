const Store = require("flux/utils").Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = [];
let _form = "";

function _setErrors(payload){
  _form = payload.form;
  _errors = payload.errors;
}

function _clearErrors(){
  _form = "";
  _errors = [];
}

ErrorStore.errors = function(form){
  if (form === _form) return _errors.slice();
  return [];
};

ErrorStore.form = function(){
  return _form;
};

ErrorStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      ErrorStore.__emitChange();
      break;
  }
};

module.exports = ErrorStore;
