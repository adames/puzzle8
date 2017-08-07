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

<<<<<<< HEAD
=======
  def hint
    seq = JSON.parse(params[:seq])
    @next_move = Game.last.order_boards(seq)[0][0]
    render json: @next_move
  end
>>>>>>> 624cc09f2bfd1881c5f6f96ee7e907d26f25afe3
end
