# Modelos de Comercialização em Cloud Computing

## 👋 Introdução
Bem-vindo de volta! Vamos falar sobre os modelos de comercialização na nuvem — ou seja, como contratamos serviços cloud disponíveis no mercado.

---

## ☁️ TI como Serviço
A base da computação em nuvem é o conceito de TI como serviço, com foco em:

- **Redução de custos**, especialmente com hardware, software e equipes especializadas.
- **Eliminação da necessidade de manutenção física e infraestrutura própria.**

---

## 🧩 Arquitetura Orientada a Serviços (SOA)
A **SOA** possibilita:

- Melhor alinhamento com os domínios de negócio.
- Explosão de ofertas baseadas em microserviços.
- Aproveitamento de conceitos como **Domain-Driven Design (DDD).**

### ✳️ Benefícios:
- **Interoperabilidade:** serviços funcionam em múltiplas plataformas.
- **Diversificação de fornecedores:** contratação de startups especializadas para tarefas específicas.
- **Domínios desacoplados:** ex. RH, retenção de talentos, absenteísmo.

---

## 💡 Exemplos Práticos
- **RH** pode contratar um serviço específico para tratar absenteísmo sem depender do time de TI.
- Setores de negócio tornam-se protagonistas ao consumir dados e serviços diretamente.

---

## 🔌 Interoperabilidade e Micro Frontends
Apesar de micro frontends não serem o foco aqui, vale citar que a arquitetura atual permite:

- Composição de múltiplos serviços.
- Reutilização e modularização.
- Compartilhamento de dados entre sistemas.

---

## 🔄 Infraestrutura como Serviço (IaaS)

### 📈 Benefícios:
- **Alocação dinâmica de recursos.**
- Base sólida para desenvolvimento de software.
- **Infraestrutura evolui junto com o software.**

### ⚙️ Exemplo:
- Alterou a versão do software? Basta trocar a imagem da VM (máquina virtual).
- Automação da criação e destruição de instâncias com base em regras.

---

## 💪 Resiliência na Infraestrutura
**Palavra-chave: resiliência**

- Monitoramento detecta falhas e reconstrói ou duplica a infraestrutura automaticamente.
- Menos trabalho manual para o time de infraestrutura.

---

## 📜 Infraestrutura como Código (IaC)
Ferramentas como:

- **Ansible**
- **Terraform**
- **Chef**
- **Puppet**
- **SaltStack**

### 🧱 Conceito:
- Infraestrutura tratada como código (YAML, JSON, XML…).
- Mesmas práticas do desenvolvimento: controle de versão, testes e deploy automatizado.

---

## 🔁 Ciclo DevOps com IaC
- Código da infraestrutura versionado no Git.
- Pipeline de CI/CD executa testes.
- Se aprovado, aplica a infraestrutura automaticamente.

---

## 🧪 Testes Automatizados de Infraestrutura
Incluem testes de stress, cobertura, funcionalidade:

- Garantem que a infraestrutura está pronta para a produção.

---

## 🧰 Modelos de Serviço na Nuvem

1. **IaaS – Infrastructure as a Service**
   - **Recursos:** servidores, redes, armazenamento.
   - **Público:** Admins, Engenheiros.
   - Você gerencia **OS, apps, middlewares**, etc.

2. **PaaS – Platform as a Service**
   - **Plataforma completa para desenvolvimento.**
   - **Público:** Desenvolvedores.
   - Não precisa configurar **OS, banco ou patch**.

3. **SaaS – Software as a Service**
   - Aplicações prontas para uso via browser.
   - **Público:** Usuários finais.
   - **Exemplo:** Gmail, Google Docs, Salesforce.

4. **XaaS – Anything as a Service**
   - Modelo que engloba todas as novas ofertas que surgem rapidamente.

---

## 🔄 Responsabilidades por Modelo

| Camada                       | IaaS    | PaaS    | SaaS    |
|------------------------------|---------|---------|---------|
| **Aplicações**                | Cliente | Cliente | Provedor|
| **Dados**                     | Cliente | Cliente | Provedor|
| **Runtime / Middleware**      | Cliente | Provedor| Provedor|
| **Sistema Operacional**      | Cliente | Provedor| Provedor|
| **Virtualização / Infra**    | Provedor| Provedor| Provedor|

---

## 💵 Vantagens Econômicas

- **Escalabilidade sob demanda.**
- **Pay-as-you-go:** paga-se apenas pelo que usar.
- Integração com ferramentas de automação via **API**.

---

## 🛠️ Automação de Infraestrutura
Ferramentas como **Terraform**, **Ansible** e outras permitem:

- Criar infraestrutura com um único comando/script.
- Aplicar políticas de segurança e versionamento.
- Reduzir erro humano e acelerar entrega.

---

## 🧩 Resumo Final
- A **cloud computing** descentraliza o processamento e empodera as áreas de negócio.
- O alinhamento entre **arquitetura**, **automação** e **domínio** melhora a estratégia da empresa.
- A infraestrutura se tornou código — e isso traz **agilidade**, **economia** e **controle**.
