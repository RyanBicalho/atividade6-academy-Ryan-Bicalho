 Feature: Criar usuário
     Como uma pessoa qualquer
     Desejo registrar informações de usuário
     Para poder manipular estas informações livremente

Scenario: Criar usuário com sucesso
      Given dado que acessei o site
      When quando clico no botão Novo
      And preencho os campos Nome e E-mail corretamente
      | nome   | Pao de Queijo      |
      | email  | paodequeijo@pao.com |
      And clico em salvar
      Then o sistema deve apresentar uma mensagem de alerta
      | mensagemDoSistema | Usuário salvo com sucesso |

 Scenario: Criar usuário com formato de email inválido
      Given dado que acessei o site
      When quando clico no botão Novo
      And preencho os campos Nome e E-mail sem o @
      | nome   | Pao de Queijo      |
      | email  | paodequeijo.com    |
      And clico em salvar
      Then o sistema deve apresentar uma mensagem de alerta
      | mensagemDoSistema | Formato de e-mail inválido  |

 Scenario: Criar usuário com email já existente
      Given dado que acessei o site
      When quando clico no botão Novo
      And preencho os campos Nome e Email já existente
      | nome   | Pao Com Salame      |
      | email  | paodequeijo@pao.com |
      And clico em salvar
      Then o sistema deve apresentar uma mensagem de alerta
      | mensagemDoSistema | Este e-mail já é utilizado por outro usuário. |

 Scenario: Criar usuário com mais de 100 carecteres para nome
      Given dado que acessei o site
      When quando clico no botão Novo
      And preencho os campos Nome e Email, com mais de 100 caracteres no Nome
      | nome   | PaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijo     |
      | email  | paodequeijo@pao.com |
      And clico em salvar
      Then o sistema deve apresentar uma mensagem de alerta
      | mensagemDoSistema | Informe no máximo 100 caracteres para o nome |

 Scenario: Criar usuário com mais de 60 caracteres para de email
      Given dado que acessei o site
      When quando clico no botão Novo
      And preencho os campos Nome e Email, com mais de 60 caracteres no Email
      | nome   | Pao de Sal      |
      | email  | paodesalpaodesalpaodesalpaodesalpaodesalpaodesalpaodesal@email.com |
      And clico em salvar
      Then o sistema deve apresentar uma mensagem de alerta
      | mensagemDoSistema | Informe no máximo 60 caracteres para o e-mail |


    
     