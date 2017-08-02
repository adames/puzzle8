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
    data = JSON.parse(params[:userObj])
    userID = data["id"]
    @user = User.find(userID)
    @user.update(data)
  end

  def destroy

  end

end
