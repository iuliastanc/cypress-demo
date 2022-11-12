const selectors = {
  number1Input: '#nr1',
  number2Input: '#nr2',
  operationSelect: 'select',
  calculateButton: 'button',
  result: '[data-qa-test=result]',
};

const calculate = ({ nr1, nr2, operationName }) => {
  cy.get(selectors.number1Input).type(nr1);
  cy.get(selectors.number2Input).type(nr2);
  cy.get(selectors.calculateButton).click();
  cy.get(selectors.operationSelect).select(operationName);
};

const getResult = () => cy.get(selectors.result);

module.exports = {
  calculate,
  getResult,
};
