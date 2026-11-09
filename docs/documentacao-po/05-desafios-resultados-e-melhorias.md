# 5. Desafios, resultados e melhorias

## 5.1 Desafios enfrentados durante o desenvolvimento
Com base no histórico de trabalho relatado pelo líder e no repositório:
- organizar o trabalho de cinco integrantes em frentes diferentes;
- manter alinhamento entre frontend Angular e backend NestJS;
- preservar o trabalho existente enquanto mudanças eram integradas;
- lidar com branches com históricos e estruturas diferentes;
- integrar dashboard e navegação sem sobrescrever o backend;
- verificar a compilação após a integração;
- manter documentação e apresentação alinhadas ao que realmente foi entregue.

## 5.2 Estratégia adotada na integração visual
Para integrar o dashboard à `develop`, foi criada uma branch de integração a partir da `develop`. Em vez de fazer merge direto de uma branch com histórico divergente, os arquivos necessários do frontend foram copiados seletivamente. Depois foram ajustadas as rotas, executado o build, conferidas as alterações e criado o commit `390a54c`. A branch foi enviada ao GitHub e integrada à `develop` por Pull Request, conforme informado pelo responsável.

Essa abordagem reduziu o risco de misturar alterações não relacionadas e preservou o diretório `backend/`.

## 5.3 Resultados observáveis no repositório
- frontend Angular organizado em áreas de livros, usuários, empréstimos, devoluções, autenticação e início;
- dashboard com indicadores calculados a partir dos dados locais disponíveis;
- backend NestJS com módulos de livros, usuários e empréstimos;
- DTOs e validações para dados recebidos;
- schemas Mongoose e configuração de conexão MongoDB;
- rotas REST para as operações implementadas no backend;
- integração do dashboard e do layout na branch `develop`.

## 5.4 Limitações atuais
- frontend ainda utiliza mocks em memória para os dados;
- não há evidência de consumo dos endpoints NestJS pelo Angular;
- autenticação é simulada e não oferece segurança adequada para produção;
- backend não apresenta módulo próprio de devoluções: a devolução está representada como ação sobre empréstimo;
- não há evidência no ZIP de implantação em produção ou de testes completos de aceitação com usuários reais;
- o README principal do repositório ainda está muito resumido e pode ser ampliado.

## 5.5 Próximas melhorias recomendadas
1. Conectar os serviços Angular aos endpoints NestJS com `HttpClient`.
2. Padronizar os modelos e contratos de dados entre frontend e backend.
3. Implementar autenticação real, autorização e proteção de rotas.
4. Criar tratamento consistente de erros, carregamento e mensagens de sucesso.
5. Validar regras de disponibilidade e devolução em testes automatizados e de ponta a ponta.
6. Revisar o fluxo de devoluções para refletir o endpoint `PATCH /emprestimos/:id/devolver`.
7. Completar README, instruções de ambiente e documentação da API.
8. Realizar testes de usabilidade com bibliotecários ou usuários representativos e registrar feedback.

## 5.6 Conclusão
O Biblioteca Fácil estabeleceu uma base de produto para organizar as operações essenciais de uma biblioteca. O trabalho resultou em uma interface com módulos principais e em uma API backend estruturada para livros, usuários e empréstimos. A próxima etapa de maior valor é concluir a integração entre as aplicações e validar o fluxo completo com persistência real, autenticação adequada e testes.
