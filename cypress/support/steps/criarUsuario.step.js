
import {criarUsuario} from "../pages/criarUsuario.po"
Given ("dado que acessei o site", () => {
    criarUsuario.acesso();
})

When ("quando clico no botão Novo", () =>{
    criarUsuario.novo();
})
 
When ("preencho os campos Nome e E-mail corretamente", (tabela) => {
    var campo = tabela.rowsHash();
    criarUsuario.preencher(campo.nome, campo.email);
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users",{
            statusCode: 201,
            fixture: "example.json"
        })
})

When ("clico em salvar", () => {
    criarUsuario.salvar();
    })

Then ("o sistema deve apresentar uma mensagem de alerta", (tabela) => {
    var campo = tabela.rowsHash();
    criarUsuario.mensagem(campo.mensagemDoSistema);
})

When ("preencho os campos Nome e E-mail sem o @", (tabela) => {
    var campo = tabela.rowsHash();
    criarUsuario.preencher(campo.nome, campo.email);
})
When ("preencho os campos Nome e Email já existente", (tabela) => {
    var campo = tabela.rowsHash();
    criarUsuario.preencher(campo.nome, campo.email);
})

When ("preencho os campos Nome e Email, com mais de 60 caracteres no Email", (tabela) => {
    var campo = tabela.rowsHash();
    criarUsuario.preencher(campo.nome, campo.email);
})

When ("preencho os campos Nome e Email, com mais de 100 caracteres no Nome", (tabela) =>{
    var campo = tabela.rowsHash();
    criarUsuario.preencher(campo.nome, campo.email);
})

 

