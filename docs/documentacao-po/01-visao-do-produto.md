# 1. Visão do produto — Biblioteca Fácil

## 1.1 Identificação
- **Projeto:** Biblioteca Fácil
- **Contexto:** Projeto Integrador do curso de desenvolvimento Full Stack do SENAI.
- **Grupo:** Grupo 2 — tema Biblioteca.
- **Público principal:** pessoas responsáveis pela organização de uma biblioteca, como bibliotecários ou atendentes.
- **Público relacionado:** usuários/leitores que possuem cadastro e realizam empréstimos.

## 1.2 Problema que o produto busca resolver
O projeto parte da necessidade de organizar informações e rotinas de uma biblioteca em um único sistema. Sem um controle centralizado, tarefas como consultar o acervo, manter dados de usuários e acompanhar empréstimos e devoluções podem ficar dispersas, dificultando a visualização da disponibilidade dos livros e o acompanhamento dos prazos.

Esta é a formulação do problema adotada para apresentar o propósito do produto. Caso o grupo tenha realizado entrevistas ou observado uma biblioteca específica, acrescentar aqui as evidências reais dessa investigação.

## 1.3 Objetivo
Desenvolver uma aplicação web que apoie o gerenciamento de:
- livros e exemplares do acervo;
- usuários/leitores;
- empréstimos;
- devoluções;
- indicadores resumidos na tela inicial.

O objetivo é tornar essas informações mais organizadas e facilitar o acompanhamento das operações básicas da biblioteca.

## 1.4 Persona de referência para o MVP
**Persona de trabalho (hipótese de projeto, não entrevista documentada):**
- **Nome fictício:** Marina, bibliotecária.
- **Necessidade:** localizar rapidamente livros e usuários, registrar movimentações e acompanhar empréstimos pendentes.
- **Dificuldade:** manter dados do acervo e das movimentações organizados quando são controlados em registros separados.
- **Resultado esperado:** consultar informações e acompanhar a rotina da biblioteca em uma aplicação.

A persona acima é uma ferramenta de comunicação do escopo. Não deve ser apresentada como uma pessoa entrevistada ou como resultado de pesquisa de campo sem evidência adicional.

## 1.5 Escopo funcional observado
No frontend Angular da branch `develop`, existem áreas para:
1. **Início/Dashboard:** apresenta indicadores e resumo de dados.
2. **Livros:** listagem, formulário, cards e serviço mock para operações locais.
3. **Usuários:** listagem, formulário, cards e serviço mock.
4. **Empréstimos:** listagem, formulário e dados mock.
5. **Devoluções:** listagem, formulário e dados mock.
6. **Autenticação:** telas de login e cadastro apoiadas por serviço mock.

No backend NestJS existem módulos para livros, usuários e empréstimos, com controllers, services, DTOs e schemas Mongoose. Não foi identificado módulo de devoluções separado no backend.

## 1.6 Escopo do MVP e fora do escopo comprovado
**Incluído no estado atual do repositório:**
- interface web Angular com navegação entre as áreas;
- operações locais simuladas no frontend para livros, usuários, empréstimos e devoluções;
- backend NestJS com endpoints e persistência planejada/configurada via MongoDB para livros, usuários e empréstimos;
- validação de dados recebidos pelo backend.

**Não afirmar como concluído sem validação adicional:**
- integração efetiva do frontend Angular com a API NestJS;
- autenticação segura com usuários persistidos e controle de sessão;
- persistência real das movimentações feitas nas telas mock;
- módulo de devoluções completo no backend;
- implantação em produção, testes com usuários reais ou métricas de impacto.

## 1.7 Critério de sucesso do projeto
Para a entrega acadêmica, o sucesso pode ser apresentado como a construção de uma base funcional e demonstrável para as principais rotinas de biblioteca, com frontend organizado, módulos backend estruturados e documentação das limitações que ainda precisam ser integradas e validadas.
