/// <reference types="Cypress" />

    // Hard coded e Cógigo Customizado
    // O bloco abaixo vai ser executado 5 vezes para ver se não dá erro
    describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
            cy.visit('./src/index.html')
        })
        it('exibe e esconde as mensagens de sucesso e erro usando o .invoke com texto longo', function() {
            const longText = Cypress._.repeat('0123456789', 20)
            cy.get('#open-text-area')
              .invoke('val',longText)
              .should('have.have.value', longText)
            })
})

// ao invés de usar um texto longo como abaixo, vamos usar a .invoke , confome acima
// const longText = '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 '
// este teste demora mais tempo do que usar a variável por .invoke