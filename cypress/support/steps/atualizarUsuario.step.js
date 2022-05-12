

import {atualizarUsuario} from "../pages/atualizarUsuario.po"

Given ("que acessei o site", () => {
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/ed852b34-5e79-4995-9e37-704d61784187",{
        statusCode: 200,
        fixture: "example.json"
    })
    cy.intercept({
        method: "GET",
        url: "https://crud-api-academy.herokuapp.com/api/v1/users"
    }, {
        statusCode: 200,
        fixture: "usuario.json"
    });
    atualizarUsuario.visitar()
})

When ("clico em Ver Detalhes, de qualquer usuário", () => {
     atualizarUsuario.verDetalhes()
})

When ("clico no botão Editar", () => {
    atualizarUsuario.editar()
})

When ("limpo os campos Nome e Email", () => {
    atualizarUsuario.limpar()
})


When ("preencho os campos Nome e E-mai", (tabela) => {
    var campo = tabela.rowsHash();
    atualizarUsuario.preencher(campo.nome, campo.email);
})

When ("clico no botão Salvar", () => {
    atualizarUsuario.salvar();
    
})

Then ("o sistema deverá apresentar uma mensagem de aviso", (tabela) => {
    var campo = tabela.rowsHash();
    atualizarUsuario.mensagem(campo.mensagemSistema);
    })

When ("preencho os campos Nome e E-mai sem o @", (tabela) => {
    var campo = tabela.rowsHash();
    atualizarUsuario.preencher(campo.nome, campo.email);
})

Then ("o sistema deverá apresentar uma mensagem de aviso", (tabela) => {
    var campo = tabela.rowsHash();
    atualizarUsuario.mensagem(campo.mensagemSistema);
})

When ("preencho os campos Nome e E-mai já em uso", (tabela) => {
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/ed852b34-5e79-4995-9e37-704d61784187",{
        statusCode: 422,
        fixture: "example.json"
    })
    var campo = tabela.rowsHash();
    atualizarUsuario.preencher(campo.nome, campo.email);
})

Then ("o sistema deverá apresentar uma mensagem de aviso", (tabela) => {
    var campo = tabela.rowsHash();
    atualizarUsuario.mensagem(campo.mensagemSistema);
})

