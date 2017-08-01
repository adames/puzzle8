class GamesController < ApplicationController
  def index
    @games = Game.all
    # byebug
#     msg = {:token => token, :courseId => courseId}
    render :json => @games
  end

  def create
    @game = Game.new
    @gameImage = GameImage.find(params[:json])
    @game.game_image = @gameImage
    @game.randomize_tiles
    @game.save
    render json: @game
  end

  def edit

  end

  def show

  end

  def update

  end

  def destroy

  end
end
