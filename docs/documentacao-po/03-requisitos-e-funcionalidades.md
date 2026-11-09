# 3. Requisitos e funcionalidades

## 3.1 Requisitos funcionais identificados
Os requisitos abaixo foram inferidos a partir das áreas, componentes, serviços e endpoints presentes no repositório `develop`.

| ID | Requisito funcional | Evidência no projeto |
|---|---|---|
| RF01 | Consultar livros cadastrados | Área Livros; `LivrosMockService.listar()`; `GET /livros` |
| RF02 | Cadastrar, editar e excluir livros | Formulário e serviço mock; `POST`, `PUT` e `DELETE /livros` |
| RF03 | Consultar usuários | Área Usuários; `UsuariosMockService.listar()`; `GET /usuarios` |
| RF04 | Cadastrar, editar e excluir usuários | Formulário e serviço mock; `POST`, `PUT` e `DELETE /usuarios` |
| RF05 | Registrar e consultar empréstimos | Área Empréstimos; controller com `POST /emprestimos`, `GET /emprestimos` e `GET /emprestimos/:id` |
| RF06 | Registrar devolução de empréstimo | Backend possui `PATCH /emprestimos/:id/devolver`; frontend possui área de Devoluções com dados mock |
| RF07 | Exibir resumo da biblioteca | Componente `Inicio` consome serviços e mocks para calcular indicadores |
| RF08 | Apresentar telas de login e cadastro | Área Auth e `AuthMockService` |

## 3.2 Requisitos não funcionais — observáveis ou recomendados
- **RNF01 — Organização:** separar o frontend por funcionalidades e o backend por módulos.
- **RNF02 — Validação:** backend utiliza `ValidationPipe`, `class-validator` e DTOs.
- **RNF03 — Manutenibilidade:** uso de TypeScript, componentes standalone e módulos NestJS.
- **RNF04 — Persistência:** backend configura conexão Mongoose a partir da variável `MONGODB_URI`.
- **RNF05 — Segurança:** a autenticação mock do frontend não deve ser tratada como mecanismo seguro de produção. É necessária autenticação real antes de uso com dados sensíveis.

## 3.3 Regras de negócio implementadas no backend
### Livros
- cadastro exige título, autor, ISBN, editora, ano, categoria, quantidade total e quantidade disponível;
- campos numéricos possuem limites mínimos e validações;
- ISBN é definido como único no schema.

### Usuários
- nome deve ter entre 3 e 100 caracteres;
- e-mail deve ser válido e único;
- perfil é obrigatório.

### Empréstimos
- empréstimo exige identificadores de usuário e livro válidos e uma data prevista de devolução;
- usuário precisa existir;
- data prevista deve ser futura;
- o empréstimo só é criado se houver exemplar disponível;
- ao criar empréstimo, a quantidade disponível do livro é reduzida;
- ao devolver, o status passa para `DEVOLVIDO` e a quantidade disponível é incrementada;
- tentativas de finalizar um empréstimo já finalizado geram conflito.

## 3.4 Requisitos de interface observados
A navegação do frontend possui rotas para:
- `/inicio`;
- `/livros`;
- `/usuarios`;
- `/emprestimos`;
- `/devolucoes`;
- rotas de autenticação definidas em `AUTH_ROUTES`.

A rota vazia redireciona para `/inicio`, e caminhos não reconhecidos também redirecionam para a tela inicial.

## 3.5 Limitação importante para apresentar com precisão
O `app.config.ts` do Angular registra `LivrosMockService` e `UsuariosMockService`. Empréstimos e devoluções utilizam classes mock próprias. O `AuthMockService` mantém contas em memória. Portanto, o repositório mostra frontend em modo simulado, enquanto o backend possui módulos com integração Mongoose configurada. Não há evidência no código analisado de que as telas Angular estejam consumindo os endpoints NestJS. Apresente a integração frontend-backend como etapa pendente, se ela ainda não foi concluída em outro commit.
