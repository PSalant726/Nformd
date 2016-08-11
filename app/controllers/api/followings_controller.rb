class Api::FollowingsController < ApplicationController
  def create
    following = current_user.followees.new(followee_id: params[:user_id])
    if following.save
      @user = following.followee
      render 'api/users/show'
    else
      render json: following.errors.full_messages, status: 422
    end
  end

  def destroy
    following = current_user.followees.find_by(followee_id: params[:user_id])
    if following.destroy
      render json: following.followee_id
    else
      render json: following.errors.full_messages, status: 422
    end
  end

  def index
    @followees = current_user.followees
    @followers = current_user.followers
    render :index
  end
end
