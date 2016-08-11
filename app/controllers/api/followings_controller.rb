class Api::FollowingsController < ApplicationController
  def create
    @following = current_user.followees.new(followee_id: params[:user_id])
    if @following.save
      render json: @following
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  def destroy
    @following = current_user.followees.find_by(followee_id: params[:user_id])
    @following.destroy
    render json: @following
  end

  def index
    @followings = current_user.followees
  end
end
