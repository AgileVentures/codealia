class Post < ActiveRecord::Base

  has_many :comments

  validates_presence_of :content, :author, :title
end
