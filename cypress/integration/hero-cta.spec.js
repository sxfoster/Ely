/// <reference types="cypress" />

describe('Hero CTA Booking Modal', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'gtag').as('gtag')
      }
    })
  })

  it('opens the booking modal when hero button clicked', () => {
    cy.get('[data-cy=book-now-button]').first().click()
    cy.get('[data-cy=booking-modal]').should('be.visible')
    cy.get('@gtag').should(
      'be.calledWith',
      'event',
      'service_booking_click',
      Cypress.sinon.match({ service: 'Restorative Rose Facial' })
    )
    cy.get('@gtag').should(
      'be.calledWith',
      'event',
      'service_booking_open',
      Cypress.sinon.match({ service: 'Restorative Rose Facial' })
    )
  })
})
