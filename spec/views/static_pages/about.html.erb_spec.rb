require 'spec_helper'

describe 'static_pages/about' do
	it 'should include avatar images for our developers' do
		render
		rendered.should have_selector('div#avatarThomas')
    rendered.should have_selector('div#avatarPete')
    rendered.should have_selector('div#avatarSam')
    rendered.should have_selector('div#avatarViv')
    rendered.should have_selector('div#avatarLuchinda')
    rendered.should have_selector('div#avatarMarian')
	end
end
