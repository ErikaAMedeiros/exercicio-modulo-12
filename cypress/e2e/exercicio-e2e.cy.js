/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    produtosPage.visitarUrl();
    cy.fixture("perfil").then((login) => {
      cy.login(login.usuario, login.senha);
    });
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
    produtosPage.addProdutos();
    produtosPage.acessarCarrinho();
    cy.detalhesCheckout(
      "Érika",
      "Medeiros",
      "Rua Irmão Fernando",
      "Pelotas",
      "96040110",
      "53123456789",
      "aluno_ebac@teste.com",
      /*Transferência bancário == bacs
        Cheque == cheque
        Pagamento na entrega == cod */
      "cod"
    );
    produtosPage.concluirCompra();
  });
});
