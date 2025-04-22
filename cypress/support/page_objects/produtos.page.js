class produtosPage {
  visitarUrl() {
    cy.visit("minha-conta");
  }

  visitarProduto(nomeProduto) {
    cy.visit(`product/${nomeProduto}`);
  }

  addProdutoCarrinho(tamanho, cor, quantidade) {
    cy.get(".button-variable-item-" + tamanho).click();
    cy.get(".button-variable-item-" + cor).click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();
  }

  addProdutos() {
    cy.selecionarProduto1();
    cy.selecionarProduto2();
    cy.selecionarProduto3();
    cy.selecionarProduto4();
  }

}

export default new produtosPage();
