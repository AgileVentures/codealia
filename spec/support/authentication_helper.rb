module AuthenticationHelper
  def http_login(username, password)
    user = username
    pw = password
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Basic.encode_credentials(user,pw)
  end
end