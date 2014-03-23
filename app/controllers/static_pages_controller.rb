class StaticPagesController < ApplicationController
  layout 'two_columns'

  def index
    @message = 'I am Codealia'
  end

  def about
    @about = 'About Us'
  end

  def code_playground
  end

  def instructors
  end
end
