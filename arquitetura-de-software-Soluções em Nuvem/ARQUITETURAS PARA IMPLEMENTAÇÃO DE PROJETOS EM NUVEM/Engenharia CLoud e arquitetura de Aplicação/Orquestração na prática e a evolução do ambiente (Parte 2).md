# Contêineres, Docker, Kubernetes e Orquestração de Serviços

## 👋 Introdução

Estamos falando de **contêineres**, **Docker**, **Kubernetes** e arquivos de configuração como **YAML**.  
Com o crescimento exponencial no uso de contêineres, **todos os profissionais de tecnologia precisam saber lidar com isso**.

---

## 📦 Docker: o Compilador de Imagens

- **Docker** atua como um "compilador" que roda arquivos de configuração (como YAML) e gera contêineres executáveis.
- Ele é gratuito, fácil de instalar e usar.
- Permite que aplicações sejam empacotadas com todas as suas dependências e rodem em qualquer ambiente.

### 🧰 Vantagens do Docker:

- Gera **imagens gerenciadas** prontos para execução.
- Possui o **Docker Hub**, um repositório de imagens de praticamente tudo o que usamos.
- Permite criação de **imagens customizadas** (você pode construir a sua).
- Acelera a **elasticidade e resiliência** do ambiente.

---

## 📐 Diferença: Virtualização vs Contêineres

### 🖥 Virtualização:
[Hardware] → [Hypervisor] → [Sistema Operacional] → [App]

shell
Copiar
Editar

### 📦 Contêineres:
[Hardware] → [Sistema Operacional] → [Runtime (Docker)] → [Contêiner: App + Dependências]

yaml
Copiar
Editar

- Contêineres são mais leves: compartilham o sistema operacional.
- Você pode ter diferentes contêineres rodando aplicações distintas (ex: Apache+PHP, Nginx+Node, etc).
- Resulta em **melhor desempenho e economia de recursos**.

---

## 🎯 Ferramenta Certa para o Problema Certo

> "Contêineres **não** são para tudo!"

- Avaliar desempenho, tipo de aplicação, compatibilidade e requisitos.
- Alguns legados ainda funcionam melhor com VMs.

---

## 🌐 Kubernetes: o Orquestrador

- Criado pelo **Google**, open source.
- Também conhecido como **K8s**.
- Atua como **gerenciador de contêineres Docker**.

### 🧠 Funções do Kubernetes:

- Criação, adição, destruição e substituição automática de contêineres.
- Gerenciamento de **resiliência** com `horizontal pod autoscaler`.
  - Exemplo: Se uso do contêiner passar de 70%, um novo é instanciado automaticamente.
- Reduz tempo de resposta e evita indisponibilidade manual.

---

## 🔁 Elasticidade e Automação

Antigamente:
- Monitoramento manual
- Abertura de chamados
- Escalabilidade lenta

Hoje:
- **Kubernetes faz tudo automaticamente**
- Escala para cima ou para baixo conforme necessário
- Agilidade e resiliência embutidas

---

## 🔍 Tecnologias e Sistemas de Arquivos

### 🔧 OverlayFS

- Sistema de arquivos usado pelo Docker (Union File System)
- Permite reaproveitamento de arquivos entre contêineres
- Reduz espaço em disco

### 🔒 Namespaces e Cgroups

- Garantem isolamento e controle de recursos
- Compartilhamento eficiente sem comprometer segurança

---

## 📚 Outros Orquestradores

Além do Kubernetes, temos:

- **Docker Swarm**: orquestrador nativo do Docker
- **Mesos** (Apache): robusto, mas mais complexo
- **Rancher, OpenShift, Nomad**, entre outros

Cada um tem características próprias e pode ser adequado a diferentes cenários.

---

## 🧩 API, Multi-Cloud e Compatibilidade

- É **fundamental** que o provedor cloud (CSP) ofereça **APIs abertas**.
- Assim, você pode integrar:
  - Amazon com Azure
  - Google com Alibaba
  - VMs com serviços especializados

### 🔑 Multi-Cloud:

- Reduz dependência de um único provedor
- Permite aproveitar o melhor de cada um
- Atende requisitos técnicos e financeiros

---

## 🔎 Requisitos Técnicos e Matriz de Compatibilidade

> "Homologação importa!"

- Aplicações devem ser **testadas e homologadas** nos ambientes compatíveis.
- Leia a documentação do fabricante para saber:
  - Processadores suportados
  - Sistemas operacionais certificados
  - Requisitos mínimos de infraestrutura

---

## 📌 Dica de Ouro

> “Um produto em produção que não dá problema é o melhor resultado.”

- Evite erros por incompatibilidade.
- Verifique **FN (Feature Notes)** e **matriz de compatibilidade**.
- Faça **planejamento técnico** desde a concepção até a contratação do provedor.

---

## 📖 Conclusão

- Docker **não é a tecnologia** — é **uma implementação de contêineres**.
- Kubernetes **não é o único orquestrador**, mas é o **mais popular**.
- A **evolução da infraestrutura** agora passa por **orquestração inteligente**, **contêineres**, e **infraestrutura como código**.
- A escolha do **CSP certo** deve considerar:
  - Compatibilidade técnica
  - Requisitos do negócio
  - Suporte a APIs abertas
  - Padronização conforme o **modelo do NIST**

---

## 🔗 Recursos para Pesquisa

- [Docker Hub](https://hub.docker.com/)
- [Kubernetes Official Site](https://kubernetes.io/)
- [OverlayFS (Linux kernel docs)](https://docs.kernel.org/filesystems/overlayfs.html)
- [NIST Cloud Computing Reference Architecture](https://nvlpubs.nist.gov)