Given(/^I visit the site$/) do
  visit root_path
end

Then(/^the current path should be "([^"]*)"$/) do |path|
  case path
    when 'home' then expect(current_path).to include(path)
  end
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

Then /^show me the page$/ do
  save_and_open_page
end
Then(/^I should see link to "([^"]*)"$/) do |link|
  page.should have_link link.downcase
end