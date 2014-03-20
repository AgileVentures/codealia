class StaticPagesController < ApplicationController
  layout 'two_columns'

  def index
    @message = 'I am Codealia'
  end

  def about
    @about = 'About Us'
  end

  def instructors
    @title = 'Instructors'
  end

  def contributors
    @title = 'Contributors'
  end

  def donors
    @title = 'Donors'
  end

  def mentors
    @title = 'Mentors'
  end
end
