
class deletar{
    acesso() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    
    }
    
    clico() {
        cy.get("button[data-test='userDataDelete'].sc-kgflAQ").click();
    }
    

    clicar() {
        cy.contains("button", "Confirmar").click();
    }

    mensagem(mensagemDeSistema) {
        cy.contains(mensagemDeSistema).should("be.visible");
    }

}
export var deletarUsuario = new deletar();