Feature: CSS files and classes for student webpages
As a student,
So that I can customise the the layout and colours of my work,
I should be able to choose from a set of class names to include in my page.

  Background:
    Given I am on the 'code-playground' page for 'workshop1'

  Scenario: Having a sample html page to work on
    I should see some sample code in the editor pane
    And I should see rendered output in the preview pane
    And the sample code should have the folloing tags:
    | tag name  |
    | heading   |
    | img       |
    | h1        |
    | h2        |
    | p         |
    And the sample code will have a 2 column layout