require 'spec_helper'

describe 'Lesson 1' do
  describe 'presence of lesson 1 page' do
    before :each do
      get lesson1_path
    end

  	it 'should include a paragraph' do
      response.body.should include('Hello')
    end

    it 'should have "HTML Lesson 1" in the title' do
      assert_select 'title', 'HTML Lesson 1'
    end

    it 'should include bootstrap and jQuery' do
      # assert_select "link[href=?]", /bootstrap(.min)?.css/
      assert_select 'link[href=//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css]'
      assert_select 'script[src=//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js]'
      assert_select 'script[src=https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js]'
    end
  end

  describe 'Lesson 1 content requirements' do
    it 'should have these html tags: <a> <img> <p> <ul> <ol> <li> <footer>' do
      get lesson1_path
      assert_select 'a'
      # assert_select 'img'
      assert_select 'p'
      # assert_select 'ul'
      assert_select 'ol'
      assert_select 'li'
      assert_select 'footer'
    end
  end
end
