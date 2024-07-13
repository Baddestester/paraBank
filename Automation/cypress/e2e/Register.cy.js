/// <reference types="cypress" />

describe("Register functionality test", () => {
   it('Verify if the Register feature is functional', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('#loginPanel > :nth-child(3) > a').click()// Register Button
        cy.get('.title').should('have.text', 'Signing up is easy!')
        cy.get('#customer\\.firstName').type('Rebeccah');
        cy.get('#customer\\.lastName').type('Edo');
        cy.get('#customer\\.address\\.street').type('House 1, Dominion Estate,Badore'); 
        cy.get('#customer\\.address\\.city').type('Ajah');
        cy.get('#customer\\.address\\.state').type('Lagos');
        cy.get('#customer\\.address\\.zipCode').type('11011'); 
        cy.get('#customer\\.phoneNumber').type('08055084426');
        cy.get('#customer\\.ssn').type('44423456789'); 
        cy.get('#customer\\.username').type('Breck01@');
        cy.get('#customer\\.password').type('24052024');
        cy.get('#repeatedPassword').type('24052024');
        cy.get('[colspan="2"] > .button').click() // Register Button
        cy.get('.title').should('have.text', 'Welcome Breck01@')
  
   })

   it("Verify if the Register feature is functional with invalid details", () => {
      cy. visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get('#loginPanel > :nth-child(3) > a').click() //Register Button
      cy.get('.title').should('have.text', 'Signing up is easy!');
      cy.get('#customer\\.firstName').type('El-Ray');
      cy.get('#customer\\.lastName').type('Blake');
      cy.get('#customer\\.address\\.city').type('Oshodi')
      cy.get('#customer\\.address\\.state').type('Lagos')
      cy.get('#customer\\.address\\.zipCode').type('11011')
      cy.get('#customer\\.phoneNumber').type('08055084426')
      cy.get('#customer\\.ssn').type('44456780')
      cy.get('#customer\\.username').type('Ray00')
      cy.get('#customer\\.password').type('20052023')
      cy.get('#repeatedPassword').type('20052023')
      cy.get('[colspan="2"] > .button').click() // Register Button
    
   })

   

})