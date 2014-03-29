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
  page.should have_xpath "//a[@href='#{url}']"
end

Given(/^I should see[ a]* link "([^"]*)" to "([^"]*)"$/) do |link_text, page_name|
  page.should have_link link_text, :href => path_to(page_name)
end

Given(/^I click "(.*?)"$/) do |text|
  click_link(text)
end

Then(/^I should see avatars for "(.*?)"$/) do |devs|
  devs.split(',').each do |name|
    page.should have_css('img#avatar' + name)
  end
end
