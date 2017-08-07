class GamesController < ApplicationController
  def index
    @games = Game.all
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

  def update
    data = JSON.parse(params[:gameObj])
    gameID = data["id"]
    @game = Game.find(gameID)
    @game.update(data)
  end

  def solution
    @game = Game.find(params[:id])
    @tile_order = @game.tiles_order.scan(/\w/).map(&:to_i)
    @solution = @game.a_star_search(@tile_order)
    render json: @solution
  end

  def hint
    # byebug
    seq = JSON.parse(params[:seq])
    hint = JSON.parse(params[:hint])
    # seq[seq.index(9)] = 0
    byebug
    @next_move = Game.last.order_boards(seq, hint)[0]
    render json: @next_move
  end
end
