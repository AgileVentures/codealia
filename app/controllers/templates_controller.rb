class TemplatesController < ActionController::Base
  DIRECTORY = 'app/assets/javascripts/codealia-ide/templates'

  def get_template
    render file: "#{DIRECTORY}/#{params[:template_name]}"
  end
end
