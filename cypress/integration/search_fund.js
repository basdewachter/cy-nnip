/* global cy */

const nav = require("../lib/navigation");



context('Search fund', () => {
  
  before(() => {
    cy.visit('https://nnip.com');
  });

  it('User is able to choose locale', () => {
    nav.selectLocale('International');
  });

  it('Page shows audience selection', () => {
    nav.selectAudience('Professionele');
  });

  it('Button closes disclaimer', () => {
    nav.agreeDisclaimer();
    cy.get('.disclaimer-section').should('not.exist');
  });
  
  it('Click menu opens funds search page', () => {
    cy.get('#quick-access a[href*="/funds"]')
      .contains("Funds")
      .click();
  });
  
  it('Click button closes application user disclaimer', () => {
    nav.closeAppUserDisclaimer();
    cy.get(".disclaimerModal").should('be.hidden');
  });
  
  it('Searching for a fund returns result', () => {
    nav.searchFund("LU0362138090");

    cy.get("#searchResults")
      .contains("1 result");

    cy.get(".fundlistcard")
      .should('have.length', 1);
  });

  it('Search result button should open fund details page', () => {
    cy.get('.fundlistcard__btncontainer a')
      .click();
      
    cy.get('.fund-keyfacts')
      .should('exist');
  });

});