# Jornada de Arquitetura e Cloud

Pessoal, já pensaram sobre todas as perguntas que estão sendo feitas aqui na nossa jornada? São muitas perguntas. E tem uma delas que é fundamental para que a gente possa evoluir nas atitudes.

Ela vai, papai... vai! A resposta vai ser boa:

> **As aplicações já precisam nascer em um modelo compatível para poderem efetivamente funcionar num modelo de Cloud?**  
> Ou eu consigo pegar uma aplicação que já existe hoje e fazer isso acontecer?

Pra quem já respondeu essa pergunta com **sim** ou **não**, não tem uma resposta certa. Mas algumas aplicações que estão funcionando hoje na arquitetura mais antiga, eu tenho como fazer algumas adaptações para que isso funcione. No entanto, existem algumas outras possibilidades que **não vão contemplar** o funcionamento num ambiente muito cloud.

---

## Aplicações novas: já nascem organizadas

Então a ideia é que, já que você vai nascer com aplicação nova, que ela já **nasça organizada**. E para isso, a gente vai falar um pouco de **micro serviços**, mas **não no detalhe de implementação**, e sim **como ele se encaixa dentro do ambiente onde está tal ação**.

---

## Mudança de Arquitetura e Microserviços

Qualquer mudança de arquitetura:

- O que são esses micro serviços?
- Como eles nos ajudam a otimizar os nossos produtos utilizando topologia Cloud?

A pergunta norteadora é:

> **Essas aplicações estão prontas efetivamente para esse modelo de arquitetura de funcionamento multi-cloud?**

---

## Arquitetura de Cloud Híbrida

A gente vai falar muitos termos técnicos aqui. Vamos juntar o nosso conhecimento para que a gente possa ter uma visão mais ampla de tudo que acontece.

### Vantagens da Cloud Híbrida:

- Velocidade
- Agilidade
- Custo-benefício
- Sazonalidade

Esses pontos **vão ser atendidos na infraestrutura de Cloud**, **independente de qual seja**.

---

## Integração com DevOps

Em paralelo a isso, vou integrar práticas de **DevOps** para garantir:

- Sustentabilidade do meu produto
- Agilidade
- Qualidade nas arquiteturas multi-cloud

Com isso, consigo ter **entregas mais rápidas e consistentes** dos aplicativos em várias nuvens, mantendo **altos níveis de confiabilidade e segurança**:

- **Confiabilidade**: disponibilidade, funcionamento, entrega
- **Segurança**
- **Velocidade**

---

## Objetivos da Atualização de Arquitetura

- Abranger o funcionamento de **data center interno**
- **Integração com a nuvem pública** (não tem como fugir disso)

Sempre vai ter algo interno, nem que seja serviço de RH, cadastro de funcionário etc.

Para consumir serviços de:

- **Big Data**
- **IA**

Você vai precisar integrar isso tudo. E aí temos **uma variedade enorme de plataformas e modelos de implantação**.

---

## Ferramentas e Orquestração

Tecnologias populares:

- Ansible
- Puppet
- Chef

Esses são os mais populares.

---

## Containerização

Quando falamos de **containerização**, isso nos ajuda a:

- Permitir que os aplicativos sejam implantados **em qualquer lugar**
- Todo o ambiente da aplicação fica embutido no container

### Exemplo:

- Um container pequeno com tudo embutido (bibliotecas, ambiente, etc.)

---

## Complexidade dos Microserviços

Exemplo:

- Kubernetes (K8s): equipes ficam atoladas na complexidade
- A aplicação que antes era 1 pacote, agora são **600 pacotes**

Isso exige:

- Mais esforço
- Mais energia para criar lógica de dependência
- Mudança no mindset de **infraestrutura e desenvolvimento**

---

## Estratégia de Adoção

**Comece pequeno.**

- Use tecnologias Open Source
- Não precisa ir direto para a Cloud
- Faça isso internamente, veja funcionando, depois expanda

---

## O Que São Microserviços?

- Uma coleção de serviços **menores**, **independentes** e **fracamente acoplados**
- Permitem publicação independente dos pedaços
- Facilitam:
  - Desenvolvimento ágil
  - Equipes menores focadas em partes específicas

---

## Benefícios dos Microserviços

- **Eficiência no desenvolvimento**
- **Rapidez na entrega**
- **Facilidade de integração com outras arquiteturas**

---

## Arquitetura Modular Descentralizada

- Pronta para uso com containers
- Container fornece um pacote completo do aplicativo
- Basta "colar" no orquestrador de container (ex: Kubernetes)

---

## Responsabilidades do Desenvolvedor e Operações

Desenvolvedor:

- Gasta mais energia com dependências entre serviços

Operações:

- Se livra de configurações específicas
- Agora foca em:
  - Comunicação entre serviços
  - Testes integrados
  - Falhas de comunicação
  - Garantir que APIs estejam funcionando

---

## Características da Arquitetura Baseada em Microserviços

- **Modularidade**: facilita manutenção e atualização
- **Escalabilidade**: lida com alto tráfego e carga
- **Resiliência**: falhas isoladas não afetam o sistema todo
- **Agilidade**
- **Atualização frequente**
- **Diversidade tecnológica**: múltiplos times, múltiplas tecnologias

---

## Evolução da Arquitetura

### Antigo:

- Aplicações monolíticas acopladas
- Modificação de um componente afeta todo o sistema

### Tradicional:

- Serviços publicados e consumidos por outras partes

### Atual:

- Microserviços desacoplados
- Alta escalabilidade e autonomia

---

## Desafios

- **Complexidade na comunicação HTTP**
- **Testes e monitoramento**
- Necessidade de uma cultura **DevOps madura**

---

## Conclusão

Estamos agora com um discurso totalmente aderente às:

- Tecnologias **Cloud**
- Arquitetura de **Sistemas**
- **Microserviços**

Esses conceitos funcionam separadamente, **mas juntos são ainda melhores para o negócio**.

---

## Próximo Tópico

Vamos tocar agora num ponto interessante:

### O que é uma aplicação **nativa para nuvem**?

O que **não é nativa**?

E o que significa ser **nativo para a nuvem**?

---

## Referências Bibliográficas

O pessoal deixou as referências bibliográficas pra vocês.

**Obrigado por assistir a mais essa aula e até a próxima!**
