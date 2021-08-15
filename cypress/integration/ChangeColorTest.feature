Feature: Change Color Test Feature

  Test background change color

  @Focus
  Scenario: Change Color
    Given The user is on the home page
    When The user click select blue background button
    Then Background colors on the right side should change to blue color palette
    And The user click select red background button
    Then Background colors on the right side should change to red color palette
