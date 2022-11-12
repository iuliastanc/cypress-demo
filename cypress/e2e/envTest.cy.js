const SimpleCalculatorPage = require('../support/pages/SimpleCalculator');

describe.only('Env test', () => {
  it('should have correct env', () => {
    const env = Cypress.env();
    cy.logToTerminal(JSON.stringify(env, null, 2));
  });
});
