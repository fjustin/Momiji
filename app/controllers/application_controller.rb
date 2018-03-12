class ApplicationController < ActionController::Base
  before_action :set_request_variant
  protect_from_forgery with: :exception
  before_action :set_search
  layout :select_layout
  # deviseのname
  before_action :configure_permitted_parameters, if: :devise_controller?

  def set_search
    @search = Article.ransack(params[:q])
    @search_articles = @search.result.page(params[:page])
  end


  def select_layout
    if request.from_pc? || request.from_android_tablet? || request.from_ipad?
      "application"
    else
      "sp_layout"
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  private
  def set_request_variant
    request.variant = request.device_variant
  end

end
