import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given(/^The user is on the home page$/, () => {
  cy.visit('/');
});
When(/^The user click select blue background button$/, () => {
  cy.get('[data-test=blue-color-selector]').click();
});
Then(/^Background colors on the right side should change to blue color palette$/, () => {
  cy.get('[data-test=background-example]').should('have.class', 'bg-blue');
});
And(/^Add message button background change to blue$/, () => {
  cy.get('[data-test=message-submit]').should('have.class', 'bg-blue')
});
Given(/^The user click select red background button$/, () => {
  cy.get('[data-test=red-color-selector]').click();
});
Then(/^Background colors on the right side should change to red color palette$/, () => {
  cy.get('[data-test=background-example]').should('have.class', 'bg-red');
});
And(/^Add message button background change to red$/, () => {
  cy.get('[data-test=message-submit]').should('have.class', 'bg-red');
});
