class LikesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_article, only: [:create, :destroy]

  def create
    @like = current_user.likes.create(article_id: params[:article_id])
    @articles = Article.all
  end

  def destroy
    like = current_user.likes.find_by(article_id: params[:article_id])
    like.destroy
    @articles = Article.all
  end

  private

  def set_article
    @article = Article.find(params[:article_id])
  end
end
