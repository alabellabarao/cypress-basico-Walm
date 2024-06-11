/// <reference types="Cypress" />

    // Hard coded e Cógigo Customizado
    // O bloco abaixo vai ser executado 5 vezes para ver se não dá erro
    describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
            cy.visit('./src/index.html')
        })
        it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', function() {
            cy.get('.success')
              .should('not.be.visible')
              .invoke('show')
              .should('be.visible')
              .and('contain', 'Mensagem enviada com sucesso')
              .invoke('hide')
              .should('not.be.visible')
            cy.get('.error')
              .should('not.be.visible')
              .invoke('show')
              .should('be.visible')
              .and('contain', 'Valide os campos obrigatórios!')
              .invoke('hide')
              .should('not.be.visible')
          })
})

//Em resumo, .invoke('show') e .invoke('hide') são usados para alterar a visibilidade do elemento diretamente, 
//permitindo que você teste a aparência e o desaparecimento do elemento na interface do usuário. Esses métodos 
//são úteis para garantir que as mensagens de sucesso ou erro apareçam e desapareçam conforme esperado durante 
//o teste automatizado.