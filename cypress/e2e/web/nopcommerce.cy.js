// Modelagem 1
describe('Modelagem 01: cenário de testes de login e senha:', () => {
// Antes de Cada
beforeEach(() => {
// URL Dinamica     
cy.visit('/')
});
// Primeiro IT
    it('1-	Teste positivo de login e senha;', () => {
// URL
        
// Login
        cy.get('#Email')
           .clear()
                .type('admin@yourstore.com')
// Senha
        cy.get('#Password')
            .clear()
                .type('admin')
// Botão
        cy.get('.button-1').click()        
    });
// Segundo IT
    it('2-	Teste negativo de login e senha;', () => {
// URL
        
// Login
        cy.get('#Email')
            .clear()
// Senha
        cy.get('#Password')
            .clear()
// Botão
        cy.get('.button-1').click()
// Assert
        cy.contains('Please enter your email')
            .should('have.text', 'Please enter your email')
    });
});
// Modelagem 2
describe('Modelagem 02: cenário de testes de localização de produtos (Products), no botão “Catalog”:', () => {
// Antes de Cada
beforeEach(() => {
        // URL Dinamica     
        cy.visit('/')
        });
// Primeiro IT
       it('1-	No campo “Product name”, localizar o produto “Lenovo Thinkpad X1 Carbon Laptop”, clicar em “Edit” e no campo “Vendor”, selecionar “vendor1”;', () => {
// URL
        
// Login
        cy.get('#Email')
           .clear()
                .type('admin@yourstore.com')
// Senha
        cy.get('#Password')
            .clear()
                .type('admin')
// Botão
        cy.get('.button-1').click()
// Expansão do menu
cy.get('#nopSideBarPusher').click()
// Botão Catalogo
cy.get('.nav-pills > :nth-child(2) > :nth-child(1)').click({force: true})
// Botão Products
        cy.get('#nopSideBarPusher').click()
        cy.get('.nav-pills > :nth-child(2) > :nth-child(1)').click()
        cy.get('[style="display: block;"] > :nth-child(1) > .nav-link').click({force: true})
// Inserir nome do produto
        cy.get('#SearchProductName').type('Lenovo Thinkpad X1 Carbon Laptop')
// Botão Pesquisar
        cy.get('#search-products').click()
// Botão Edit
cy.get('#search-products').click({force: true})
 // Selecionar Vendor1
        cy.xpath("(//select[@data-val='true'])[3]").select('Vendor 1')
        
       });
});
// Modelagem 03
describe('Modelagem 03: cenário de testes de localização de Pedidos (Orders), no botão “Sales”:', () => {
// Antes de Cada
beforeEach(() => {
// URL Dinamica     
cy.visit('/')
        });
// Primeiro IT
it('1-	Visualizar o pedido número “5”;', () => {
// URL

// Login
cy.get('#Email')
.clear()
     .type('admin@yourstore.com')
// Senha
cy.get('#Password')
 .clear()
     .type('admin')
// Botão
cy.get('.button-1').click()
// Expansão do menu
cy.get('#nopSideBarPusher').click()
// Botão Sales
cy.get('.nav-pills > :nth-child(3) > :nth-child(1)').click({force: true})
// Botão Orders
cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link').click({force: true})
// Visualizar pedido 5
cy.get(':nth-child(1) > .button-column > .btn').click({force: true})
    }); 
// Segundo IT
it('2-	Visualizar o pedido número “1”;', () => {
// URL

// Login
cy.get('#Email')
.clear()
     .type('admin@yourstore.com')
// Senha
cy.get('#Password')
 .clear()
     .type('admin')
// Botão
cy.get('.button-1').click()
// Expansão do menu
cy.get('#nopSideBarPusher').click()
// Botão Sales
cy.get('.nav-pills > :nth-child(3) > :nth-child(1)').click({force: true})
// Botão Orders
cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link').click({force: true})
// Visualizar pedido 1
cy.get(':nth-child(5) > .button-column > .btn').click({force: true}) 
});
// Terceiro IT
it('3-	Visualizar o pedido número “3”;', () => {
// URL

// Login
cy.get('#Email')
.clear()
     .type('admin@yourstore.com')
// Senha
cy.get('#Password')
 .clear()
     .type('admin')
// Botão
cy.get('.button-1').click()
// Expansão do menu
cy.get('#nopSideBarPusher').click()
// Botão Sales
cy.get('.nav-pills > :nth-child(3) > :nth-child(1)').click({force: true})
// Botão Orders
cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link').click({force: true})
// Visualizar pedido 3
cy.get(':nth-child(3) > .button-column > .btn').click({force: true})
    });
});
// Modelagem 4
describe.only('Modelagem 04: cenário de testes confirmar e-mail de Fornecedores (Vendors), no botão “Vendors”:', () => {
// Antes de Cada
beforeEach(() => {
// URL Dinamica     
cy.visit('/')
                });
// Primeiro IT
it.only('1-	No campo “Email”, localizar o e-mail “vendor1email@gmail.com” e confirmar se está correto.', () => {
// URL

// Login
cy.get('#Email')
.clear()
     .type('admin@yourstore.com')
// Senha
cy.get('#Password')
 .clear()
     .type('admin')
// Botão
cy.get('.button-1').click()
// Expansão do menu
cy.get('#nopSideBarPusher').click()
// Botão Customer
cy.get('.nav-pills > :nth-child(4) > :nth-child(1)').click({force: true})
// Botão Vendors
cy.get('.menu-is-opening > .nav > :nth-child(4) > .nav-link').click({force: true})
// Assert
cy.contains('vendor1email@gmail.com')
.should('have.text', 'vendor1email@gmail.com')
        });
});




