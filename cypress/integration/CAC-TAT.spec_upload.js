/// <reference types="Cypress" />

    // Hard coded e Cógigo Customizado
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    
        // Hard Coded -> nos referindo a valores ou comandos que são fixamente escritos no código-fonte do programa.
    it('Selecionar um arquivo da pasta fixtures - Hard Code', function (){
                
        cy.get('input[type="file"]#file-upload')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json')
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })

    })
        // Código customizado -> nos referindo a valores ou comandos que são fixamente escritos no código-fonte do programa.
    it('Selecionar um arquivo da pasta fixtures - código customizado', function (){
        cy.upload()
        cy.get('.error')
         .should('not.have.value')
    })
        // Hard Coded - drag-and-drop - simula arrastar o arquivo
    it('Selecionar um arquivo simulando drag-and-drop - Hard Code', function (){
                
        cy.get('input[type="file"]#file-upload')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
          .should(function($input) { 
            expect($input[0].files[0].name).to.equal('example.json')
        })

    })
        // Código customizado -> simula arrastar o arquivo.
    it('Selecionar um arquivo simulando drag-and-drop - código customizado', function (){
        cy.dragDrop()
        cy.get('.error')
            .should('not.have.value')
    })

    it('Selecionar um arquivo da pasta fixtures para qual foi dado um alias - Hard Coded', function (){
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
                //o alias pega todo o caminho ('./cypress/fixtures/example.json')
            .selectFile('@sampleFile')
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    it.only('Acessa a página de política de privacidade removendo target e então clicando no link- Hard Coded', function (){
        cy.get('#privacy a')
            // remover a target, aí a tela de privacidade abre na mesma tela
            // <a href="privacy.html" target="_blank" data-cypress-el="true">Política de Privacidade</a>
           .invoke('removeAttr', 'target')
           .click()
    })
})