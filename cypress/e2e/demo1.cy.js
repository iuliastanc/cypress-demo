describe('Calculate test suite', () => {
  beforeEach(() => {
    cy.visit('/calculate/appApi.html');
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
});
