require 'spec_helper'

describe 'layouts/application.html.erb' do
  it 'should have a basic layout and sticky footer' do
    render
    rendered.should have_selector('div#wrap')
    rendered.should have_selector('div#push')
    rendered.should have_selector('div#footer')
  end
end
