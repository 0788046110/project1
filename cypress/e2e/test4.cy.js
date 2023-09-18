/// <reference types= "cypress" />
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get(".submit-button.btn_action").click();
});
Cypress.Commands.add("add_to_cart", (num_of_item) => {
  for (let index = 0; index < num_of_item; index++) {
    cy.get(".btn").eq(index).click();
 
  }
});
// Cypress.Commands.add2("add randomly", (num_of_item2) => {});

describe("swag", () => {
  it("add all item in the cart", () => {
    cy.login("standard_user", "secret_sauce");
    cy.add_to_cart(3);
    
    cy.get(".shopping_cart_badge").invoke("text").should("contain", "3");
 
   

    cy.get('.shopping_cart_badge').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("hussein")
    cy.get('[data-test="lastName"]').type("halabi")
    cy.get('[data-test="postalCode"]').type(123)
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').invoke('text').should('contain',"Thank")
  });
});
