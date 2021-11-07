/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import "cypress-localstorage-commands";
describe("☘️ User can see data in dashboard", () => {
  beforeEach(() => {
    cy.setLocalStorage("token", "agent");
    cy.saveLocalStorage();
  });

  it("User visit dashboard", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("User see table", () => {
    cy.get('[data-testid="logos"]').should("exist");
  });
});
