class ImagesController < ApplicationController
  def index
    @images = Image.all
    render :json => @images
  end

  def show
    @id = params[:id]
    @image = Image.find(@id)
    render :json => @image
  end

end
