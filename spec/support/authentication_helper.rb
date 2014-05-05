module AuthenticationHelper

  # http://stackoverflow.com/questions/3768718/rails-rspec-make-tests-pass-with-http-basic-authentication
  def http_login(username, password)
    user = username
    pw = password
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Basic.encode_credentials(user,pw)
  end
end