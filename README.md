# LibrasJa-IoT
# LibrasJá IoT Monitor — Sprint 3

Projeto de inclusão digital que conecta pessoas surdas a intérpretes de Libras,
utilizando IoT, Oracle Database, Oracle APEX e Inteligência Artificial.

## Integrantes
- Ivanildo Alfredo da Silva Filho — RM560049
- Jennyfer Lee — RM561020
- Letícia Sousa Prado Silva — RM559258

## Descrição do Projeto
O LibrasJá é um ecossistema digital que automatiza a solicitação de intérpretes
de Libras em locais públicos (hospitais, escolas, repartições), utilizando sensores
IoT simulados via Node-RED, armazenamento no Oracle Autonomous Database e
dashboards interativos no Oracle APEX.

## Problema de IA
Os feedbacks dos atendimentos são classificados manualmente como Positivo,
Neutro ou Negativo. O objetivo da Sprint 3 é planejar a substituição dessa
classificação manual por um modelo de IA capaz de analisar automaticamente
o sentimento dos comentários e sugerir traduções de texto para Libras
diretamente no Oracle APEX.

## Modelo de IA Escolhido
**Modelo:** LLM (Large Language Model) via OCI Generative AI (Oracle Cloud)

**Justificativa:**
- O problema envolve processamento de linguagem natural (análise de sentimento + tradução texto → Libras)
- A OCI oferece modelos prontos (Cohere Command) sem necessidade de treino do zero
- Integração nativa com Oracle APEX via REST API
- Os dados já existem no banco (tabela FEEDBACKS_IOT com campo COMENTARIO)

## Dados Utilizados
| Item | Detalhe |
|------|---------|
| Origem | Tabelas FEEDBACKS_IOT e ATENDIMENTOS_IOT (Oracle Autonomous DB) |
| Campo principal | COMENTARIO (texto livre do usuário) |
| Campo secundário | SENTIMENTO (label atual: Positivo/Neutro/Negativo) |
| Formato | VARCHAR2, estruturado em SQL |
| Quantidade mínima | 10 feedbacks para validação, 100+ para análise confiável |

## Diagrama de Integração IA ↔ APEX ↔ Oracle Database
[Usuário no Oracle APEX]
↓
digita ou visualiza feedback
↓
[APEX dispara processo REST (PL/SQL / AJAX)]
↓
[API REST LibrasJá (.NET)]
↓
[OCI Generative AI — LLM]
↓
retorna: sentimento classificado OU tradução em Libras
↓
[API salva resultado no Oracle Autonomous DB]
↓
[APEX atualiza dashboard automaticamente]
↕
[Oracle Autonomous DB]

FEEDBACKS_IOT (entrada de dados)
ATENDIMENTOS_IOT (contexto dos atendimentos)


## Fluxo de Funcionamento
1. O administrador acessa o dashboard "Feedbacks LibrasJá (IA)" no Oracle APEX
2. Clica em "Analisar Sentimentos"
3. O APEX chama a API REST do LibrasJá (.NET)
4. A API lê os comentários da tabela FEEDBACKS_IOT sem sentimento classificado
5. Envia cada comentário ao OCI Generative AI com o prompt contextualizado
6. O modelo retorna a classificação (Positivo / Neutro / Negativo)
7. A API atualiza o campo SENTIMENTO no banco Oracle
8. O gráfico de pizza do APEX é atualizado automaticamente

## Tecnologias Utilizadas
- Node-RED (simulação de sensores IoT)
- Oracle Autonomous Database 23ai
- Oracle APEX (dashboards e interface)
- OCI Generative AI — LLM (Cohere Command)
- Oracle Cloud Infrastructure (OCI)
- .NET 8 Minimal API (camada de integração)

## O que foi feito nas Sprints anteriores
### Sprint 1
- Definição do problema e escopo
- Arquitetura conceitual IoT + Oracle + IA
- Protótipo visual no APEX

### Sprint 2
- Implementação das tabelas ATENDIMENTOS_IOT e FEEDBACKS_IOT no Oracle DB
- Fluxo Node-RED simulando sensores de atendimento
- Dashboard Oracle APEX com gráfico de barras (atendimentos) e pizza (sentimentos)
- IA simulada com classificação manual de sentimentos

### Sprint 3 (atual)
- Definição do componente de IA real (LLM via OCI Generative AI)
- Diagrama de integração IA ↔ APEX ↔ Oracle DB
- Planejamento do fluxo de dados e estratégia de integração
- Documentação técnica completa

## Vídeo de Apresentação
[Link do vídeo no YouTube] — a ser adicionado após gravação
