describe('website', () => {
  it('works', () => {
    cy.visit('/')
      .findByText(/blog/i)
      .click()
      .findByText(/contact/i)
      .click()
      .findByText(/home/i)
      .click();
  });
});
