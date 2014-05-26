module LearningHelper
  def placeholder_img width, height = nil
    height ||= width
    tag('img', src: "http://placekitten.com/g/#{width}/#{height}")
  end
end
