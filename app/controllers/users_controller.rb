class UsersController < ApplicationController
  def index
    @users = User.all
  end
  def show
    @user = User.find(params[:id])
  end

  # お気に入り機能のアクション定義

  def likes
    @user = User.find(params[:id])
  end
end
