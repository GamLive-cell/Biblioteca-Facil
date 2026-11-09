# 4. Arquitetura e decisões técnicas

## 4.1 Visão geral
O repositório está organizado em duas aplicações:

```text
Biblioteca-Facil/
├── frontend/   # aplicação Angular
├── backend/    # API NestJS
└── README.md
```

## 4.2 Frontend
- **Framework:** Angular 21.
- **Linguagem:** TypeScript.
- **Organização:** componentes standalone separados por funcionalidade.
- **Navegação:** Angular Router.
- **Formulários:** componentes de formulário por área; verificar os validadores diretamente na demonstração.
- **Dados atuais:** serviços e classes mock em memória para livros, usuários, empréstimos, devoluções e autenticação.

O dashboard `Inicio` consulta os serviços de livros e usuários e o mock de empréstimos para calcular totais, estados e movimentações exibidas.

## 4.3 Backend
- **Framework:** NestJS 12.
- **Linguagem:** TypeScript.
- **Banco/ODM:** MongoDB com Mongoose.
- **Validação:** `ValidationPipe`, `class-validator` e DTOs.
- **Módulos:** livros, usuários e empréstimos.
- **Organização:** controllers recebem requisições HTTP; services concentram regras e acesso aos modelos; schemas definem documentos MongoDB.

## 4.4 Endpoints encontrados
### Livros
| Método | Rota | Finalidade |
|---|---|---|
| GET | `/livros` | listar livros |
| GET | `/livros/:id` | buscar livro |
| POST | `/livros` | criar livro |
| PUT | `/livros/:id` | atualizar livro |
| DELETE | `/livros/:id` | remover livro |

### Usuários
| Método | Rota | Finalidade |
|---|---|---|
| GET | `/usuarios` | listar usuários |
| GET | `/usuarios/:id` | buscar usuário |
| POST | `/usuarios` | criar usuário |
| PUT | `/usuarios/:id` | atualizar usuário |
| DELETE | `/usuarios/:id` | excluir usuário |

### Empréstimos
| Método | Rota | Finalidade |
|---|---|---|
| GET | `/emprestimos` | listar empréstimos |
| GET | `/emprestimos/:id` | buscar empréstimo |
| POST | `/emprestimos` | criar empréstimo |
| PATCH | `/emprestimos/:id/devolver` | registrar devolução |

## 4.5 Decisões técnicas observadas
1. **Separação frontend/backend:** permite desenvolver interface e API em aplicações independentes.
2. **Angular no frontend:** estrutura por componentes e rotas facilita organizar as áreas da biblioteca.
3. **NestJS no backend:** módulos, controllers e services organizam responsabilidades da API.
4. **MongoDB/Mongoose:** schemas representam livros, usuários e empréstimos; a conexão é configurada por `MONGODB_URI`.
5. **Mocks no frontend:** permitem desenvolver e demonstrar telas sem depender da API já integrada.
6. **Branches e Pull Requests:** separam desenvolvimento de integração e permitem revisar alterações antes de incorporá-las à `develop`.

## 4.6 Integração: estado que deve ser comunicado
O backend tem conexão Mongoose configurada via variável de ambiente `MONGODB_URI`. No frontend, entretanto, os providers atuais apontam para serviços mock para livros e usuários, e os módulos de empréstimos/devoluções também utilizam mocks. Assim, não se deve dizer que o frontend já está integrado ao banco ou à API sem uma prova adicional de execução ponta a ponta.

## 4.7 Configuração e execução — referência técnica
**Frontend:**
```bash
cd frontend
npm install
npm start
```

**Backend:**
```bash
cd backend
npm install
```
Configurar `MONGODB_URI` no ambiente antes de iniciar a API. Depois:
```bash
npm run start:dev
```

Não inserir credenciais reais no repositório. Utilizar arquivo `.env` local e manter esse arquivo fora do Git.
