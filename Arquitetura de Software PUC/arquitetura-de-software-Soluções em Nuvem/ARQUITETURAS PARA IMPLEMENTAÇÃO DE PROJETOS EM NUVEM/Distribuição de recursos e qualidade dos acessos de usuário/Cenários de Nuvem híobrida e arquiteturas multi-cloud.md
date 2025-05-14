# Arquitetura Multi-Cloud e Continuidade de Serviços

## Introdução

Estamos entrando em um tema interessante: **nuvem híbrida** e **arquitetura multi-cloud**.  
Quando você usa um aplicativo no celular, ele pode estar conectado a múltiplos provedores de nuvem ao mesmo tempo — algo mais comum do que imaginamos.

**Exemplo:** Um banco digital pode usar serviços da **AWS** para banco de dados, **Azure** para autenticação e **GCP** para analytics.

---

## Datacenters Distribuídos e Interconectados

- A Cloud permite o funcionamento global das aplicações.
- Podemos ter partes de um sistema rodando no Brasil, Europa, Japão, Índia etc.
- Arquiteturas variam de simples a complexas.
- Muitas são orientadas a **SOA (Service-Oriented Architecture)**, com leveza e agilidade.

---

## Balanceamento e Internet

- Dentro de um datacenter é fácil balancear carga.
- Fora dele (na internet), entra o desafio da **redundância**, **resiliência** e **balanceamento geográfico**.
- **Lembre-se:** se tem nuvem, tem internet.

### Problema Real

**Exemplo:** Ter uma aplicação em um datacenter **Tier 4** e sua redundância em um **Tier 1** pode causar perda de serviço e dinheiro.

---

## O Caso do Cartão de Crédito

> “Cartão que não funciona = cliente perdido.”

- Falha em uma transação pode levar o usuário a trocar de cartão.
- Preferência por soluções globais que funcionem em qualquer lugar.
- Aplicações devem ser **disponíveis sempre** para garantir fidelidade do cliente.

---

## Soluções com SOA e Mobilidade

- **SOA** pode facilitar a distribuição e integração dos serviços.
- A nuvem por si só **não garante mobilidade** — precisa de:
  - Camada de aplicação bem distribuída.
  - Cluster de banco de dados bem configurado.
  - Recursos de rede, DNS e balanceamento global.

---

## Comunicação Global via Internet

### Cabos Submarinos

- São os principais meios de ligação entre continentes.
- O Brasil passou a investir em **rotas diretas** a partir de 2018 para não depender da América Central e EUA.

### DNS: Sistema de Nomes

- Tradução de IP para nome de domínio.
- Permite apontar para servidores distribuídos globalmente.
- Três grupos de servidores:
  - **Públicos** (governo, universidades)
  - **Privados** (empresas)
  - No Brasil: controlados pelo **NIC.br** e **CGI.br**

---

## Continuidade de Serviço

A nuvem permite **continuidade de serviço** desde que haja:

- Processos bem definidos
- Infraestrutura adequada
- Contratações com **SLAs** compatíveis

### Fatores internos:

- Processos internos
- Migração correta de aplicações

### Fatores externos:

- Contratação de serviços de terceiros com níveis adequados

---

## Classificação de Datacenters (TIA-942)

### Pilar da Continuidade

- Infraestrutura  
- Segurança física  
- Manutenção  
- Conformidade

### Requisitos de Infraestrutura

- Sistema elétrico  
- Aterramento  
- Cabeamento estruturado  
- Racks e gabinetes  
- Equipamentos ativos  
- Sistema de administração de rede  
- Nível de disponibilidade

---

## Níveis de Datacenter (Tier)

### Tier I - Básico

- Sem redundância  
- Uma única rota de energia  
- Piso não elevado  
- Até **28 horas** de inatividade por ano

### Tier II - Componentes Redundantes

- Componentes redundantes, mas ainda uma rota única  
- Piso elevado e cabeamento por baixo  
- Até **22 horas** de inatividade por ano

### Tier III - Sistema Auto-Sustentado

- Múltiplas rotas de energia e refrigeração  
- Redundância em todos os componentes  
- Até **1,6 hora** de inatividade por ano

### Tier IV - Alta Tolerância a Falhas

- Redundância completa em energia, refrigeração e redes  
- Dois quadros de energia para cada servidor  
- **Alta disponibilidade:** ideal para aplicações críticas

---

## Conclusão

A arquitetura multi-cloud e a continuidade de serviços demandam:

- **Planejamento**
- **Conhecimento técnico sobre infraestrutura e redes**
- **Boa configuração de DNS, SOA e distribuição geográfica**
- **Escolha correta dos datacenters e seus níveis de disponibilidade**

> O objetivo final é garantir que o serviço esteja **sempre disponível**, com **baixa latência**, e **alta resiliência** — seja no Brasil, seja do outro lado do mundo.
