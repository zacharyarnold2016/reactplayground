describe("Search Redirects", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("eq", "http://localhost:3000/search");
    cy.get("input").type("star");
    cy.get(".--submit").click();
    cy.url().should("eq", "http://localhost:3000/search/star?genre=All");
    cy.get(".film:first").click();
    cy.url().should(
      "eq",
      "http://localhost:3000/search/star?sortBy=null&searchQuery=null&movieId=181808"
    );
    cy.get(".switchDetails").click();
    cy.url().should("eq", "http://localhost:3000/search/star");
  });
});
