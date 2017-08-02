class ImagesController < ApplicationController
  def index
    @images = Image.all
#     msg = {:token => token, :courseId => courseId}
    render :json => @images
  end

  def create

  end

  def new

  end

  def edit

  end

  def show
    @id = params[:id]
    @image = Image.find(@id)
    render :json => @image
  end

  def update

  end

  def destroy

  end
end
