require 'spec_helper'

describe PostsController do
  let(:post) {double :post}

  describe 'GET index' do
      # it 'should i pass?' do
      it 'assigns all posts to @posts' do
        Post.should_receive(:all).and_return([post])
        get :index, {}
        assigns(:posts).should eq [post] #made assertion to get a page
      end

      it 'does not call the authenticate method' do
        controller.should_not_receive(:authenticate)
        # get(:index, {}) 
        get :index, {}
      end

      it 'does not call the set_post method ' do 
        controller.should_not_receive(:set_post)
        get :index, {}
      end
  end

  describe 'GET show' do
      it 'does not call the authenticate method' do
        controller.should_not_receive(:authenticate)
        get :show, {}
      end

      it 'does call the set_post method ' do 
        controller.should_receive(:set_post)
        get :show, {}
      end
  end

end
