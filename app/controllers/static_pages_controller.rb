class StaticPagesController < ApplicationController
  layout 'two_columns'

  def index
    @message = 'I am Codealia'
  end

  def about
    @about = 'About Us'
  end

  def terms_and_conditions
  end

  def instructors
  end
end
