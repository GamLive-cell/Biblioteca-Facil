# 7. Perguntas prováveis da banca

## Qual problema o Biblioteca Fácil pretende resolver?
Organizar em uma aplicação as informações e rotinas básicas de uma biblioteca: acervo, usuários, empréstimos e devoluções.

## Quem é o usuário principal?
A pessoa responsável pela biblioteca, como um bibliotecário ou atendente. Leitores também são usuários relacionados ao processo de empréstimo.

## Qual foi sua função como PO?
Acompanhar a visão do produto, apoiar a divisão e priorização das tarefas, alinhar as frentes de trabalho, acompanhar entregas e ajudar na integração e preparação da apresentação.

## Como o grupo foi organizado?
O grupo tem cinco integrantes e dividiu responsabilidades por frentes. Atribuições individuais devem ser explicadas conforme a divisão confirmada pelo próprio grupo.

## Por que usar Angular?
No projeto, Angular foi utilizado para organizar a interface em componentes e funcionalidades com navegação por rotas. Isso favorece a separação das telas e a manutenção do frontend.

## Por que NestJS?
O backend foi estruturado com módulos, controllers e services, separando o recebimento das requisições das regras de negócio e do acesso aos dados.

## Qual banco de dados foi escolhido?
MongoDB, acessado pelo backend por meio do Mongoose. A conexão é configurada com a variável de ambiente `MONGODB_URI`.

## O frontend já está integrado ao backend?
No estado do ZIP analisado, não há evidência dessa integração ponta a ponta. O Angular ainda registra serviços mock para livros e usuários e usa mocks para empréstimos, devoluções e autenticação. O backend já tem endpoints e módulos para livros, usuários e empréstimos. Conectar essas partes é um próximo passo.

## Os dados ficam salvos?
Os dados dos mocks do frontend são mantidos em memória durante a execução e não representam persistência real no banco. O backend possui schemas e configuração Mongoose para persistência quando a conexão MongoDB estiver configurada e a API estiver em execução.

## Como funciona a devolução?
No backend, a devolução é uma ação do empréstimo: `PATCH /emprestimos/:id/devolver`. O serviço altera o status para devolvido e incrementa a quantidade disponível do livro. A tela de devoluções do frontend, no estado atual, usa dados mock.

## Como o sistema evita empréstimos sem exemplares?
O serviço backend tenta atualizar o livro somente quando `quantidadeDisponivel` é maior que zero. Se não houver exemplar disponível, retorna conflito. Ao criar empréstimo, reduz a quantidade; ao devolver, incrementa.

## O que você faria diferente ou melhoraria?
Planejaria desde o início contratos de dados compartilhados entre frontend e backend, critérios de aceite por funcionalidade e uma etapa de integração contínua. Também priorizaria autenticação real, testes de ponta a ponta e validação com usuários.

## Qual foi o maior aprendizado como PO?
Que coordenar o trabalho envolve mais do que distribuir tarefas: é necessário manter a visão do produto, facilitar a comunicação, acompanhar dependências e garantir que as entregas individuais formem uma solução coerente.
