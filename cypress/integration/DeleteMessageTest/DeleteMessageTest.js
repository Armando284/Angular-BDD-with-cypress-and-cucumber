import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^The user is on the home page$/, () => {
  cy.visit('/');
});
When(/^The user click delete message button$/, () => {
  cy.get('[data-test=delete-button]').should('have.length', 1).click()
});
Then(/^The message should be deleted from the list$/, () => {
  cy.get('[data-test=message]').should('have.length', 0)
});
And(/^The no messages found message should be displayed$/, () => {
  cy.get('[data-test=no-message-found]').contains('There are no messages to show :(')
});
