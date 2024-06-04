/// <reference types="Cypress" />


    // Hard coded e Cógigo Customizado
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    
        // Hard Coded -> nos referindo a valores ou comandos que são fixamente escritos no código-fonte do programa.
    it('Informa todos os dados (checkbox do telefone checkado) telefone em branco, mostra mensagem de erro - Hard Code', function (){
        const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
        const nome = 'Pedro'
        const sobreNome = 'Barão'
        const email = 'novo@gmail.com'
        const fone = '45991489654' 
            
        cy.get('#firstName').type(nome)
        cy.get('#lastName').type(sobreNome)
        cy.get('#product')
         .select('Blog')
         .should('have.value', 'blog')
        cy.get('input[type="radio"][value="elogio"]')
            .check()
            .should('have.value', 'elogio')
        cy.get('#phone-checkbox')
            .check()     
            .should('be.checked')
        cy.get('#open-text-area')
            .type(longText, { delay: 0})
        cy.get('button[type="submit"]')
            .click()
        cy.get('.error')
            .should('be.visible')
    })

    it('Enviar o formulário com erro pelo telefone estar em branco - com check do telfone checkado - código customizado', function (){
        cy.incluirFoneBrancoCheckFoneCheckado()
        cy.get('.error')
         .should('be.visible')
    })

})