require 'spec_helper'


#Acceptance Testing for creating a new comment

  feature 'Posting Comments' do
      background do
        @post = Post.create(:title => 'Codealia Blog Post', :author => 'Person', :content => 'Learning Code')
      end

    scenario 'Posting a comment' do
      visit post_path(@post)

      #comment_body = 'Adding a new conversation thread to the post.'

      fill_in 'Name', :with => 'Henry'
      fill_in 'Comment', :with => 'Adding a new conversation thread'
      click_button 'Add comment'


      expect(page).to have_content 'Adding a new conversation thread'
    end

  end