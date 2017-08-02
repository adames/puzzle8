class UsersController < ApplicationController
  def index
    @users = User.all
#     msg = {:token => token, :courseId => courseId}
    render :json => @users
  end

  def create
    @user = User.find_or_create_by({name: params[:username]})
    render json: @user
  end

  def new

  end

  def edit
    byebug
  end

  def show
    byebug
  end

  def update
    byebug
  end

  def destroy

  end

end
