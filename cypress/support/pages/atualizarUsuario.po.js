class atualizar {
    visitar () {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users")
    
    }
    
    verDetalhes () {

        cy.contains("a", "Ver detalhes").click()

    }
    
    editar(){
        cy.contains("button", "Editar").click()
    }
    
    limpar() {
        cy.get("#userName").clear();
        cy.get("#userEmail").clear();
    }
    
    
    preencher(nome, email) {
        cy.get("#userName").type(nome);
        cy.get("#userEmail").type(email);
    }
    
    salvar(){
        cy.contains("button", "Salvar").click()
    }

    mensagem(mensagemSistema) {
        cy.contains(mensagemSistema).should("be.visible");
    }


}
export var atualizarUsuario = new atualizar();