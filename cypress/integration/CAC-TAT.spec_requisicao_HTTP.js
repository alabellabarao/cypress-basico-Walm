/// <reference types="Cypress" />


    // Hard coded e Cógigo Customizado
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('Faz uma requisição HTTP', function (){
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
	        .should(function(response) {
	            const { status, statusText, body } = response
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
                expect(body).to.include('CAC TAT')

	    })
    })
})

     