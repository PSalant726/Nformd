class Api::StoriesController < ApplicationController
  def create
    @story = current_user.stories.new(story_params)
    if @story.save
      render 'api/stories/show'
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    @story = Story.find(params[:id])
    @story.destroy
    # TODO: Render something
  end

  def edit
    @story = Story.find(params[:id])
  end

  def index
    @stories = Story.all.includes(:author)
  end

  def new
    @story = Story.new
  end

  def show
    @story = Story.find(params[:id])
  end

  def update
    @story = Story.find(params[:id])
    if @story.update
      render 'api/stories/show'
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  private

  def story_params
    params.require(:story).permit(:title, :body)
  end
end
