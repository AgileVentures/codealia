require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Codealia
  class Application < Rails::Application

    config.assets.enabled = true
    config.assets.paths << "#{Rails.root}/app/assets/fonts"
    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from
    # config/locales/*.rb,yml and its sub-directories are auto loaded.
    config.i18n.default_locale = :en
    config.i18n.enforce_available_locales = true
    I18n.config.enforce_available_locales = true
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales',
                                                 '**', '*.{rb,yml}').to_s]

    config.autoload_paths += Dir[File.join(Rails.root, "lib", "core_ext", "*.rb")].each {|l| require l }
  end
end
