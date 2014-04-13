require 'spec_helper'

describe 'Lesson 1' do
	it 'should include a paragraph' do
    get lesson1_path
    response.body.should include('Hello') 
  end

  it 'should have "HTML Lesson 1" in the title' do
    get lesson1_path
    assert_select 'title', 'HTML Lesson 1'
  end
end