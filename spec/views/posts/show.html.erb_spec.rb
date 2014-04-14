require 'spec_helper'

describe "posts/show" do
  before(:each) do
    @post = assign(:post, stub_model(Post,
      :title => "Title",
      :author => "Author",
      :content => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Title/)
    rendered.should match(/Author/)
    rendered.should match(/MyText/)
  end
end
