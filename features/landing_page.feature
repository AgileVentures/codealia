Feature: Create a website
  As a project organiser
  So that I can communicate our mission (and eventually deliver online courses),
  I should have a project website.
  https://www.pivotaltracker.com/story/show/66854942

  Background:
    Given I visit the site


  Scenario: Check for links
    # Then show me the page
    Then I should see a link to the "Donors" page
    And I should see a link to the "Developers" page
    And I should see link to the "Mentors" page

  Scenario: Check for links in footer
    Then I should see a link "About us" to "about"

