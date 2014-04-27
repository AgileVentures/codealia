class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_locale

  # TODO switch to this conditional when the site is
  # translated properly
  # unless Rails.env.test?
  if Rails.env.development?
    def default_url_options(options = {})
      { locale: I18n.locale }
    end
  end

  private

  def set_locale
    # TODO remove the conditional when the site is
    # translated properly
    unless Rails.env.production?
      I18n.locale = params[:locale] || I18n.default_locale
    end
  end
end
