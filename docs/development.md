# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário faça login | Paulo |  - 
|RF-002| A aplicação deve permitir que o usuário faça seu cadastro | Paulo |  - 
|RF-003| A aplicação deve permitir que o usuário gerencie suas informações (Perfil)   | Pedro | perfil.html
|RF-004| A aplicação deve permitir que o usuário visualize as informações do site (sobre nós) | Pedro | sobre-nos.html
|RF-005| A aplicação deve permitir que o usuário cadastre seus medicamentos e horários | Gabriel | -
|RF-006| A aplicação deve permitir que o usuário visualize seus medicamentos cadastrados | Gabriel | -
|RF-007| A aplicação deve permitir o usuário acessar dicas sobre segurança para o usuário | Lucas | dicas-segurança.html
|RF-008| A aplicação deve permitir o usuário acessar tutoriais sobre ferramentas de tecnologia | Yasmin | tutoriais.html
|RF-009| A aplicação deve permitir o usuário avaliar a dica, suporte, tutorial para relevância da informação | Lucas e Yasmin | conteudo-dicas.html e conteudo-tutoriais.html
|RF-010| A aplicação deve permitir que o usuário compartilhe o conteúdo do site | Lucas e Yasmin | conteudo-dicas.html e conteudo-tutoriais.html
|RF-011| A aplicação deve permitir que o usuário visualize as dicas do dia | Todos | index.html/dica-do-dia.html

## Descrição das estruturas:

## Home
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| E-mail         | String            | E-mail do usuário para login              | usuario@gmail.com                              |
| Dicas do dia   | Texto             | Dica de segurança                         | Como previnir golpes que utilizam o pix                      


## Cadastro de medicamentos
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| nome         | String            | nome do medicamento              | remedioX                          |
| quantidade   | String             | quantidade do medicamento, pode ser em numeros (capsulas) ou em ml      | 2     |              
| horario         | Time           | Horarios dos medicamentos             | 10:00hrs                           |
| descrição      | String           | Campo para observações do medicamento  | Lembre-se de manter o remedio na geladeira |


## Cadastro de usuários
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| nome completo         | String            | nome do usuárop              | Alberto Silva                          |
| e-mail   | String             | e-mail do usuário     | alberto@gmail.com    |              
| senha         | String           | senha para acessar a plataforma           | @123alberto                          |

