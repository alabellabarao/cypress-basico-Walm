/// <reference types="Cypress" />


// Substituir comando cy.contains (identifica elementos)
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    // Hard coded
    it('Informa todos os dados corretos', function (){


        const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
        const nome = 'Pedro'
        const sobreNome = 'Barão'
        const Email = 'novo@gmail.com'
        const fone = '45991489654' 
        
        cy.get('#firstName').type(nome)
        cy.get('#lastName').type(sobreNome)
        cy.get('#email').type(Email)
        cy.get('#phone').type(fone)
        cy.get('#phone-checkbox').click()        
        cy.get('#open-text-area').type(longText, { delay: 0})

        // Veja como está a linha de baixo:
        // cy.get('button[type="submit"]').click()
        
        // Veja como vamos alterar o selector "button[type="submit"]" por 'button'
        // o Segundo argumento vai ser o botão que tem o texto 'Enviar'
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        //cy.contains('button', 'Enviar')
        //cy.get('.success').should('be.visible')
  
    })

    // Comando Customizado
    it('Enviar o formulário com sucesso usando um comando customizado', function (){
        cy.incluirContains()
        cy.get('.success').should('be.visible')
    })

})