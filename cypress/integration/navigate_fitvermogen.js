/* global cy */

const nav = require("../lib/navigation");



context('Navigation', () => {
  
  before(() => {
    cy.visit('https://nnip.com');
  });

  it('Confirm redirection to www.nnip.com', () => {
    cy.location('hostname')
      .should('include', 'www');
  });

  it('Confirm page title', () => {
    cy.title()
      .should('eq', 'NN Investment Partners');
  });
  
  it('Page should show audience selection', () => {
    nav.selectAudience('Particuliere');
  });

  it('Button closes disclaimer', () => {
    nav.agreeDisclaimer();
    cy.get('.disclaimer-section').should('not.exist');
  });
  
  it('Non-professional page shows section on FitVermogen', () => {
    cy.get('.main')
      .contains("FitVermogen.nl");
  });
  
  it('Button navigates to fitvermogen web site in a new tab', () => {
    cy.get('.main a')
      .contains('Ontdek FitVermogen')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.fitvermogen.nl')
      .click();
  });

});
 
  