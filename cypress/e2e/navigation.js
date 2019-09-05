describe('Navigation', () => {
  it('can find and navigate to each page on the website', () => {
    cy.visit('/')
      .findByText(/portfolio/i)
      .click({ force: true })
      .findByText(/blog/i)
      .click({ force: true })
      .findByText(/contact/i)
      .click({ force: true })
      .findByText(/home/i)
      .click({ force: true });
  });
});
