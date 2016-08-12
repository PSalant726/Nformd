class Api::RecommendsController < ApplicationController
  def create
    @recommend = current_user.recommends.new(recommend_params)
    if @recommend.save
      render 'api/recommends/show'
    else
      render json: @recommend.errors.full_messages, status: 422
    end
  end

  def destroy
    @recommend = Recommend.find(params[:id])
    @recommend.destroy
  end

  def index
    @recommends = Recommend.all.includes(:author)
  end

  def index_by_story
    @recommends = Recommend.where(story_id: params[:story_id])
    render 'api/recommends/index'
  end

  def index_by_author
    @recommends = Recommend.where(author_id: params[:user_id])
    render 'api/recommends/index'
  end

  def new
    @recommend = Recommend.new
  end

  def show
    @recommend = Recommend.find(params[:id])
  end

  private

  def recommend_params
    params.require(:recommend).permit(:author_id, :story_id)
  end
end
