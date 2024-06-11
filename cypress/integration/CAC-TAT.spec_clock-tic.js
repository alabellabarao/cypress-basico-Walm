/// <reference types="Cypress" />

    // Hard coded e Cógigo Customizado
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    
        // Hard Coded -> nos referindo a valores ou comandos que são fixamente escritos no código-fonte do programa.
        it('Informa todos os dados corretos', function (){


            const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
            const nome = 'Pedro'
            const sobreNome = 'Barão'
            const Email = 'novo@gmail.com'
            const fone = '45991489654' 
            const TREE_SECONDS_IN_MS = 3000
            
                // congela o relógio do navegador
            cy.clock()
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
                
            // tempo de pelo menos 3 milisegundos para verificar que a mensagem não está mais visível
            cy.tick(TREE_SECONDS_IN_MS)
            cy.get('.success').should('not.be.visible')
     
        })
})