Feature: Add New Message Test Feature

  Test add a new message to the list

  @Focus
  Scenario: Add Message
    Given The user is on the home page
    When The user fill the author and content inputs
    Then There should not be error feedback
    And The user click on the ADD button
    Then The author and content inputs should reset
    And The message should be added at the end of the messages list

