context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload();

    // reload the page without using the cache
    cy.reload(true);
  });
});
