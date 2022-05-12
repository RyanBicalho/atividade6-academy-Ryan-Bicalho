
import {deletarUsuario} from "../pages/deletarUsuario.po"

Given ("que entrei o site", () => {
    cy.intercept("DELETE","https://crud-api-academy.herokuapp.com/api/v1/users/ed852b34-5e79-4995-9e37-704d61784187", {
        statusCode: 204,
    })
    cy.intercept({
        method: "GET",
        url: "https://crud-api-academy.herokuapp.com/api/v1/users"
    }, {
        statusCode: 200,
        fixture: "usuario.json"
    });
    deletarUsuario.acesso();

})

When ("clico no ícone da lixeia", () => {
    deletarUsuario.clico();
})

When ("aparece uma mensagem de confirmação e clico em confirmar", () => {
    deletarUsuario.clicar();
    
})

Then ("o sistema deverá aprsentar uma mensagem de aviso", (tabela) => {
    var campo = tabela.rowsHash();
    deletarUsuario.mensagem(campo.mensagemDeSistema);
})