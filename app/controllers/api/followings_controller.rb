class Api::FollowingsController < ApplicationController
  def create
    following = Following.new(followee_id: params[:user_id], follower_id: current_user.id)
    if following.save
      user = User.find(params[:user_id])
      @followees = user.followees
      @followers = user.followers
      @following_id = following.id
      # @user = following.followee
      # render 'api/users/show'
      render :index
    else
      render json: following.errors.full_messages, status: 422
    end
  end

  def destroy
    following = Following.find(params[:id])
    followee_id = following.followee_id
    if following.destroy
      user = User.find(followee_id)
      @followees = user.followees
      @followers = user.followers
      @following_id = following.id
      render :index
    else
      render json: following.errors.full_messages, status: 422
    end
  end

  def index
    user = User.find(params[:user_id])
    @followees = user.followees
    @followers = user.followers
    following = Following.find_by(followee_id: params[:user_id], follower_id: current_user.id)
    if following
      @following_id = following.id
    else
      @following_id = nil
    end
    render :index
  end
end
