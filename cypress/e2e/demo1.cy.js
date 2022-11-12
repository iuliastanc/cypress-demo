const { getEnv } = require('../support/Environment');
const SimpleCalculatorPage = require('../support/pages/SimpleCalculator');

describe('Calculate test suite', () => {
  beforeEach(() => {
    cy.visit(`${getEnv('baseUrl')}/calculate/appApi.html`);
  });

  it('should open the page with correct title', () => {
    cy.title({ timeout: 1100 }).should('equal', 'SimpleCalculator');
  });

  it('should open the page', () => {
    cy.get('#app .title', { timeout: 5000 }).should($el => {
      console.log($el);
      expect($el[0].innerHTML).to.equal('Simple calculator');
    });
    // cy.get("#xyz").should("be.visible");
  });

  const OPERATIONS_TEST_DATA = [
    {
      nr1: '1',
      nr2: '2',
      operationName: 'SUM',
      expectedResult: 3,
    },
    {
      nr1: '1',
      nr2: '2',
      operationName: 'MULTIPLICATION',
      expectedResult: 2,
    },
    {
      nr1: '10',
      nr2: '2',
      operationName: 'DIVISION',
      expectedResult: 5,
    },
    {
      nr1: '100',
      nr2: '0',
      operationName: 'DIVISION',
      expectedResult: 'Cannot divide by 0',
    },
  ];

  OPERATIONS_TEST_DATA.forEach(
    ({ nr1, nr2, operationName, expectedResult }) => {
      it(`${operationName}(${nr1}, ${nr2}) = ${expectedResult}`, () => {
        calculateTest({ nr1, nr2, operationName, expectedResult });
      });
    },
  );

  it('task demo', () => {
    cy.task('logToTerminal', 'this is a task message');
    cy.logToTerminal('this is a task message');
  });
});

function calculateTest({ nr1, nr2, operationName, expectedResult }) {
  SimpleCalculatorPage.calculate({ nr1, nr2, operationName });
  SimpleCalculatorPage.getResult().should('have.text', expectedResult);
}
