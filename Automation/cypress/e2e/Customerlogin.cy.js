/// <reference types="cypress" />

describe("Verify Customerlogin functionality", () => {
    it('Verify if username and password is registered',() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get(':nth-child(2) > .input').type('Breck01@'); // Username
        cy.get(':nth-child(4) > .input').type('24052024'); // Password
        cy.get(':nth-child(5) > .button').click() // Login Button

    })
    it('Verify that a non-registered user can login', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('form > :nth-child(2) > .input').type('Say11')// Username
        cy.get(':nth-child(4) > .input').type('442654') // Password
        cy.get(':nth-child(5) > .button').click() 
        cy.get('.title').should('have.text', 'Error!');
        cy.get('.error').should('have.text', 'The username and password could not be verified.');

    })

    it('Verify if the forgot login button is functional',() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(2) > ').click() // Forgot login button
        cy.get('#firstName').type('Adesola');
        cy.get('#lastName').type('Olusegun');
        cy.get('#address\\.street').type('House 13 Dominion Estate, Olokonla');
        cy.get('#address\\.city').type('Ajah');
        cy.get('#address\\.state').type('Lagos');
        cy.get('#address\\.zipCode').type('11011');
        cy.get('#ssn').type('44423456789');
        cy.get('[colspan="2"] > .button').click() // Forgot login info button

    })

    
          
})