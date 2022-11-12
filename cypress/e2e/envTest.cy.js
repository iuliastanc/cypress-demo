const { getEnv } = require('../support/Environment');
const SimpleCalculatorPage = require('../support/pages/SimpleCalculator');

describe('Env test', () => {
  it('should have correct env', () => {
    cy.logToTerminal(JSON.stringify(getEnv('name'), null, 2));
  });
});
