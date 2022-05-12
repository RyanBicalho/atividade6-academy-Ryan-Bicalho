import {listaDeUsuario} from "../pages/listaDeUsuario.po"
 Given ("que acessei o site", () => {
    
    listaDeUsuario.visita()
 })
 
 Then ("o site apresenta uma lista de todos usuários cadastrados", () => {
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/ed852b34-5e79-4995-9e37-704d61784187",{
        statusCode: 200,
        fixture: "example.json"
    }) 
 })