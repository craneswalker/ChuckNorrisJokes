

describe('Kitchen Sink', function () {
  it('.should() - assert that the app works correctly', function () {
    
    //landing page
    cy.visit('http://chuckles-norris.surge.sh/')
    cy.title().should('include', 'Chuck Norris Jokes')
    cy.get('.button').click()

    //app
    cy.url().should('contain', '/jokes')
    cy.get('.joke').should('be.empty')
    cy.get('.button').click()
    cy.get('.joke').should('not.be.empty')
  })
})
