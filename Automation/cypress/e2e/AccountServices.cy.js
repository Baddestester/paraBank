/// <reference types="cypress" />

describe("Verify Account Services functionality", () => {
    //Below are the features underneath the Account Services
    beforeEach(()=> {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('form > :nth-child(2) > .input').type('Breck01@')// Username
        cy.get(':nth-child(4) > .input').type('24052024') // Password
        cy.get(':nth-child(5) > .button').click() // Login button
        })

    it('Verify that the Open New Account feature is functional', () => {
        cy.get('a[href="openaccount.htm"]').click() // Open New account
        //Tutor will explain this later
        cy.get('.title').should('have.text', "Open New Account");
        cy.get('.title </b>').contains('What type of Account would you like to open?');
        cy.get('#type').select('SAVINGS'); // Drop-down button
        //cy.get('#type').select('CHECKING');
        cy.get('#fromAccountId').select('15675'); // The second drop down
        //This second drop down, the number changes so one might get the error signal unless you use the new number from cypress
        cy.get('form > div > .button').click();// Login 
        cy.get('#openAccountResult > .title').should('have.text', 'Account Opened!');
        cy.get('#openAccountResult > :nth-child(2)').should('have.text', 'Congratulations, your account is now open.');


    })

    it('Verify that the Account Overview is functional', () => {
        cy.get('a[href="overview.htm"]').click();// Account Overview button
        cy.get('a[href="activity.htm?id=19338"]').click();// click the digit button
        cy.get('.title').contains('Account Details');// Account Details
        cy.get('.title').contains('Account Activity'); //Account Activity
        cy.get('#month').select('January');// Activity Period
        cy.get('#transactionType').select('Credit'); // Type
        cy.get('[type="submit"]').click() // Go button
        cy.get('#noTransactions > b').contains('No transactions found.')
        cy.wait(2000)
        //The response you get while working on this is not wrong as its the details that was provided as at when it was being worked on
        cy.get('#month').select('All'); // Activity Period
        cy.get('#transactionType').select('All');// Type
        cy.get(':nth-child(3) > :nth-child(2) > .button').click(); // Go button
        cy.get('#noTransactions > b').contains('No transactions found.')


    })

    it("Verify that the Transfer Fund is functional", () => {
        cy.get('a[href="transfer.htm"]').click()
        cy.get('[name="input"]').type('50');
        //cy.get('#amount').type('50');
        cy.get('#fromAccountId').select([1])
        cy.get('[value="Transfer"]').click()

    })

    it("Verify that the Bill Pay feature is functional", () => {
        cy.get('a[href="billpay.htm"]').click(); // Bill Pay feature
        cy.get('[name="payee.name"]').type('Sarahh')
        cy.get('[name="payee.address.street"]').type('Gwarinpa')
        cy.get('[name="payee.address.city"]').type('FCT')
        cy.get('[name="payee.address.state"]').type('Abuja')
        cy.get('[name="payee.address.zipCode"]').type('11011')
        cy.get('[name="payee.phoneNumber"]').type('08055084426')
        cy.get('[name="payee.accountNumber"]').type('409876543')
        cy.get('[name="verifyAccount"]').type('409876543')
        cy.get('[name="amount"]').type('50')
        cy.get('[name="fromAccountId"]').select([0])
        cy.get('[type="button"]').click()
        cy.get('.title').contains('Bill Payment Complete')

    })

    it.only("Verify that the Find Transactions feature is functional", ()=> {
        cy.get('a[href="findtrans.htm"]').click() 
        cy.get('h1.title').contains('Find Transactions') 
        //cy.get('.input').select([1])
        cy.get('#transactionDate').type('02-05-2024')// Find by Date
        cy.get('#findByDate').click()
        cy.wait(2000);
        cy.get('a[href="findtrans.htm"]').click()
        cy.get('#fromDate').type('02-05-2024') // Find by Date Range
        cy.get('#toDate').type('03-05-2024')
        cy.get('#findByDateRange').click()
        cy.get('a[href="findtrans.htm"]').click()// Find by Amount
        cy.get('#amount').type('$50')
        cy.get('#findByAmount')

    })

    



})