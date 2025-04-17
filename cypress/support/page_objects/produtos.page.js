class produtosPage {

    visitarUrl(){
        cy.visit('minha-conta')
    }

    visitarProduto(nomeProduto){
        cy.visit(`product/${nomeProduto}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    addProdutos(){
        cy.selecionarProduto1 ()
        cy.get('.product_title').should('exist')
        cy.selecionarProduto2 ()
        cy.get('.product_title').should('exist')
        cy.selecionarProduto3 ()
        cy.get('.product_title').should('exist')
        cy.selecionarProduto4 ()
        cy.get('.product_title').should('exist')
    }

    acessarCarrinho(){
        cy.get('#cart').click()
        cy.get('.checkout').eq(1).click()
        cy.get('.page-title').should('exist')
    }

    concluirCompra(){
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should('exist')
    }
}

export default new produtosPage()