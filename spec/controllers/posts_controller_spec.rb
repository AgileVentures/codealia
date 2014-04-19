require 'spec_helper'

describe PostsController do
  let(:post) {double :post}
  before do
      Post.stub(:find).and_return(post)
    end

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
        get :show, {id:'3'}
      end

      it 'does call the set_post method ' do 
        controller.should_receive(:set_post) # calls set_post but then does NOT RUN IT. Should_receive is STUB & ASSERTION
        get :show, {id:'10'} #:id => '3'id: '3'
      end
  end


  describe 'GET new' do
      it 'does call the authenticate method' do
        controller.should_receive(:authenticate)
        get :new, {}
      end
      it 'does not call the set_post method ' do 
        controller.should_not_receive(:set_post) # calls set_post but then does NOT RUN IT. Should_receive is STUB & ASSERTION
        get :new, {} 
      end
      it 'assigns a new post to @post' do
        Post.should_receive(:new).and_return('I like coffee')
        get :new, {}
        assigns(:post).should eq post
      end



  end


end
