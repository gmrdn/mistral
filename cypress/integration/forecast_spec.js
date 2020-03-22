/// <reference types="Cypress" />

describe('Forecast pas de mistral', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/forecast*','fixture:bouchon_aix_pas_mistral.json')
    cy.visit('/')
    cy.get('#btn_forecast').click();
  })

  it('should display today\'s wind speed', () => {
    cy.get('#is_mistral')
      .should('contain', 'Y\'a pas de mistral')
    cy.get('#speed_today')
      .should('contain', '7 km/h');

  })

  it('should display today\'s wind direction', () => {
    cy.get('#is_strong')
      .should('contain', 'Ca souffle pas fort')
    cy.get('#deg_today')
      .should('contain', '137.603');
  })
})

describe('Forecast avec mistral', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/forecast*','fixture:bouchon_aix_mistral.json')
    cy.visit('/')
    cy.get('#btn_forecast').click();
  })

  it('should display today\'s wind speed', () => {
    cy.get('#is_mistral')
      .should('contain', 'Y\'a du mistral')
    cy.get('#speed_today')
      .should('contain', '21 km/h');

  })

  it('should display today\'s wind direction', () => {
    cy.get('#is_strong')
      .should('contain', 'Ca souffle fort')
    cy.get('#deg_today')
      .should('contain', '290.603');
  })
})