Feature: Create a website
  As a project organiser
  So that I can communicate our mission (and eventually deliver online courses),
  I should have a project website.
  https://www.pivotaltracker.com/story/show/66854942

  Background:
    Given I visit the site


  Scenario: Check for links
    # Then show me the page
    And I should see a link "Learn more" to "Donors"
    And I should see a link "Learn more" to "Developers"
    And I should see link "Learn more" to "Mentors"