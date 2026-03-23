/// <reference types="cypress"/>

context("Home", () => {
  beforeEach(() => {
    cy.visit("")
  })

  it("shows site branding and layout", () => {
    cy.get("header a").contains("Typst Editor")
    cy.get("main").should("be.visible")
    cy.get("footer").contains("Typst Editor")
  })

  it("lists hero and features from config", () => {
    cy.get("[data-cy=landing-default-hero] h1").contains("Typst Editor")
    cy.get("[data-cy=landing-default-features]").contains("Live Typst editing")
  })

  it("nav includes Privacy", () => {
    cy.get("[data-cy=navbar-menu] a").contains("Privacy")
  })
})

export {}
