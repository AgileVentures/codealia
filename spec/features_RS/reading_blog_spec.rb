require 'spec_helper'

#Acceptance Testing for displaying the blog index page and individual blog posts

    feature 'Reading the Blog' do
          background do
           @post = Post.create(:title => 'Codealia Blog Post', :author => 'Person', :content => 'Learning Code')
           Post.create(:title => 'Additional Blog Post', :author => 'Thomas', :content => 'Building Futures')
          end

          scenario 'Reading the blog index page' do
            visit posts_path


            expect(page).to have_content 'Codealia Blog Post'
            expect(page).to have_content 'Additional Blog Post'
          end


          scenario 'Reading individual post' do
            visit posts_path
            click_link 'Codealia Blog Post'

            expect(current_path).to eq post_path(@post)
          end

    end