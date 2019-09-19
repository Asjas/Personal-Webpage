describe('Website', () => {
  it('loads and works', () => {
    cy.visit('/')
      .findByTestId(/blog/i)
      .click({ force: true })
      .findByTestId(/contact/i)
      .click({ force: true });
  });
});
