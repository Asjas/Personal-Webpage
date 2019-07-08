describe('Hamburger menu', function() {
  beforeEach(function() {
    cy.visit('/');
    cy.viewport(700, 660);
  });

  it('should exist and be visible on smaller screens', function() {
    cy.get('.layout')
      .find('.hamburger__menu')
      .should('exist')
      .should('be.visible');
  });

  it('should open and close the side navigation when clicked', function() {
    cy.get('.sidenav')
      .find('.navbar')
      .should('not.be.visible');

    cy.get('.layout')
      .find('.hamburger__menu')
      .click();

    cy.get('.sidenav')
      .find('.navbar')
      .should('be.visible');

    cy.get('.layout')
      .find('.hamburger__close')
      .click();

    cy.get('.sidenav')
      .find('.navbar')
      .should('not.be.visible');
  });
});
