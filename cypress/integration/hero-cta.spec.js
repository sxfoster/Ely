/// <reference types="cypress" />

describe('Hero CTA Booking Redirect', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'gtag').as('gtag')
      }
    })
  })

  it('redirects to Vagaro when hero button clicked', () => {
    cy.get('[data-cy=book-now-button]').first().click()
    cy.url().should(
      'include',
      'mysite.vagaro.com/sweetcreamandrose/book-now'
    )
    cy.get('@gtag').should(
      'be.calledWith',
      'event',
      'service_booking_click',
      Cypress.sinon.match({ service: 'Restorative Rose Facial' })
    )
  })
})
