class GamesController < ApplicationController
  def index
    @games = Game.all
    # byebug
#     msg = {:token => token, :courseId => courseId}
    render :json => @games
  end

  def create
    @game
  end

  def new

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
