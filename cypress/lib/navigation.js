/* global cy */


function selectLocale(locale)
{
    cy.get('.choose-locale-audience a')
      .contains(locale)
      .click();
}

function selectAudience(selectionText)
{
    cy.get('.audience-selection')
      .contains(selectionText)
      .click();
}


function agreeDisclaimer() {
    cy.get('.disclaimer-section button')
      .click();
}

function closeAppUserDisclaimer() {
    cy.get('.disclaimerModal button')
      .click();
}

function searchFund(fundName) {
    cy.get("#search-input input")
      .type(fundName);
      
    cy.get("#search-input form")
      .submit();
}

module.exports = {
    selectLocale,
    selectAudience,
    agreeDisclaimer,
    closeAppUserDisclaimer,
    searchFund
};