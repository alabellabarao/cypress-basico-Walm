/// <reference types="Cypress" />


    // Hard coded e Cógigo Customizado
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
      // Select Blog
   
      it('Enviar o formulário com sucesso usando seletor e código customizado', function (){
        cy.get('#product')
            .select('Blog')
            .should('have.value', 'blog')
        
    })   

    it('Enviar o formulário com sucesso usando seletor Cursos e código customizado', function (){
        cy.get('#product')
            .select('Cursos')
            .should('have.value', 'cursos')
    })

    it('Enviar o formulário com sucesso usando selector Mentoria e código customizado', function (){
        cy.get('#product')
            .select('Mentoria')
            .should('have.value', 'mentoria')
        
    })  
    it('Enviar o formulário com sucesso usando seletor Youtube e código customizado', function (){
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
        
    })   

        // Hard Coded -> nos referindo a valores ou comandos que são fixamente escritos no código-fonte do programa.
    it('Informa todos os dados corretos com seletor - Hard Code', function (){
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
        cy.get('#phone-checkbox').click()        
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        })

    it('Enviar o formulário com sucesso usando seletor - Código customizado', function () {
        cy.incluirSeletor()
        cy.get('.success').should('be.visible')
    })

    it('Enviar o formulário com sucesso usando seletor Mentoria pela variável- Código customizado', function () {
        cy.incluirSeletorMentoria()
        cy.get('.success').should('be.visible')
    })

    it('Enviar o formulário com sucesso usando seletor Blog pelo índice - Código customizado', function () {
        cy.incluirSeletorBlog()
        cy.get('.success').should('be.visible')
    })
})