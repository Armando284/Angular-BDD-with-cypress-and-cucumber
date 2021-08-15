import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const testAuthor = 'Juan Perez Perez',
  testContent = 'I really love this app',
  testDate;

Given(/^The user is on the home page$/, () => {
  cy.visit('/');
});
When(/^The user fill the author and content inputs$/, () => {
  cy.get('[data-test=author-input]').type(testAuthor).should('have.value', testAuthor)
  cy.get('[data-test=content-input]').type(testContent).should('have.value', testContent)
});
Then(/^There should not be error feedback$/, () => {
  cy.get('[data-test=error-feedback]').should('have.length', 0)
});
And(/^The user click on the ADD button$/, () => {
  testDate = new Date();
  cy.get('[data-test=message-submit]').click()
});
Then(/^The author and content inputs should reset$/, () => {
  cy.get('[data-test=author-input]').should('have.value', '')
  cy.get('[data-test=content-input]').should('have.value', '')
});
And(/^The message should be added at the end of the messages list$/, () => {
  cy.get('[data-test=message]').last().within(() => {
    cy.get('[data-test=author]').contains(testAuthor)
    cy.get('[data-test=content]').contains(testContent)
    cy.get('[data-test=date]').invoke('text').then(dateText => {
      const date = new Date(dateText);
      expect(date).to.be.lte(testDate);
    });
  })
});
