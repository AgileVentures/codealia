module ActionView
  module Helpers
    module TranslationHelper
      unless Rails.env.production?
        alias :old_translate :translate
        def translate(key, options = {})
          # display what has been translated
          translated = old_translate(key, options)
          result = "{{ #{translated} }}"
          translated.html_safe? ? result.html_safe : result
        end
        alias :t :translate
      end
    end
  end
end
