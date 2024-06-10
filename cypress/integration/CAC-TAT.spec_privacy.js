/// <reference types="Cypress" />

      it('Testa tela de política de privacidade de forma independente', function () {
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
                   
      })