describe('Portfolio', () => {
  it('can find and navigate to the Pig Dice Game project', () => {
    cy.visit('/portfolio')
      .findByTestId('pig-dice-game')
      .click({ force: true })
      .findByTestId(/pig dice game/i);
  });

  it('can find and navigate to the Udacity Neighborhood Map project', () => {
    cy.visit('/portfolio')
      .findByTestId('udacity-neighborhood-map')
      .click({ force: true })
      .findByTestId(/udacity neighborhood map/i);
  });

  it('can find and navigate to the Random Quote Generator project', () => {
    cy.visit('/portfolio')
      .findByTestId('random-quote-generator')
      .click({ force: true })
      .findByTestId(/random quote generator/i);
  });

  it('can find and navigate to the Memory Game project', () => {
    cy.visit('/portfolio')
      .findByTestId('memory-game')
      .click({ force: true })
      .findByTestId(/memory game/i);
  });
});
