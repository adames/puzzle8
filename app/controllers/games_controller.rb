class GamesController < ApplicationController
  def index
    @games = Game.all
    render :json => @games
  end

  def create
    @user = User.find(params[:userID])
    @game = Game.new
    @image = Image.find(params[:imageId])
    @game.image = @image
    @game.randomize_tiles
    @user.games << @game
    @user.save
    render json: @game
  end

  def update
    game_obj = JSON.parse(params[:game_obj])
    game_id = gameObj['id']
    @game = Game.find(game_id)
    @game.update({tiles_order: game_obj['tiles_order']})
    render json: @game
  end

  def solution
    @game = Game.find(params[:id])
    @tile_order = @game.tiles_order.scan(/\w/).map(&:to_i)
    @solution = @game.a_star_search(@tile_order)
    render json: @solution
  end

end
