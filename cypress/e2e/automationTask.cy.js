describe('automationTaskCypress', () => {
  it('does some nice testing :)', () => {

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'); // open target website

    cy.title().should('eq', 'XYZ Bank'); // confirm title
    
    cy.get('.btn-primary').contains('Customer Login').click(); // click on customer login

    cy.get('#userSelect').select('Harry Potter'); // select name (you can change it to any available name if necessary)

    cy.get('.btn-default').contains('Login').click(); // click login
    
    cy.get('.fontBig').should('contain', 'Harry Potter'); // confirm if name the same as selected before
    
    cy.get('.center').contains('Account Number :').parent().find('strong').then((element) => {
      cy.wrap(element).should('contain', 'Dollar'); 
    });  // confirm if dollar

    cy.get('button[ng-click="deposit()"]').click(); // click deposit
    
    let depositAmount = '123';
    cy.get('input[ng-model="amount"]').type(depositAmount); // enter deposit amount
    
    cy.get('button[type="submit"]').contains('Deposit').click(); // click deposit 
    cy.wait(2000); // wait 2 seconds to make sure deposit was processed
    
    cy.get('.error').should('contain.text', 'Deposit Successful'); // check if "Deposit Successful" is displayed
    
    cy.get('button[ng-click="transactions()"]').click(); // click on Transactions
    
    cy.get('table tbody tr').first().find('td').eq(1).should('contain.text', depositAmount); // confirm amount used in step 9 is displayed under "Amount" column
    
    cy.get('table tbody tr').first().find('td').eq(2).should('contain.text', 'Credit'); // confirm transaction type is credit
    
    cy.get('button[ng-click="back()"]').click(); // click back
    
    cy.get('button[ng-click="withdrawl()"]').click(); // click withdrawal
    
    cy.get('input[ng-model="amount"]').type(depositAmount); // enter same amount that was deposited
    
    cy.get('button[type="submit"]').contains('Withdraw').click(); // click withdraw
  
    cy.get('.error').should('contain.text', 'Transaction successful');  // check if "Transaction Successful" is displayed
    cy.wait(2000); // wait 2 seconds to make sure withdrawal was processed
    
    cy.get('button[ng-click="transactions()"]').click();  // click transactions
  
    cy.get('table tbody tr').eq(1).find('td').eq(2).should('contain.text', 'Debit');  // confirm there is another row where transaction type is "Debit"
  });
});
