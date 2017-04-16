require 'spec_helper'

describe "posts/show" do

  before(:each) do
    @post = stub_model(Post, :title => "First Title",:author => "Author 1", :content => "Content my text 1", :created_at => Time.now)
  end

  it "should display individual post content" do
    pending 'blog auth'

    render
    rendered.should have_selector('p#notice')
      rendered.should have_text(@post.title)
      rendered.should have_text(@post.author)
      rendered.should have_content("Posted #{time_ago_in_words(@post.created_at)}")
      rendered.should have_text(@post.content)
      rendered.should have_link('Edit')
      rendered.should have_link('Back')
  end



end
