Feature: Delete Message Test Feature

  Test delete the one message present at home page visit

  @Focus
  Scenario: Delete Message
    Given The user is on the home page
    When The user click delete message button
    Then The message should be deleted from the list
    And The no messages found message should be displayed
