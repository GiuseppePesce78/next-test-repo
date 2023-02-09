describe("test on the functioning of the estimator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/preventivatore")
  })

  it("test on slide position preventivatore", function () {
    cy.getByData("test").invoke("val", "30").trigger("change", { force: true })
    cy.getByData("slide30").should("exist")
  })
  it("test on slide position preventivatore", function () {
    cy.getByData("test").invoke("val", "50").trigger("change", { force: true })

    cy.getByData("slide50").should("exist")
  })
  it("test on slide position preventivatore", function () {
    cy.getByData("test").invoke("val", "70").trigger("change", { force: true })

    cy.getByData("slide70").should("exist")
  })
  it("test on slide position preventivatore", function () {
    cy.getByData("test").invoke("val", "90").trigger("change", { force: true })

    cy.getByData("slide90").should("exist")
  })
})
