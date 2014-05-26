module LearningHelper
  def placeholder_img width, height
    height = width unless height
    url = "http://placekitten.com/g/#{width}/#{height}"
    img_tag url, size: "#{width}x#{height}"
  end
end
