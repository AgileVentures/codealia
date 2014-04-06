require 'spec_helper'

describe 'layouts/application.html.erb' do
  context 'meta tags' do
    all_selectors = %w(
      meta[charset="utf-8"]
      meta[http-equiv=X-UA-Compatible][content="IE=edge"]
      meta[name="viewport"]
      meta[name="keywords"]
      meta[name="description"]
      meta[name="author"]
      meta[property="og:title"]
      meta[property="og:type"]
      meta[property="og:url"]
      meta[property="og:description"]
      meta[property="og:image"]
      meta[name="twitter:card"]
      meta[name="twitter:title"]
      meta[name="twitter:description"]
      meta[name="twitter:url"]
    )
    all_selectors.each do |css_selector|
      it "should have selector #{css_selector}" do
        render
        rendered.should have_css css_selector, visible: false
      end
    end
  end

  it 'should have a basic layout and sticky footer' do
    render
    rendered.should have_selector('div#wrap')
    rendered.should have_selector('div#push')
    rendered.should have_selector('div#footer')
  end

  context 'social media links' do
    before(:each) { render }

    it 'should have a link to the Facebook page' do
      rendered.should have_link 'Facebook', href: 'https://www.facebook.com/codealia'
    end
  end
end
