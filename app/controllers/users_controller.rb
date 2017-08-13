class UsersController < ApplicationController
  def index
    @users = User.all
    render :json => @users
  end

  def create
    @username = JSON.parse(params[:username])
    @user = User.find_or_create_by({name: @username})
    render json: @user
  end

  def update
    userObj = JSON.parse(params[:userObj])
    @user = User.find(userObj['id'])
    @user.update({wins: userObj['wins']})
    render json: @user
  end

end
