# 2. Atuação do Product Owner

## 2.1 Papel exercido
Atuei como representante/líder do Grupo 2, assumindo responsabilidades próximas às de Product Owner (PO) e apoiando a organização do trabalho em equipe. Meu foco foi manter o grupo orientado ao objetivo do produto, ajudar a transformar a proposta em entregas compreensíveis e acompanhar a evolução das partes do sistema.

O papel de PO no contexto do projeto foi principalmente de organização, priorização, alinhamento e acompanhamento. Isso não significa que eu tenha desenvolvido individualmente todos os módulos.

## 2.2 Responsabilidades desempenhadas
- manter a visão geral do Biblioteca Fácil e do problema que o sistema pretende atender;
- organizar e distribuir frentes de trabalho entre os integrantes;
- orientar os colegas sobre o que precisava ser pesquisado ou implementado, preservando a responsabilidade de cada pessoa pela própria tarefa;
- acompanhar o andamento das atividades e identificar bloqueios;
- incentivar a participação de todos na documentação e na preparação da entrega;
- acompanhar a integração das alterações no repositório GitHub;
- ajudar a manter o frontend e o backend alinhados;
- apoiar a preparação da demonstração e da apresentação final.

## 2.3 Organização da equipe
O grupo foi composto por **cinco integrantes**.

| Frente / responsabilidade | Registro |
|---|---|
| Coordenação e acompanhamento do produto | Representante/líder do grupo — atuação de PO |
| Frontend e UI/UX | Laura, conforme divisão informada pelo grupo |
| Testes | Responsabilidade atribuída a outro integrante; inserir o nome confirmado |
| Backend | Integrante(s) responsável(is): preencher com a divisão confirmada |
| Demais atividades e documentação | Participação compartilhada entre os cinco integrantes |

> Complete os nomes e eventuais mudanças de responsabilidade conforme a divisão final aprovada pelo grupo. Não atribua uma atividade a alguém sem confirmar.

## 2.4 Forma de acompanhamento
O acompanhamento foi feito por meio de:
- divisão das tarefas por área do sistema;
- orientações e alinhamentos durante o desenvolvimento;
- verificação do estado dos arquivos e funcionalidades;
- uso de branches para separar trabalho e integração;
- revisão do que seria incorporado à branch `develop`;
- conferência da compilação do frontend após alterações relevantes.

Não há no ZIP evidência de atas formais, datas de reuniões, velocidade de sprint ou métricas de produtividade. Se esses registros existirem em outro documento, podem ser anexados como evidência.

## 2.5 Gestão do trabalho e integração
O repositório apresenta uma branch `develop` como linha de integração. Para integrar o dashboard e o layout final, foi utilizada uma branch específica `feature/integracao-dashboard`, criada a partir da `develop`. As alterações visuais foram transportadas seletivamente para essa branch, evitando misturar históricos divergentes e preservando a estrutura do backend.

O conjunto integrado incluiu:
- `frontend/src/app/app.css`;
- `frontend/src/app/app.html`;
- `frontend/src/app/app.routes.ts`;
- os três arquivos do componente `inicio`.

O commit registrado durante essa integração foi `390a54c` (`feat: integra dashboard e layout do frontend`). A integração foi realizada por Pull Request na `develop`, conforme informado pelo responsável do grupo.

## 2.6 Competências demonstradas
- organização e priorização;
- comunicação e alinhamento;
- acompanhamento de entregas;
- visão do produto;
- gestão de mudanças;
- colaboração e resolução de problemas;
- atenção à qualidade da entrega e à integração entre componentes.

## 2.7 Reflexão sobre o papel
A principal contribuição do PO foi ajudar a equipe a manter uma direção comum, acompanhar as entregas e reduzir o risco de cada parte evoluir isoladamente. Um aprendizado importante foi que integrar o trabalho exige planejamento de branches, conferência de compatibilidade e validação do sistema após as alterações.
