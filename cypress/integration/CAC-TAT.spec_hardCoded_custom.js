/// <reference types="Cypress" />


    // Hard coded e Cógigo Customizado
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('Verifica o título da aplicaç"ao', function (){
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

        // Hard Coded
        // Preencher todos os campos obrigatórios e enviar com sucesso
    it('Preenche os campos obrigatórios e envia o formulário', function (){
               
        cy.get('#firstName').type('Ana')
        cy.get('#lastName').type('Barão')
        cy.get('#email').type('novo@gmail.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

        // Hard Coded
        // Preencher todos os campos obrigatórios passando constantes e enviar com sucesso
    it('Preenche os campos obrigatórios com constantes e envia o formulário com sucesso', function (){
        
        const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
        const nome = 'Pedro'
        const sobreNome = 'Barão'
        const Email = 'novo@gmail.com'
        
        cy.get('#firstName').type(nome)
        cy.get('#lastName').type(sobreNome)
        cy.get('#email').type(Email)
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
        // Preencher o campo email com email inválido e mostrar erro
    it('Incluir um e-mail inválido e enviar o formulário, mensagem de error', function (){
        cy.get('#email').type('novo            dffdsaf@gmail       ,com')
        cy.get('button[type="submit"]').click()
        cy.get('.error > strong').should('be.visible')
           
    })
        // Hard Coded
        // Tentar digitar valor não numérico, campo telefone continua vazio
    it('Tentar digitar valor não numérico, campo telefone continua vazio', function (){
        cy.get('#phone')
            .type('dfafdasfas')
            .should('have.value', '')
 
    })  
        // Hard Coded
        // Exibe mensagem de erro quando o telefone se torna obrigatório, mas não é preenchido
    it('Exibe mensagem de erro quando o telefone se torna obrigatório, mas não é preenchido', function (){


        const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
        const nome = 'Pedro'
        const sobreNome = 'Barão'
        const Email = 'novo@gmail.com'
        
        cy.get('#firstName').type(nome)
        cy.get('#lastName').type(sobreNome)
        cy.get('#email').type(Email)
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.error > strong').should('be.visible')
  
    })

    // Hard Coded -> nos referindo a valores ou comandos que são fixamente escritos no código-fonte do programa.
    it.only('Informa todos os dados corretos', function (){
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
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
  
    })
        // Hard Coded
    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function (){
        const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
        const nome = 'Pedro'
        const sobreNome = 'Barão'
        const Email = 'novo@gmail.com'
        const fone = '45991489654' 
        
        cy.get('#firstName')
            .type(nome)
            .should('have.value', nome)
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type(sobreNome)
            .should('have.value',sobreNome)
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type(Email)
            .should('have.value',Email)
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type(fone)
            .should('have.value',fone)
            .clear()
            .should('have.value', '')
        cy.get('#phone-checkbox').click()  
            .click()
        cy.get('#open-text-area')
            .type(longText, { delay: 0})
            .should('have.value',longText)
            .clear()
            .should('have.value', '')
    })

        // Enviar o formulário com sucesso usando um comando customizado
        // Deixar todos os campos obrigatórios em branco e mostrar erro
    it('Deixar todos os campos em branco e enviar o formulário, mensagem de erro', function (){
        cy.get('button[type="submit"]').click()
        cy.get('.error > strong').should('be.visible')
       
    })

    // Enviar o formulário com sucesso usando um comando customizado
    // No arquivo commands.js chama a função fillMandatoryFieldsAndSubmit e chama os campos
    // Comando customizado ->  Este tipo de código é adaptado às exigências do usuário final e 
        // pode ser ajustado conforme as necessidades mudam, proporcionando maior flexibilidade e 
        // precisão na solução implementada.

    it('Enviar o formulário com sucesso usando um comando customizado', function (){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })
})