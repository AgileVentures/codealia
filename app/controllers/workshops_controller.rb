class WorkshopsController < ApplicationController
  layout 'two_columns'

  def workshop1
    @title = 'Passions Workshop 1'
  end

  def workshop2
    @title = 'Passions Workshop 2'
  end

end
