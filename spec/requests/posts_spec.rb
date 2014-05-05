require 'spec_helper'

describe "Posts" do
  describe "GET /posts" do
    it "works! " do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get posts_path
      response.status.should be(200)
    end
  end
end
