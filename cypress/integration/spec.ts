describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Color Tests Generator')
    cy.contains('Choose your background')
  })
})
