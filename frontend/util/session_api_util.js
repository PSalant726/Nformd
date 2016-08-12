const SessionApiUtil = {
  signup(user, closeModal, clearErrors, success, error){
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: { user },
      success: function(response){
        success(response);
        closeModal();
        clearErrors();
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
      }
    });
  },

  login(user, closeModal, clearErrors, success, error){
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user },
      success: function(response){
        success(response);
        closeModal();
        clearErrors();
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("login", errors);
			}
    });
  },

  logout(success){
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success,
      error: function () {
			  console.log("Logout error in SessionApiUtil#logout");
			}
    });
  },

  fetchCurrentUser(success){
    $.ajax({
      url: 'api/session',
      method: 'GET',
      success
    });
  }
};

module.exports = SessionApiUtil;
