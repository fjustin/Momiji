class ArticlesController < ApplicationController
  before_action :set_article, only: [:show,:edit,:update,:status]
  before_action :authenticate_user!, :except => [:index,:show]
  before_action :correct_user, only: [:edit,:update]

  def index
    if params[:tag]
      @search_articles = Article.tagged_with(params[:tag])
    else
      @search_articles = Article.all
    end
    @search_articles = @search_articles.published.order(created_at: :desc).page(params[:page])
    @likes = Like.where(article_id: params[:id])
    @article_ranking = Article.find(Like.group(:article_id).order('count(article_id) desc').limit(5).pluck(:article_id))
  end



  def show
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = curret_user.id
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
    params[:article].permit(:title,:content,:image,:description,:tag_list,:status,:user_id,:likes)
  end

  def set_article
    @article = Article.find(params[:id] || params[:article_id])
  end

  def correct_user
    article = Article.find(params[:id])
    if current_user.id != article.user.id
      redirect_to articles_path
    end
  end


end
