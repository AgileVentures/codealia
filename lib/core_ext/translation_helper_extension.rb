module ActionView
  module Helpers
    module TranslationHelper
      if Rails.env.development?
        alias :old_translate :translate
        def translate(key, options = {})
          # display what has been translated
          raw "{{ #{old_translate(key, options)} }}"
        end
        alias :t :translate
      end
    end
  end
end
