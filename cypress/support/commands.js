 Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
   const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
   const nome = 'Pedro'
   const sobreNome = 'Barão'
   const Email = 'novo@gmail.com'
    
   cy.get('#firstName').type(nome)
   cy.get('#lastName').type(sobreNome)
   cy.get('#email').type(Email)
   cy.get('#open-text-area').type(longText, { delay: 0})
   cy.get('button[type="submit"]').click()
   
})

Cypress.Commands.add('incluirContains', function() {
    const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
    const nome = 'Pedro'
    const sobreNome = 'Barão'
    const Email = 'novo@gmail.com'
     
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobreNome)
    cy.get('#email').type(Email)
    cy.get('#open-text-area').type(longText, { delay: 0})
    cy.contains('button', 'Enviar').click()
    
 })

 Cypress.Commands.add('incluirSeletor', function() {
   const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
   const nome = 'Pedro'
   const sobreNome = 'Barão'
   const Email = 'novo@gmail.com'
   const fone = '45991489654' 
    
   cy.get('#firstName').type(nome)
   cy.get('#lastName').type(sobreNome)
   cy.get('#email').type(Email)
   cy.get('#phone').type(fone)
   cy.get('#product')
         .select('Cursos')
         .should('have.value', 'cursos')
   cy.get('#phone-checkbox').click()        
   cy.get('#open-text-area').type(longText, { delay: 0})
   cy.contains('button', 'Enviar').click()
   
})

Cypress.Commands.add('incluirSeletorMentoria', function() {
   const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
   const nome = 'Pedro'
   const sobreNome = 'Barão'
   const Email = 'novo@gmail.com'
   const fone = '45991489654'
   const mentoria = 'mentoria'
    
   cy.get('#firstName').type(nome)
   cy.get('#lastName').type(sobreNome)
   cy.get('#email').type(Email)
   cy.get('#phone').type(fone)
   cy.get('#product')
         .select(mentoria)
         .should('have.value', mentoria)
   cy.get('#phone-checkbox').click()        
   cy.get('#open-text-area').type(longText, { delay: 0})
   cy.contains('button', 'Enviar').click()
})


// Blog índice 1
// Cursos índice 2
// Mentoria índice 3
// Youtube índice 4
Cypress.Commands.add('incluirSeletorBlog', function() {
   const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
   const nome = 'Pedro'
   const sobreNome = 'Barão'
   const Email = 'novo@gmail.com'
   const fone = '45991489654'
       
   cy.get('#firstName').type(nome)
   cy.get('#lastName').type(sobreNome)
   cy.get('#email').type(Email)
   cy.get('#phone').type(fone)
   cy.get('#product')
         .select(1)
         .should('have.value', 'blog')
   cy.get('#phone-checkbox').click()        
   cy.get('#open-text-area').type(longText, { delay: 0})
   cy.contains('button', 'Enviar').click()
   
})

Cypress.Commands.add('incluirRadiobuttonFeedback', function() {
   const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
   const nome = 'Pedro'
   const sobreNome = 'Barão'
   const Email = 'novo@gmail.com'
   const fone = '45991489654'
       
   cy.get('#firstName').type(nome)
   cy.get('#lastName').type(sobreNome)
   cy.get('#email').type(Email)
   cy.get('#phone').type(fone)
   cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
   cy.get('#product')
         .select(1)
         .should('have.value', 'blog')
   cy.get('#phone-checkbox').click()        
   cy.get('#open-text-area').type(longText, { delay: 0})
   cy.contains('button', 'Enviar').click()
   
})

Cypress.Commands.add('incluirRadiobuttonAjuda', function() {
   const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
   const nome = 'Pedro'
   const sobreNome = 'Barão'
   const Email = 'novo@gmail.com'
   const fone = '45991489654'
       
   cy.get('#firstName').type(nome)
   cy.get('#lastName').type(sobreNome)
   cy.get('#email').type(Email)
   cy.get('#phone').type(fone)
   cy.get('input[type="radio"][value="ajuda"]')
            .check()
            .should('have.value', 'ajuda')
   cy.get('#product')
         .select(1)
         .should('have.value', 'blog')
   cy.get('#phone-checkbox').click()        
   cy.get('#open-text-area').type(longText, { delay: 0})
   cy.contains('button', 'Enviar').click()
})
Cypress.Commands.add('incluirRadiobuttonElogio', function() {
   const longText = 'O clima do Rio Grande do Sul é bastante diversificado devido à sua localização geográfica e topografia variada. Predomina o clima subtropical, com quatro estações bem definidas. Os verões são quentes e úmidos, enquanto os invernos são frios, com ocorrência de geadas e, ocasionalmente, neve nas áreas mais altas.'
   const nome = 'Pedro'
   const sobreNome = 'Barão'
   const Email = 'novo@gmail.com'
   const fone = '45991489654'
       
   cy.get('#firstName').type(nome)
   cy.get('#lastName').type(sobreNome)
   cy.get('#email').type(Email)
   cy.get('#phone').type(fone)
   cy.get('input[type="radio"][value="elogio"]')
            .check()
            .should('have.value', 'elogio')
   cy.get('#product')
         .select(1)
         .should('have.value', 'blog')
   cy.get('#phone-checkbox').click()        
   cy.get('#open-text-area').type(longText, { delay: 0})
   cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('incluirFoneBrancoCheckFoneCheckado', function() {
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
})
