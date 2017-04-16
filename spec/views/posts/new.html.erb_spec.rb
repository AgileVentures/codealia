require 'spec_helper'

describe "posts/new" do
  before(:each) do
    assign(:post, stub_model(Post,
      :title => "MyString",
      :author => "MyString",
      :content => "MyText"
    ).as_new_record)
  end

  it "renders new post form" do
    pending 'blog auth'

    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", posts_path, "post" do
      assert_select "input#post_title[name=?]", "post[title]"
      assert_select "input#post_author[name=?]", "post[author]"
      assert_select "textarea#post_content[name=?]", "post[content]"
    end
  end
end
