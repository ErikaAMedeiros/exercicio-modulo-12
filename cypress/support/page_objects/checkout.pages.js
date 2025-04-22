class checkoutPage {

    acessarCarrinho() {
        cy.get("#cart").click();
        cy.get(".checkout").eq(1).click();
        cy.get(".page-title").should("exist");
      }
    
      concluirCompra() {
        cy.get("#terms").click();
        cy.get("#place_order").click();
        cy.get(".page-title").should("exist");
      }
}

export default new checkoutPage();