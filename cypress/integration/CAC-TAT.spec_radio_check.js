/// <reference types="Cypress" />


    // Hard coded e Cógigo Customizado
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    
    it('Enviar o formulário com sucesso usando radiobutton Feedback', function (){
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
    })   


    it('Enviar o formulário com sucesso usando radiobutton Ajuda', function (){
        cy.get('input[type="radio"][value="ajuda"]')
            .check()
            .should('have.value', 'ajuda')
    })  
    it('Enviar o formulário com sucesso usando radiobutton Elogio', function (){
        cy.get('input[type="radio"][value="elogio"]')
            .check()
            .should('have.value', 'elogio')
    })  
           // Hard Coded -> nos referindo a valores ou comandos que são fixamente escritos no código-fonte do programa.
    it('Informa todos os dados corretos com radiobutton Elogio - Hard Code', function (){
        const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
        const nome = 'Pedro'
        const sobreNome = 'Barão'
        const email = 'novo@gmail.com'
        const fone = '45991489654' 
            
        cy.get('#firstName').type(nome)
        cy.get('#lastName').type(sobreNome)
        cy.get('#email').type(email)
        cy.get('#phone').type(fone)
        cy.get('#product')
         .select('Blog')
         .should('have.value', 'blog')
        cy.get('input[type="radio"][value="elogio"]')
            .check()
            .should('have.value', 'elogio')
        cy.get('#phone-checkbox').click()        
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    it('Informa todos os dados corretos com o radiobutton Ajuda - Hard Code', function (){
        const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
        const nome = 'Pedro'
        const sobreNome = 'Barão'
        const email = 'novo@gmail.com'
        const fone = '45991489654' 
            
        cy.get('#firstName').type(nome)
        cy.get('#lastName').type(sobreNome)
        cy.get('#email').type(email)
        cy.get('#phone').type(fone)
        cy.get('#product')
         .select('Blog')
         .should('have.value', 'blog')
        cy.get('input[type="radio"][value="ajuda"]')
            .check()
            .should('have.value', 'ajuda')
        cy.get('#phone-checkbox').click()        
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    it('Informa todos os dados corretos com o radiobutton Feedback - Hard Code', function (){
        const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
        const nome = 'Pedro'
        const sobreNome = 'Barão'
        const email = 'novo@gmail.com'
        const fone = '45991489654' 
            
        cy.get('#firstName').type(nome)
        cy.get('#lastName').type(sobreNome)
        cy.get('#email').type(email)
        cy.get('#phone').type(fone)
        cy.get('#product')
         .select('Blog')
         .should('have.value', 'blog')
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
        cy.get('#phone-checkbox').click()        
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    // Códigos customizados
    it('Enviar o formulário com sucesso usando radiobutton Ajuda - Código customizado', function () {
        cy.incluirRadiobuttonFeedback()
        cy.get('.success').should('be.visible')
    })

    it('Enviar o formulário com sucesso usando radiobutton Ajuda - Código customizado', function () {
        cy.incluirRadiobuttonAjuda()
        cy.get('.success').should('be.visible')
    })
    it('Enviar o formulário com sucesso usando radiobutton Elogio - Código customizado', function () {
        cy.incluirRadiobuttonElogio()
        cy.get('.success').should('be.visible')
    })
    it('Marca cada tipo  de atendimento - marca um radiob de cada vez - Código customizado', function () {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    })
    it('Marca ambos checkboxes - Código customizado', function () {
           // Aqui ele marca os dois elementos: o e-mail e o telefone, aí manda o chek para os dois
        cy.get('input[type="checkbox"]')
            .check()
            // verificou que ambos estão marcados
            .should('be.checked')
                // last, fica setado o último checkbox (first, fica setado o primeiro checkbox)
            .last()
                // desmarca o checkbox
            .uncheck()
                // verifica que não está checado
            .should('not.be.checked')

    })
})