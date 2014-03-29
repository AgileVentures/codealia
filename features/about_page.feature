Feature: As a team member,
  So that I get the recognition I deserve
  I should see my avatar, along with some project history on the About Us page on Codealia.org.

  Scenario: Having the about page
  	Given I visit the site
  	And I click "About us"
  	Then I should be on the "about" page
