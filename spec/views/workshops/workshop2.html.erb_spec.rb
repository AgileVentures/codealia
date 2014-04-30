require 'spec_helper'

describe 'workshops/workshop2.html.erb' do
  before :each do
    render
  end

  it 'should include WS Title' do
    rendered.should have_text 'Hello Social World'
  end

  it 'should have resource links' do
    rendered.should have_link 'ws2-1.html', ws2part1_path
    rendered.should have_link 'ws2-2.html', ws2part2_path
  end
end
