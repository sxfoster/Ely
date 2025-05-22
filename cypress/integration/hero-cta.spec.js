/// <reference types="cypress" />

describe('Hero CTA Booking Modal', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'gtag').as('gtag')
      }
    })
  })

  it('opens booking modal when hero button clicked', () => {
    cy.get('[data-cy=hero-book-now]').click()
    cy.get('[data-cy=booking-modal]').should('be.visible')
    cy.get('@gtag').should(
      'be.calledWith',
      'event',
      'service_booking_open',
      Cypress.sinon.match({ service: 'Hero Service' })
    )
  })
})
