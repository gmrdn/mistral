/// <reference types="Cypress" />

context('Forecast', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/forecast*','fixture:bouchon_aix.json')
    cy.visit('/')
    cy.get('#btn_forecast').click();
  })

  it('should display today\'s wind speed', () => {
    cy.get('#speed_today')
      .should('contain', '2.01');
  })

  it('should display today\'s wind direction', () => {
    cy.get('#deg_today')
      .should('contain', '137.603');
  })
})
