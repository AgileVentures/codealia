class StaticPagesController < ApplicationController
  def index
    @message = 'Welcome to Codealia'
  end

  def about
    @about = 'About Us'
  end

end
