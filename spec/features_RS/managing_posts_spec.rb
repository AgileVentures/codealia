require 'spec_helper'

#Acceptance Testing for managing posts

feature 'Managing blog posts' do
  scenario 'Guests cannot create posts' do
    visit new_post_path
    expect(page).to have_content 'Access denied'
  end

  scenario 'Posting a new blog' do
    pending 'user login'
    page.driver.browser.authorize 'admin', 'secret'
    visit new_post_path

    expect(page).to have_content 'New post'

    fill_in 'Title', with: 'The new IDE'
    fill_in 'Author', with: 'Writer'
    fill_in 'Content', with: 'Students program in IDE!'

    click_button 'Create Post'
    expect(page).to have_content 'The new IDE'
  end

  context 'with an existing blog post' do
    background do
      @post = Post.create(
        title: 'Codealia Blog Post',
        author: 'Person',
        content: 'Learning Code'
      )
    end

    scenario 'Editing an existing post' do
      pending 'user login'
      visit post_path(@post)

      page.driver.browser.authorize 'admin', 'secret'
      click_link 'Edit'

      fill_in 'Title', with: 'Here are the findings'
      click_button 'Update Post'

      expect(page).to have_content 'Here are the findings'
    end
  end
end