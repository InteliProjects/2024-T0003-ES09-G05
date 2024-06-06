# Plano de Delivery
Nosso plano é composto por processos implementados para lidar com diferentes cenários do projeto, visando evidenciar as práticas elaboradas e garantir o ciclo de vida efetivo do projeto.

## Ambiente Dev

Nossa infraestrutura está inteira na AWS, com os seguintes serviços:
1. **Amazon EC2:** Utilizado para hospedar o backend da nossa aplicação, e também para hospedar nossos serviços de monitoramento, como Grafana e Prometheus, e o CloudWatch Exporter.
2. **Amazon RDS:** Banco de dados relacional utilizado para armazenar os dados da aplicação.

Sendo assim, nosso ambiente de DEV possui um banco de dados PostgreSQL (utilizado somente para atividades de desenvolvimento), uma instância EC2 com o backend da aplicação. Além disso, temos uma instância EC2 com o Grafana, Prometheus e CloudWatch Exporter para monitoramento.

## Ambiente Prod
Nosso ambiente de produção conta com um sistema de entrega automatizada, que é acionado quando as mudanças são enviadas para a branch “release” no repositório do GitHub. O processo de entrega é orquestrado pelo GitHub Actions, que é responsável por transferir o código atualizado para a máquina de destino via conexão SSH.

Ademais, replicamos a infraestrutura presente no ambiente de desenvolvimento porém adicionando mais camadas de segurança a ela, como o WAF e CloudFront, para garantir a proteção dos dados e a disponibilidade do sistema.

Dessa forma, tendo uma replica do ambiente de desenvolvimento, podemos garantir que um ambiente jamais impacte no outro e que todas as mudanças e features possam ser testadas e válidadas em um ambiente exatamente igual ao de produção, garantindo a qualidade e a segurança do sistema.

## Processo de Mudança na Infra


### Planejamento e Design da Arquitetura
Iniciamos com uma revisão detalhada da arquitetura existente, identificando componentes que requerem atualizações ou modificações. Utilizamos práticas de design sistemático para assegurar que a nova infraestrutura seja escalável, segura e alinhada com os requisitos funcionais do sistema.

### Definição de Requisitos Funcionais
Especificamos os requisitos funcionais para garantir que as alterações na infraestrutura suportem todas as funcionalidades necessárias. Isso inclui análise de necessidades de desempenho, capacidade e integração com outros sistemas.

### Implementação de Medidas de Segurança
Adotamos uma abordagem proativa em relação à segurança, implementando medidas como criptografia de dados, autenticação forte, controle de acesso e auditoria regular. O plano de segurança é revisado e atualizado para refletir as mudanças na infraestrutura.

### Automação e Ferramentas de Desenvolvimento
Utilizamos automação para implementar mudanças de forma consistente e eficiente. Isso inclui o uso de scripts de automação, ferramentas de integração contínua/desdobramento contínuo (CI/CD), e plataformas como GitFlow para gerenciamento de código e versões.

### Testes Rigorosos
Conduzimos uma série de testes, incluindo testes unitários, de integração, de carga e testes de caixa preta, para garantir a robustez e a confiabilidade da infraestrutura. Utilizamos ferramentas como Cypress e SonarCube para testes e análise de qualidade do código.

### Revisão e Documentação
Todos os processos e alterações na infraestrutura são meticulosamente documentados. Isso inclui a criação de wireframes, mockups, e relatórios detalhados que fornecem uma visão clara das alterações implementadas e facilitam futuras auditorias e manutenções.

### Monitoramento e Métricas
Após a implementação, continuamos a monitorar o desempenho da infraestrutura, utilizando métricas para identificar e resolver proativamente quaisquer problemas. Isso ajuda a manter a estabilidade e a eficiência operacional.

### Feedback e Melhoria Contínua
Encorajamos o feedback contínuo de todas as partes interessadas e utilizamos esse feedback para aprimorar continuamente os processos e a infraestrutura.


