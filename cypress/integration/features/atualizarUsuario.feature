Feature: Atualizar usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

Scenario: Atualizar usuário com sucesso
    Given que acessei o site
    When clico em Ver Detalhes, de qualquer usuário
    And clico no botão Editar
    And limpo os campos Nome e Email
    And preencho os campos Nome e E-mai
    | nome  | Pao Com Salame         |
    | email | paocomsalame@pao.com |
    And clico no botão Salvar
    Then o sistema deverá apresentar uma mensagem de aviso
    | mensagemSistema | Informações atualizadas com sucesso |

  Scenario: Atualizar usuário com formato de email inválido
      Given que acessei o site
      When clico em Ver Detalhes, de qualquer usuário
      And clico no botão Editar
      And limpo os campos Nome e Email
      And preencho os campos Nome e E-mai sem o @
      | nome  | Pao Com Salame         |
      | email | amemdoim.com           |
      And clico no botão Salvar
      Then o sistema deverá apresentar uma mensagem de aviso
      | mensagemSistema | Formato de e-mail inválido |

  Scenario: Atualizar usuário com email já existente
      Given que acessei o site
      When clico em Ver Detalhes, de qualquer usuário
      And clico no botão Editar
      And limpo os campos Nome e Email
      And preencho os campos Nome e E-mai já em uso
      | nome  | Pao Com Salame         |
      | email | amem@doim.com          |
      And clico no botão Salvar
      Then o sistema deverá apresentar uma mensagem de aviso
      | mensagemSistema | Este e-mail já é utilizado por outro usuário. |

  Scenario: Atualizar usuário com mais de 100 caracteres no Nome
      Given que acessei o site
      When clico em Ver Detalhes, de qualquer usuário
      And clico no botão Editar
      And limpo os campos Nome e Email
      And preencho os campos Nome e E-mai
      | nome  | PaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSalPaodeSal         |
      | email | paocomsalame@email.com |
      And clico no botão Salvar
      Then o sistema deverá apresentar uma mensagem de aviso
      | mensagemSistema | Informe no máximo 100 caracteres para o nome |
    
  Scenario: Atualizar usuário com mais de 60 caracteres no E-mail
      Given que acessei o site
      When clico em Ver Detalhes, de qualquer usuário
      And clico no botão Editar
      And limpo os campos Nome e Email
      And preencho os campos Nome e E-mai
      | nome  | Pao Doce        |
      | email | paoehmuitobompaoehmuitobompaoehmuitobompaoehmuitobompaoehmuitobom@pao.com |
      And clico no botão Salvar
      Then o sistema deverá apresentar uma mensagem de aviso
      | mensagemSistema | Informe no máximo 60 caracteres para o e-mail |




    