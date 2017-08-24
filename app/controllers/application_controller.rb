class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :set_search

  def set_search
    @search = Article.ransack(params[:q])
    @search_articles = @search.result.page(params[:page])
  end

end
