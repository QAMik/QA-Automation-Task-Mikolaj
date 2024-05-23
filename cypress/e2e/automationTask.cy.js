describe('automationTaskCypress', () => {
  it('does some nice testing :)', () => {

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'); // open target website

    cy.title().should('eq', 'XYZ Bank'); // confirm title
    
    cy.get('.btn-primary').contains('Customer Login').click(); // click on customer login

    cy.get('#userSelect').select('Harry Potter'); // select name (you can change it to any available name if necessary)

    cy.get('.btn-default').contains('Login').click(); // click login
    
    cy.get('.fontBig').should('contain', 'Harry Potter'); // select name you can change it to any available name if necessary
    
    cy.get('.center').contains('Account Number :').parent().find('strong').then((element) => {
      cy.wrap(element).should('contain', 'Dollar');   // confirm if dollar
    });
  });
});