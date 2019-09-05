describe('Website', () => {
  it('loads and works', () => {
    cy.visit('/')
      .findByText(/blog/i)
      .click({ force: true })
      .findByText(/contact/i)
      .click({ force: true });
  });
});
