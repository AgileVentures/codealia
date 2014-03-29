require 'spec_helper'

describe 'static_pages/about' do
	it 'should include avatar images for our developers' do
		render
		rendered.should have_selector('img#avatar')
	end
end
