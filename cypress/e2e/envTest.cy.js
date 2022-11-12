const SimpleCalculatorPage = require('../support/pages/SimpleCalculator');

describe.only('Env test', () => {
  it('should have correct env', () => {
    const x = Cypress.config('x');
    cy.logToTerminal(env);
    const currentEnv = Cypress.env[env];
    cy.logToTerminal(JSON.stringify(currentEnv, null, 2));
  });
});
