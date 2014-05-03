class LearningController < ApplicationController
  layout 'workshops'

  def show
    workshop = params[:workshop_id]
    part = params[:part_id] || 'intro'

    if part == 'intro'
      render "learning/#{workshop}/#{part}", layout: 'two_columns'
    else
      render "learning/#{workshop}/#{part}"
    end
  end
end
