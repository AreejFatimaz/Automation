
    it('Assertions Demo', () => {

        //cy.contains('Querying').click()
      cy.visit('https://example.cypress.io')

      cy.contains('get').click()
      cy.get('#query-btn')
      .should('contain','Button')
      .should('have.class','query-btn')
      .should('be.visible')

expect(true).to.be.true

assert.equal(4, 4, 'NOT EQUAL')
assert.strictEqual(4, 4, 'NOT EQUAL')




    })
 