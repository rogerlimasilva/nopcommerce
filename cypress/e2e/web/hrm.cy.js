/// <reference types="cypress" />

describe('', () => {

    it('validar login, () => ')
    
})
}
}
describe("", () => {

    it('teste de login e senha', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

    });

})
    
