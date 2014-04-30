Feature: As an instructor
  In order to achieve good results delivering my workshop
  I would like to have a comprehensive step-by-step plan and content for the workshop.

  Scenario: Student ws1 sample code is accessible from homepage
    Given I visit the site
    And I click "Workshop 1"
    Then I should be on the "ws1" page

  Scenario: Student ws2 sample code is accessible from homepage
    Given I visit the site
    And I click "Workshop 2"
    Then I should be on the "ws2" page

  Scenario: Student visits part 1 of ws2
    Given I am on the "ws2" page
    And I click "ws2-1.html"
    Then I should see "Passions - Workshop 2"

  Scenario: Student visits part 2 of ws2
    Given I am on the "ws2" page
    And I click "ws2-2.html"
    Then I should see "Hello Social World!"

