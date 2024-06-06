# Plano de Sustentação

## Diagrama do Processo (BPMN)
![processo-sustentacao drawio](https://github.com/Inteli-College/2024-T0003-ES09-G05/assets/54749257/6c8c06f1-d8c0-488a-924e-e3b0fa193d08)

Este diagrama foi criado para propor um possível pipeline de sustentação do projeto, alguns pontos elencados podem necessitar de ajustes de acordo com os processos internos da organização.

## Planilha de SLA

| Componente da Aplicação                          | SLA de Disponibilidade | SLA de Tempo de Resposta | SLA de Tempo de Resolução | Observações                                                                                   |
|--------------------------------------------------|------------------------|--------------------------|---------------------------|-----------------------------------------------------------------------------------------------|
| Modelo de Planilha Personalizado para Download   | 99,9%                  | 5 segundos               | 4 horas                   | Deve estar disponível para download instantâneo com tempo de resposta rápido.                |
| Importação de Dados do Cliente                   | 99,8%                  | 1 minuto                 | 2 horas                   | A importação deve ocorrer com validação rápida de dados e tempo eficiente para correções.    |
| Validação de Dados e Mensagens de Erro           | 99,9%                  | 30 segundos              | 1 hora                    | Erros devem ser exibidos quase imediatamente com instruções claras para correção.            |
| Confirmação e Salvamento da Importação de Dados  | 99,9%                  | 10 segundos              | 30 minutos                | A confirmação da importação deve ser rápida e o salvamento dos dados eficiente.              |
| Resumo da Distribuição e Visualização em Tempo Real | 99,7%                  | 5 segundos               | 1 hora                    | O resumo e as atualizações devem ser apresentados sem atrasos, garantindo a precisão dos dados em tempo real. |
| Salvamento dos Resultados da Distribuição        | 99,8%                  | 10 segundos              | 1 hora                    | O processo de salvamento deve ser rápido e confiável, com garantia de integridade dos dados. |

Esta tabela de SLA foi criada com base nos processos descritos e considera tanto a criticidade dos componentes quanto a necessidade de uma gestão eficiente de dados e comunicação com o usuário final. A disponibilidade foca na robustez do sistema, enquanto o tempo de resposta e resolução são estabelecidos para garantir uma experiência de usuário ágil e eficiente.
