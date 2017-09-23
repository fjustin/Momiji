class ArticlesController < ApplicationController
  before_action :set_post, only: [:show,:edit,:update]
  before_action :authenticate_user!, :except => [:index,:show]

  def index
    if params[:tag]
      @search_articles = Article.tagged_with(params[:tag])
    else
      @search_articles = Article.all
    end
    @search_articles = @search_articles.order(created_at: :desc).page(params[:page])
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
      render 'articles/new'
    end
  end

  def edit
  end

  def update
    if @article.update_attributes(article_params)
      flash[:success] = "記事を更新しました"
      redirect_to articles_url
    else
      redirect_to 'edit'
    end
  end

  private
  def article_params
    params[:article].permit(:title,:content,:image,:description,:tag_list)
  end

  def set_post
    @article = Article.find(params[:id])
  end


end
