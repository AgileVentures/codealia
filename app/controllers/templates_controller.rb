class TemplatesController < ActionController::Base
  def get_template
    render "angular-app/#{params[:template_name]}"
  end
end
