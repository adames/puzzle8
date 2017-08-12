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
    userID = JSON.parse(params[:userObj].id)
    @user = User.find(userID)
    @user.update(data)
  end

end
