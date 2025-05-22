/// <reference types="cypress" />

describe('Service Booking Flow', () => {
  beforeEach(() => {
    // stub GA4 gtag function before page load
    cy.visit('/', {
      onBeforeLoad(win) {
        // replace real gtag with a stub
        cy.stub(win, 'gtag').as('gtag')
      },
    })
  })

  it('navigates to a service page and opens booking modal with GA4 events', () => {
    // 1) Click the first service card
    cy.get('[data-cy=service-card]').first().click()

    // 2) Verify URL
    cy.url().should('match', /\/services\/[a-z0-9\-]+$/)

    // 3) Click the “Book Now” button
    cy.get('[data-cy=book-now-button]').click()

    // 4) Modal should be visible
    cy.get('[data-cy=booking-modal]').should('be.visible')

    // 5) gtag() should have been called for click and open
    cy.get('@gtag').should(
      'be.calledWith',
      'event',
      'service_booking_click',
      Cypress.sinon.match({
        service: Cypress._.first(Cypress.$('[data-cy=service-card]'))
          .innerText.trim(),
      }),
    )
    cy.get('@gtag').should(
      'be.calledWith',
      'event',
      'service_booking_open',
      Cypress.sinon.match({
        service: Cypress._.first(Cypress.$('[data-cy=service-card]'))
          .innerText.trim(),
      }),
    )
  })
})
