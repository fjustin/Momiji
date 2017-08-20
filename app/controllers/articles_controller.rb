class ArticlesController < ApplicationController
  before_action :set_post, only: [:show,:edit,:update]

  def index
    @articles = Article.all
  end

  def show
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to articles_path
    else
      redirect_to articles_path
    end
  end

  def edit
  end

  def update
    if @article.update(article_params)
      redirect_to articles_path
    else
      redirect_to 'edit'
    end
  end

  private
  def article_params
    params[:article].permit(:title,:content,:image)
  end

  def set_post
    @article = Article.find(params[:id])
  end


end
