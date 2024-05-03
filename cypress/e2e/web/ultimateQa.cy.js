describe('Ultimate', () => {

    it('', () => {

        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')

        cy.get('#et_pb_contact_name_0').type('Silvio')
        cy.get('#et_pb_contact_email_0').type('teste@teste.com.br')
    });
    
});