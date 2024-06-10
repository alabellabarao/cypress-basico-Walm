/// <reference types="Cypress" />

    // Hard coded e Cógigo Customizado
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    
    it('Acessa a página de política de privacidade removendo target e então clicando no link, abre na mesma tela - Hard Coded', function (){
        cy.get('#privacy a').should('have.attr','target', '_blank')
            // remover a target, aí a tela de privacidade abre na mesma tela
            // <a href="privacy.html" target="_blank" data-cypress-el="true">Política de Privacidade</a>
           .invoke('removeAttr', 'target')
           .click()
        cy.contains('Talking About Testing').should('be.visible')
    })
    it('Acessa a página de política de privacidade, abre em outra tela - Hard Coded', function (){
        cy.get('#privacy a')
           .click()
     })
})