Feature: Basic setup of application

Scenario: Visit the index path
  Given I visit the site
  Then the current path should be "root"