/// <reference types="cypress" />

describe('Service Booking Flow', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'gtag').as('gtag')
      }
    })
  })

  it('navigates to a service and opens the booking modal', () => {
    // 1. Click first service card
    cy.get('[data-cy=service-card]').first().click()
    // 2. Verify URL
    cy.url().should('match', /\/services\/[a-z0-9-]+$/)
    // 3. Click Book Now
    cy.get('[data-cy=book-now-button]').click()
    // 4. Modal appears
    cy.get('[data-cy=booking-modal]').should('be.visible')
    // 5. Analytics event fired
    cy.get('@gtag').should('be.calledWith', 'event', 'service_booking_open', 
      Cypress.sinon.match({ service: Cypress._.first(Cypress.$('[data-cy=service-card]')).text().trim() })
    )
  })
})
