require 'spec_helper'

describe PostsController do
  describe 'GET index' do
    it 'should i pass?' do
      Post.should_receive(:all)
      get :index, {}
    end
  end
end