## Processo de Mudança nos Artefatos

## Plano de Rollback
Baseando-se no projeto fornecido, foi elaborado um plano de rollback detalhado que possa ser aplicado para reverter as operações realizadas durante o processo de gestão de importação e validade de dados do cliente, além do monitoramento em tempo real e registro de resultados da distribuição. Este plano será dividido em partes correspondentes às principais funcionalidades do sistema, garantindo uma abordagem estruturada para a reversão segura e eficaz dos dados e operações, caso necessário.

### Gestão de Importação e Validade de Dados do Cliente

1. **Preparação para o Rollback:**
   - Garantir backups dos dados dos clientes antes da importação.
   - Documentar a versão do sistema antes da implementação das novas funcionalidades para permitir o retorno a esta versão, se necessário.

2. **Detecção de Problemas:**
   - Estabelecer mecanismos de monitoramento que alertem imediatamente sobre falhas ou inconsistências após a importação dos dados.

3. **Processo de Rollback:**
   - **Restauração de Dados:** Se os dados importados apresentarem problemas críticos não resolvidos, iniciar o processo de rollback para a versão anterior dos dados, usando o backup criado anteriormente.
   - **Reversão de Funcionalidades:** Caso as novas funcionalidades introduzam erros no sistema, reverter para a versão documentada do sistema antes da implementação.

4. **Comunicação com os Usuários:**
   - Informar os usuários afetados sobre o rollback e a razão para tal ação, garantindo transparência.
   - Fornecer instruções claras sobre os próximos passos, incluindo qualquer ação necessária por parte dos usuários.

5. **Análise Pós-Rollback:**
   - Realizar uma revisão detalhada para entender as causas dos problemas enfrentados.
   - Desenvolver soluções para prevenir reincidências.

### Monitoramento em Tempo Real e Registro de Resultados da Distribuição

1. **Preparação para o Rollback:**
   - Assegurar que todas as ações de distribuição sejam registradas em um log antes da confirmação final, permitindo a restauração das ações anteriores.
   - Manter backups regulares dos estados de distribuição para possibilitar a restauração para pontos anteriores específicos.

2. **Detecção de Problemas:**
   - Implementar alertas para identificar rapidamente quaisquer falhas no processo de distribuição ou na exibição de resultados.

3. **Processo de Rollback:**
   - **Restauração dos Estados de Distribuição:** Se problemas forem identificados após a distribuição, usar os backups para restaurar o estado da distribuição para um ponto anterior seguro.
   - **Correção de Visualizações de Resultados:** Se as visualizações dos resultados forem insatisfatórias ou errôneas, reverter as mudanças utilizando os logs de ação.

4. **Comunicação com os Usuários:**
   - Informar os envolvidos sobre o rollback, esclarecendo o motivo e as expectativas futuras.
   - Providenciar atualizações sobre o status da correção e quaisquer etapas necessárias por parte dos usuários.

5. **Reavaliação e Ajustes:**
   - Examinar os processos de distribuição e monitoramento para identificar falhas.
   - Ajustar os procedimentos de backup e restauração para aumentar a eficiência e reduzir o risco de problemas futuros.

### Considerações Gerais

- **Testes Rigorosos:** Antes de reintroduzir quaisquer dados importados ou funcionalidades alteradas, realizar testes rigorosos para garantir que os problemas originais foram resolvidos.
- **Documentação Detalhada:** Manter uma documentação detalhada de todo o processo de rollback, incluindo as lições aprendidas e as estratégias para evitar problemas similares no futuro.
- **Revisão de Segurança:** Avaliar as implicações de segurança de qualquer operação de rollback, especialmente em relação à integridade e privacidade dos dados dos clientes.

Este plano oferece uma estrutura abrangente para reverter de forma segura e eficiente quaisquer operações problemáticas relacionadas à gestão de importação e validade de dados do cliente, bem como ao monitoramento em tempo real e registro de resultados da distribuição.
