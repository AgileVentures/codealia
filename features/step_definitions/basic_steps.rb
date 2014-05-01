def path_to(page_name, id = '')
  name = page_name.downcase
  case name
    when 'about' then
      about_path
    when 'donors' then
      donors_path
    when 'developers' then
      developers_path
    when 'mentors' then
      mentors_path
    when 'ws1' then
      ws1_path
    when 'ws2' then
      ws2_path
    else
      pending
  end
end

Given(/^I visit the site$/) do
  visit root_path
end

Then(/^the current path should be "([^"]*)"$/) do |path|
  case path
    when 'home' then expect(current_path).to include(path)
  end
end

Then(/^I should be on the "(.*?)" page$/) do |page_name|
  expect(current_path).to eq path_to(page_name)
end

Given(/^I am on the "(.*?)" page$/) do |page|
  visit "/#{page.downcase}"
end

Then(/^I should see "(.*?)"$/) do |string|
  page.should have_content string
end

Then(/^I should see a navigation header$/) do
  page.should have_css('section#header')
end

Then(/^I should see a main content area$/) do
  page.should have_css('section#main')
end

Then(/^I should see a footer area$/) do
  page.should have_css('section#footer')
end

Then(/^show me the page$/) do
  save_and_open_page
end

Then(/^I should see[ a]* link to the "(.*?)" page$/) do |page_name|
  url = path_to(page_name)
  page.should have_css "a[href^=\"#{url}\"]"
end

Given(/^I should see[ a]* link "([^"]*)" to "([^"]*)"$/) do |link_text, link|
  page.should have_link link_text, :href => link
end

Given(/^I should see[ a]* link "([^"]*)" to "([^"]*)" page$/) do |link_text, page_name|
  page.should have_link link_text, :href => path_to(page_name)
end

Given(/^I click "(.*?)"$/) do |text|
  click_link(text)
end

Then(/^I should see avatars for "(.*?)"$/) do |devs|
  devs.split(',').each do |name|
    page.should have_css('div#avatar' + name.strip)
  end
end
When(/^the page should include ([^"]*) for ([^"]*)$/) do |tag, content|
  case tag
    when 'script'then
      case content
        when 'Google Analytics' then page.should have_xpath("//script[text()[contains(.,'GoogleAnalyticsObject')]]", visible: false)
      end
    when 'css' then page.source.should have_xpath("//link[contains(@href, '#{content}')]", visible: false)
    when 'js' then page.source.should have_xpath("//script[contains(@src, '#{content}')]", visible: false)

  end
end
