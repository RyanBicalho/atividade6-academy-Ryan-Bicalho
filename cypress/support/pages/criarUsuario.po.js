import { should } from "chai";

class Usuario{
    acesso() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users")
    
    }
    novo() {
        cy.contains("a", "Novo").click();
    }
    preencher(nome, email) {
        cy.get("input.sc-hAZoDl#name").type(nome);
        cy.get("input.sc-hAZoDl#email").type(email);
    }
    salvar() {
        cy.get("button.sc-kDDrLX").click();
    }
    mensagem(mensagemDoSistema) {
        cy.contains(mensagemDoSistema).should("be.visible");
    }
    acesso() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users")
    
    }
}
export var criarUsuario = new Usuario();