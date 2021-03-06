class Api::UsersController < ApplicationController
  
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params) 

    if @user.save
      Friendship.create(requester_id: @user.id, requested_id: @user.id)
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    @posts = @user.posts
    @follows = @user.friends_you_follow
    @followers = @user.fanships
    
    render 'api/users/show'
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def follows
  #   @user = User.find(params[:id])
  #   @list_of_follows = @user.followings
  #   render "api/users/show"
  # end

  # def followers
  #   @user = User.find(Params[:id])
  #   @list_of_followes = @user.followers
  #   render "api/users/show"
  # end

  # def following?(other_user)
  #   followings.include?(other_user)
  #   # true if you are already following other_user 
  # end

  private
  def user_params
    params.require(:user).permit(:username, :email, :birthday, :password, :photo, :location, :work)
  end
end
