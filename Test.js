describe('Projec', function() {
    it('Login Screen', function() {
      cy.clearCookies()
     
     cy.visit('stgclient.vetty.co/client/login', { timeout: 60000 })
      
      cy.get('input[name=email]').should('be.visible').should('be.enabled').type('vijay@tweeny.in')
      cy.get('input[name=passowrd]').should('be.visible').should('be.enabled').type('123456')
      cy.get('.login-button-container > .form-control').click()
      cy.wait(3000)
    })
    it('New candidate', function() {
    
      cy.get('.client-nav-item-btn').click()

      cy.get('#firstname').should('be.enabled').type('Priya')
      cy.get('#lastname').should('be.enabled').type('Kharatmol')
      cy.get('#email').should('be.enabled').type('Priyatest@gmail.com')
      cy.get('select')
      cy.select('Testt').should('have.value','11')
      cy.wait(1000)
      cy.get('. mx-auto btn-blue lg place-order').click()
      cy.wait(1000)

      cy.get('.show dropdown').select('Sign Out')





    })
    

    
  })