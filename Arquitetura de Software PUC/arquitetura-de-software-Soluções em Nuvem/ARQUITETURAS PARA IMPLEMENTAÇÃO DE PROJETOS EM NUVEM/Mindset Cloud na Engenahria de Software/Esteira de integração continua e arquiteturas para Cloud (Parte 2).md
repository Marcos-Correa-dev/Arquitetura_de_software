# Aula sobre Gestão Técnica, DevOps e Cultura de Automação

## Introdução

Falando em termos técnicos, a gestão também deve considerar aspectos conceituais. O DevOps está sempre ligado ao movimento cultural, observando como as pessoas pensam e trabalham. A ideia é criar **novos processos que acelerem as entregas** e permitir a **medição dos efeitos** dessas mudanças.

## Impacto das Mudanças Sociotécnicas

Ao medir os efeitos de mudanças sociotécnicas, conseguimos desenvolver **métodos de trabalho mais sustentáveis**, eliminando a **dependência de uma única pessoa** para tarefas críticas.

Um exemplo comum:
> "Cheguei numa empresa e tudo só funcionava se o Joãozinho estivesse presente. Ninguém sabia como as coisas funcionavam sem ele, pois o conhecimento estava todo anotado num caderno na gaveta dele."

Essa situação é insustentável. O que precisamos fazer é **tirar o conhecimento da cabeça de alguém e colocar em automações**, em pipelines e esteiras. Dessa forma, o trabalho se torna sustentável e previsível.

## Redistribuição de Tarefas

Você tira o profissional de tarefas operacionais e o coloca para:
- Melhorar templates
- Otimizar processos
- Aperfeiçoar padrões

Assim, ele deixa de ser um gargalo e passa a ser um **agente de melhoria contínua**.

## Compartilhamento de Conhecimento

Essa cultura incentiva o compartilhamento de histórias e experiências. O profissional começa a contar o que sabe, porque percebe que isso é do interesse de todos. Aqui entra a **empatia** – mesmo não sendo fã da palavra, é a que melhor se encaixa.

Ele começa a entender que não precisa mais "guardar o conhecimento", pois agora **a mente dele está documentada**, e todos conseguem entender e aplicar.

## Prática: Dev + Ops

Na prática, vamos **combinar times de desenvolvimento e operações** para automatizar e agilizar o processo de entrega de software. Também é necessário envolver os **interessados (stakeholders)** no processo – esse papel é fundamental para trazer as necessidades reais de negócio para dentro do desenvolvimento.

## Multi-Cloud e Integração Contínua

### Multi-Cloud

Conseguimos fazer **implantação e gerenciamento contínuo de aplicações em múltiplas nuvens**. Com isso, conseguimos automatizar scripts que rodam em ambientes diferentes:

- AWS
- Azure
- Google Cloud
- Alibaba, etc.

Cada um com seus componentes, publicando versões das APIs ou serviços nos locais corretos.

> Já integrei três grandes provedores e publiquei um serviço que rodava com sucesso nos três.

### Benefícios

- Melhoria nas relações entre os times
- Aumento da qualidade dos produtos

### Integração Contínua (CI)

- A cada alteração de código, os serviços são integrados e testados
- Possibilita a correção imediata de erros
- Reduz o custo de correção quanto antes o erro for detectado

**Gráfico do custo de erro:**

Custo
↑
|
| ____________
| /
| /
| /
|/_________→ Tempo
Dev Prod

markdown
Copiar
Editar

## Testes Automatizados e Entrega Contínua (CD)

Você pode automatizar:
- Testes funcionais
- Testes de segurança
- Deploys
- Outras validações

Ferramentas integradas na esteira vão garantir que a cada alteração, tudo funcione e seja validado para produção.

## Automação: A Chave

Automatizar é essencial. Para isso, precisamos de **orquestradores**.

Termos importantes:
- **Orquestrador**
- **Pipeline**
- **Esteira**
- **DevOps Tooling**

Tudo isso deve estar integrado e automatizado.

## Métodos Ágeis

Métodos ágeis ajudam a organizar entregas menores e mais frequentes.

- Permite fatiar funcionalidades
- Melhora produtividade

### Técnicas para Produtividade

- **Método de Pareto**
- **Técnica Pomodoro**:
  - 25 minutos de trabalho
  - Pequena pausa
  - A cada 4 ciclos, pausa maior

Use essas técnicas para melhorar seu foco e resultado.

## Publicação de Código

Quando falamos em publicação:
- Desenvolver
- Testar
- Consolidar
- Publicar num repositório compartilhado

Geralmente feito por um arquiteto de sistemas (ou equivalente), que:
- Valida o código
- Aprova
- Consolida e publica

## Benefícios da Automação

Quando tudo está automatizado:
- Menos estresse
- Menos cafeína
- Menos cabelo branco 😅
- Mais qualidade de vida

## Disciplinas Essenciais

Para chegar lá, algumas disciplinas são fundamentais:

### 1. Gerenciamento de Configuração

Automatiza:
- Configuração de infraestrutura
- Configuração de aplicativos

**Infraestrutura como Código (IaC)**: transforma tudo em arquivos versionados.

### 2. Monitoramento e Logs

Permite:
- Monitorar desempenho dos apps
- Antecipar problemas
- Diagnosticar erros com precisão

Isso é ainda mais importante em ambientes **multi-cloud**, onde serviços diferentes se comunicam em locais distintos.

---

## Conclusão

Prepare suas aplicações para suportarem essa nova realidade. Adapte sua mentalidade, sua cultura e seu processo.

---

**Referências adicionais** foram deixadas ao final da aula.

**Obrigado por assistir e até a próxima!**