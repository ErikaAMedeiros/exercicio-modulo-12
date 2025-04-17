import produtosPage from "../support/page_objects/produtos.page";

Cypress.Commands.add("login", (usuario, senha) => {
  cy.get("#username").type(usuario);
  cy.get("#password").type(senha, { log: false });
  cy.get(".woocommerce-form > .button").click();
});

Cypress.Commands.add("selecionarProduto1", () => {
  cy.fixture("produtos").then((dados) => {
    produtosPage.visitarProduto(dados[0].nomeProduto);
    produtosPage.addProdutoCarrinho(
      dados[0].tamanho,
      dados[0].cor,
      dados[0].quantidade
    );
  });
});

Cypress.Commands.add("selecionarProduto2", () => {
  cy.fixture("produtos").then((dados) => {
    produtosPage.visitarProduto(dados[1].nomeProduto);
    produtosPage.addProdutoCarrinho(
      dados[1].tamanho,
      dados[1].cor,
      dados[1].quantidade
    );
  });
});

Cypress.Commands.add("selecionarProduto3", () => {
  cy.fixture("produtos").then((dados) => {
    produtosPage.visitarProduto(dados[2].nomeProduto);
    produtosPage.addProdutoCarrinho(
      dados[2].tamanho,
      dados[2].cor,
      dados[2].quantidade
    );
  });
});

Cypress.Commands.add("selecionarProduto4", () => {
  cy.fixture("produtos").then((dados) => {
    produtosPage.visitarProduto(dados[3].nomeProduto);
    produtosPage.addProdutoCarrinho(
      dados[3].tamanho,
      dados[3].cor,
      dados[3].quantidade
    );
  });
});

Cypress.Commands.add(
  "detalhesCheckout",
  (nome, sobrenome, endereco, cidade, cep, telefone, email, type) => {
    cy.get("#billing_first_name").clear().type(nome);
    cy.get("#billing_last_name").clear().type(sobrenome);
    cy.get("#select2-billing_country-container").click().type("Brasil{enter}");
    cy.get("#billing_address_1").clear().type(endereco);
    cy.get("#billing_city").clear().type(cidade);
    cy.get("#select2-billing_state-container")
      .click()
      .type("Rio Grande do Sul{enter}");
    cy.get("#billing_postcode").clear().type(cep);
    cy.get("#billing_phone").clear().type(telefone);
    cy.get("#billing_email").clear().type(email);
    cy.get(`#payment_method_${type}`).click();
  }
);
