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

  end

  def show
  end

  def update

  end

  def destroy

  end

end
