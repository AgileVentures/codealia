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
    pending "How to test parse created_at datetime input into time_ago_in_words "
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    # rendered.should match(/Title/)
    # rendered.should match(/Author/)
    # rendered.should match(/MyText/)

    endered.should contain('Title')
    endered.should contain('Author')
    # endered.should contain('Datetime Parsed') #??? Datetime is changed to text
    endered.should contain('MyText')
  end
end
