Feature: Deletar usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

Scenario: Remover usuario com sucesso
    Given que entrei o site
    When clico no ícone da lixeia
    And aparece uma mensagem de confirmação e clico em confirmar
    Then o sistema deverá aprsentar uma mensagem de aviso
    | mensagemDeSistema | Usuário removido! |

    