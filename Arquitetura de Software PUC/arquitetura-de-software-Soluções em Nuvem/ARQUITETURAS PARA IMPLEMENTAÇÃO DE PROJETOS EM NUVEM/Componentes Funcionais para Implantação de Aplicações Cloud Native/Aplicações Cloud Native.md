# Bem-vindos de volta!

Saudações, pessoal! Bem-vindos de volta. Nossa jornada está ficando cada vez mais interessante. Agora começamos a falar de **componentes de arquitetura** de fato. Os desenhos que são feitos para serem executados em *cloud* vão nos ajudar a melhorar as aplicações – e mais do que isso, entender **como** isso precisa ser feito.

Começamos a discutir quais componentes precisamos considerar para implantar aplicações **cloud native**. Basicamente, aplicações cloud native são aquelas escritas para rodar na nuvem, utilizando todos os recursos oferecidos pelos provedores – e um pouco mais.

---

## Por que isso interessa ao arquiteto?

Neste momento, ao pensarmos em novas formas de organização, precisamos dar suporte à forma como os aplicativos estão definidos em relação à **topologia**. Isso está diretamente relacionado à **independência** que trará valor ao negócio. 

Seguindo boas práticas de arquitetura e design, conseguimos aplicar especialização de serviços com **microsserviços**. Você pode, inclusive, pensar em microfranquias ou modularizações mais específicas.

---

## Otimização com Arquitetura Orientada a Serviços

Essas práticas nos ajudam a otimizar escalabilidade, disponibilidade e **resiliência**.

- **Resiliência** comanda nossa orientação a serviços.
- A decisão de colocar a máquina no *cloud* depende disso.
- Definições como balanceamento de carga, sessões, uso de banco de dados são afetadas pela arquitetura escolhida.

---

## Aplicações Cloud Native: Resumo

São ofertas projetadas com:

- **Microsserviços**
- **Orquestração dinâmica**
- **Entrega contínua de software**

Ou seja, juntamos tudo o que falamos até agora: desacoplamento, arquitetura orientada a serviços, containers pequenos que sobem e descem automaticamente com orquestração (*e.g.* Kubernetes), tudo integrado com **DevOps** e **CI/CD**, entregando valor de forma rápida e contínua.

---

## O que é orquestração dinâmica?

Orquestração dinâmica envolve:

- **Auto Scaling (autos)** via serviços como o **ADS**.
- Criação de containers pequenos com poucos recursos (ex: 1 vCPU e 1 GB de RAM).
- Escalabilidade automática baseada em demanda.
- Otimização de custos e manutenção da resiliência.

---

## Agnosticismo de Plataforma

Aplicações cloud native são **agnósticas de plataforma**:

> "Você pode mover de uma nuvem para outra sem alterações significativas no código."

Isso significa que o mesmo serviço pode ser implantado em **AWS**, **Azure**, **GCP**, etc. Se o DNS estiver corretamente configurado, nem apontamentos precisarão ser alterados.

---

## De Monólito a Microsserviços

A transição de aplicações monolíticas para microsserviços permite:

- Modulação de funcionalidades.
- Comunicação via HTTP com contratos bem definidos (request/response).
- Garantia de **elasticidade** e **provisionamento sob demanda**.

---

## Contratos e Versionamento

Toda interação entre serviços (consumidor ↔ provedor) depende de **contratos de API**:

- Interface de entrada e saída bem definida.
- Não pode haver quebra de contrato (ex: mudar estrutura de resposta sem aviso).

Ferramentas como o **Pact** ajudam a testar se os contratos estão sendo respeitados em todas as integrações – especialmente útil em pipelines de CI/CD.

---

## Serviços Públicos e Controle

Ao consumir APIs públicas, o risco de mudanças sem aviso é maior. Portanto, para serviços críticos, o controle precisa ser seu.

- Automatize testes.
- Garanta que mudanças externas não quebrem sua aplicação.

---

## Aplicações Cloud Native e Vantagens

Criando arquiteturas no padrão cloud native, você garante:

- **Velocidade no desenvolvimento**
- **Flexibilidade para crescer e reduzir conforme necessário**
- **Portabilidade entre provedores**
- **Resiliência e previsibilidade de comportamento**
- **Desempenho e escalabilidade**

Mesmo que seja necessário um trabalho extra para "desacoplar" a aplicação, o esforço compensa. 

---

## Conclusão

Aplicações cloud native são executadas de forma modular, resiliente e previsível. O benefício principal? **Desempenho e escalabilidade**, com a flexibilidade de mudar de lugar quando necessário – algo que as aplicações tradicionais dificilmente oferecem.

Então aproveite! Essas boas práticas e arquiteturas não só trazem economia como também abrem portas para inovação contínua e confiável.
