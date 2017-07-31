class GameImagesController < ApplicationController
  def index
    @game_images = GameImages.all
    # byebug
#     msg = {:token => token, :courseId => courseId}
    render :json => @game_images
  end

  def create

  end

  def new

  end

  def edit

  end

  def show
    @id = params[:id]
    @game_image = GameImage.find(@id)
    render :json => @game_image
  end

  def update

  end

  def destroy

  end
end
