# 6. Roteiro de fala — Product Owner

> Roteiro em primeira pessoa. Ajuste os trechos entre colchetes com informações que só o grupo pode confirmar. A fala está organizada para acompanhar os tópicos da entrega, não para substituir os slides do professor.

## 1. Abertura e apresentação do papel
“Boa tarde. Eu vou apresentar o Biblioteca Fácil e explicar principalmente a minha atuação como representante do grupo e responsável por acompanhar o produto, exercendo um papel próximo ao de Product Owner.

Nosso grupo foi formado por cinco integrantes. Minha responsabilidade foi ajudar a manter a equipe organizada, alinhar as atividades ao objetivo do projeto e acompanhar as entregas até a integração.”

## 2. Problema e objetivo
“O Biblioteca Fácil surgiu da proposta de organizar as principais rotinas de uma biblioteca em um sistema. A ideia é reunir informações de livros, usuários, empréstimos e devoluções, facilitando a consulta do acervo e o acompanhamento das movimentações.

Nosso objetivo foi construir uma aplicação web que desse suporte a essas atividades e apresentasse uma visão resumida da situação da biblioteca.”

## 3. Público e proposta de valor
“O público principal considerado é a pessoa responsável pela biblioteca, como um bibliotecário ou atendente. Essa pessoa precisa localizar livros e usuários, acompanhar empréstimos e saber quais movimentações estão pendentes.

A proposta de valor é centralizar essas informações e tornar a rotina de gerenciamento mais organizada.”

## 4. Minha atuação como PO
“Como PO e representante do grupo, procurei manter uma visão geral do que precisava ser entregue. Ajudei a dividir o trabalho por áreas, orientar os integrantes sobre suas responsabilidades, acompanhar o andamento e identificar pontos que precisavam de alinhamento.

Também incentivei que a documentação fosse construída com a participação do grupo, porque ela precisava representar o trabalho coletivo, e não apenas o código.”

## 5. Organização do grupo
“Trabalhamos com cinco integrantes e frentes de desenvolvimento diferentes. A Laura ficou responsável pela parte de frontend e UI/UX, e a área de testes também foi atribuída a um integrante. As demais responsabilidades foram distribuídas entre os membros conforme os módulos e necessidades do projeto.

Durante o desenvolvimento, meu papel foi acompanhar essas frentes e ajudar a manter a comunicação entre elas. [Aqui posso citar uma situação real de alinhamento que aconteceu com a equipe.]”

## 6. Solução e funcionalidades
“No frontend, desenvolvido com Angular, organizamos o sistema em áreas de início, livros, usuários, empréstimos, devoluções e autenticação. A tela inicial apresenta indicadores e um resumo das informações disponíveis.

No backend, utilizamos NestJS e organizamos a API em módulos de livros, usuários e empréstimos. O backend utiliza Mongoose para trabalhar com MongoDB e possui validações para os dados recebidos.”

## 7. Decisões técnicas e transparência sobre o estágio
“Uma decisão importante foi separar frontend e backend, permitindo que as partes fossem desenvolvidas por frentes diferentes. Também utilizamos dados mock no frontend para desenvolver e demonstrar as telas enquanto a integração com a API não estava concluída.

É importante esclarecer que, no estado atual do repositório, o backend já possui módulos e endpoints estruturados, mas o frontend ainda está configurado para utilizar mocks. Portanto, a integração ponta a ponta com a API é uma evolução pendente, e não vou apresentar essa etapa como concluída.”

## 8. Integração e gestão de mudanças
“Uma etapa importante foi integrar o dashboard e o layout à branch principal de desenvolvimento. Como havia diferenças entre o histórico das branches, optamos por criar uma branch de integração a partir da develop e levar somente os arquivos necessários do frontend.

Depois conferimos as rotas, compilamos o Angular e fizemos o commit e o Pull Request. Essa experiência reforçou a importância de integrar com cuidado e validar o resultado antes de incorporar as mudanças.”

## 9. Desafios e aprendizados
“Um dos principais desafios foi manter as partes do projeto alinhadas, porque frontend e backend evoluíram em frentes diferentes. Também foi necessário cuidar da integração no Git para não sobrescrever o trabalho que já estava na develop.

Como aprendizado, entendi que o papel de PO não é apenas distribuir tarefas. É manter o objetivo claro, facilitar a comunicação, acompanhar o progresso e ajudar a equipe a tomar decisões que aproximem o produto da entrega.”

## 10. Próximos passos e encerramento
“Como próximos passos, identificamos a necessidade de conectar o Angular aos endpoints da API, implementar uma autenticação real, ampliar os testes e validar o fluxo completo com dados persistidos.

Concluímos uma base importante do Biblioteca Fácil e também identificamos com clareza o que já está implementado e o que precisa evoluir. Obrigado.”

## Dicas para a apresentação
- Não diga que a integração Angular–NestJS está pronta enquanto os serviços do frontend estiverem usando mocks.
- Não diga que houve entrevistas com bibliotecários se elas não aconteceram.
- Cite nomes e responsabilidades somente após confirmar com o grupo.
- Ao mostrar o dashboard, explique que os indicadores são calculados com os dados mock atuais.
- Na demonstração, percorra: Início → Livros → Usuários → Empréstimos → Devoluções.
- Se perguntarem sobre o banco, explique que a API NestJS está preparada para MongoDB via Mongoose e `MONGODB_URI`, mas que isso não significa que as telas Angular já persistam os dados no banco.
