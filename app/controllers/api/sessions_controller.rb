class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Username or Password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["No user to log out!"], status: 404
    end
  end

  def show
    @user = current_user
    render 'api/users/show'
  end
end
