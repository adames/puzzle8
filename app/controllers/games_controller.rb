class GamesController < ApplicationController
  def index
    @games = Game.all
    # byebug
#     msg = {:token => token, :courseId => courseId}
    render :json => @games
  end

  def create
    @user = User.find(params[:userID])
    @game = Game.new
    @image = Image.find(params[:imageID])
    @game.image = @image
    @game.randomize_tiles
    @user.games << @game
    @user.save
    render json: @game
  end

  def edit

  end

  def show

  end

  def update
    data = JSON.parse(params[:gameObj])
    gameID = data["id"]
    @game = Game.find(gameID)
    @game.update(data)
  end

  def destroy

  end
end
