const SessionApiUtil = {
  signup(user, successCallback, errorCallback){
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: { user: user },
      success: function(response){
        successCallback(response);
      },
      error: function(response){
        errorCallback(response);
      }
    });
  },

  login(user, successCallback, errorCallback){
    $.ajax({
      url:'api/session',
      method: 'POST',
      data: { user: user },
      success: function(response){
        successCallback(response);
      },
      error: function(response){
        errorCallback(response);
      }
    });
  },

  logout(successCallback, errorCallback){
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success: function(response){
        successCallback(response);
      },
      error: function(response){
        errorCallback(response);
      }
    });
  }
};

module.exports = SessionApiUtil;
