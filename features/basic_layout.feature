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
    And  I should see a link "Twitter" to "https://twitter.com/codealia"
    And  I should see a link "Pinterest" to "https://www.pinterest.com/codealia/"
    And  I should see a link "Instagram" to "https://instagram.com/codealia_learntocode#"

  Scenario: js, css & Google Analytics code
    When I visit the site
    Then the page should include script for Google Analytics
    And the page should include css for application.css
    And the page should include js for application.js

