Feature: Basic setup of application

  Scenario: Visit the index path
    When I visit the site
    Then the current path should be "root"
    And I should see "codealia"

  Scenario: Visit the about page
    When I am on the "About" page
    Then the current path should be "about"
    And I should see "About Us"

  Scenario: Social media links in the application
    When I visit the site
    Then I should see a link "Facebook" to "https://www.facebook.com/codealia"
