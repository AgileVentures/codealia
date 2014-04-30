require 'spec_helper'

describe "posts/index" do

    before(:each) do
      @posts = [
        stub_model(Post, :title => "First Title", :author => "Author 1", :content => "Content my text 1", :created_at => Time.now),
        stub_model(Post, :title => "Second Title", :author => "Author 2", :content => "New Post 2 ", :created_at => Time.now )
      ]
    end

  it 'should render a list of posts' do
    render
    rendered.should have_selector('div.well')
      rendered.should have_text('First Title')
      rendered.should have_text('Second Title')
      rendered.should have_text('Author 1')
      rendered.should have_text('Author 2')
      rendered.should have_text('Content my text 1')
      rendered.should have_text('New Post 2 ')
  end
end