/// <reference types="Cypress" />

    // Hard coded e Cógigo Customizado
    // O bloco abaixo vai ser executado 5 vezes para ver se não dá erro
Cypress._.times(30, function() {
    
    it('Testa tela de política de privacidade de forma independente', function () {
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
                   
    })
})