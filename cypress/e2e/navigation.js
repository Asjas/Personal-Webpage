describe('Navigation', () => {
  it('can find and navigate to each page on the website', () => {
    cy.visit('/')
      .findByTestId(/projects/i)
      .click({ force: true })
      .findByTestId(/blog/i)
      .click({ force: true })
      .findByTestId(/contact/i)
      .click({ force: true })
      .findByTestId(/home/i)
      .click({ force: true });
  });
});
