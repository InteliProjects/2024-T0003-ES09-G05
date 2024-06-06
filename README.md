#  Inteli - Instituto de Tecnologia e Liderança em parceria com TRACK.CO

Repositório do grupo 2024-T0003-ES09-G05

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="docs/assets/logointeli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Construção de Teste Automatizados e Controle de Qualidade de Software

 <a id="groupName"> Grupo 5 </a>

 ## 🚀 Integrantes
- <a href="https://www.linkedin.com/in/alan-rozensztajn-schipper-0563701ba/">Alan Schipper</a>
- <a href="https://www.linkedin.com/in/beatriz-hirasaki-leite-b2261923a/">Beatriz Mayumi</a>
- <a href="https://www.linkedin.com/in/felipe-saadi/">Felipe Saadi</a>
- <a href="https://www.linkedin.com/in/jordan-acs/">Jordan Andrade</a>
- <a href="https://www.linkedin.com/in/livia-bonotto-9064641a3/">Livia Bonotto</a>
- <a href="https://www.linkedin.com/in/pedro-hagge/">Pedro Baptista</a>
- <a href="https://www.linkedin.com/in/stefano-tinelli-b59515270/">Stefano Tinelli</a>

## 🔍 Sumário
* [Descrição ](#descricao)
* [Estrutura de pastas](#estrutura)
* [Guia de Execução](#execucao)
* [Histórico de Lançamentos](#historico)
* [Licença/license](#licenca)
* [Referências](#ref)

## 📜 <a id="descricao"> Descrição</a>

O projeto de automação de testes na plataforma CXM da empresa TRACK.CO tem como objetivo principal implementar uma estratégia abrangente de testes automatizados nas funcionalidades CORE do sistema, incluindo Pesquisas, Dashboards, Distribuição e Interação. A iniciativa visa mitigar os riscos associados aos deploys manuais, reduzir a dependência de testes manuais e minimizar a frequência de rollbacks, proporcionando uma experiência mais estável e confiável para os clientes.

O projeto também prevê a definição de indicadores chave de desempenho (KPIs) para monitorar a redução de rollbacks e a estabilidade da plataforma, bem como uma avaliação de impacto financeiro para quantificar os benefícios associados à implementação dos testes automatizados. A comunicação transparente com os clientes e a manutenção contínua dos testes garantirão a relevância e a confiabilidade dos testes à medida que o produto evolui.

Por meio da implementação de testes automatizados nas funcionalidades CORE da plataforma CXM, a empresa TRACK.CO busca não apenas elevar a qualidade do produto, mas também posicionar-se como referência em práticas de teste e confiabilidade, fortalecendo sua reputação no mercado e garantindo o sucesso contínuo no setor de Experiência do Cliente.

## 📁 <a id="estrutura"> Estrutura de Pasta </a>

* 2024-T0003-ES09-G05<br>
  * backend
     * dist
     * postgres-dump
     * prisma
     * src
     * test
     * uploads
     * docker-compose.yml
     * package.json
  * docs
     * assets
     * documentos
     * arquitetura.md
  * frontend
     *  .scannerwork <br>
     *  cypress <br>
     *  public <br>
     *  src <br>
     *  index.html <br>
     *  package.json <br>
     *  README.md <br>
      
  * README.md

## 🔧 <a id="execucao">Guia de Execução</a>
Passo a passo para executar todo o projeto.

[Acessar o Guia](https://github.com/Inteli-College/2024-T0003-ES09-G05/blob/main/docs/documentos/execucaoProjeto.md)

## 🗃 <a id="historico"> Histórico de Lançamentos </a>

* 0.0.0 - 09/02/2024
  * Template do Readme
* 1.0.0 - 18/02/2024 (Sprint 1)
  * [Release](https://github.com/Inteli-College/2024-T0003-ES09-G05/releases/tag/v1.0.0)
  * Definição dos Requisitos Funcionais;
  * Diagrama C4 Nível 1 e Nível 2;
  * Wireframe e Mockup Frontend;
  * Plano de testes;
  * Gestão de controle de versionamento;
* 2.0.0 - 03/03/2024 (Sprint 2)
   * Implementação frontend;
   * Implementação backend;
   * TDD (Test Driven Domani);
   * Definição de métricas;
* 3.0.0 - 15/03/2024 (Sprint 3)
   * Análise estática com SonarScanner - Frontend e Backend;
   * Testes de Frontend - caixa preta;
   * Testes de integração;
* 4.0.0 - 27/03/2024 (Sprint 4)
   * Testes de carga;
   * Infográfico;
   * Dashboard de monitoramento;
   * Refatoração do Backend;
   * Correção dos erros mapeados SonarScanner;
   * Melhorias do Frontend;
   * Hospedagem na AWS.
* 5.0.0 - 11/04/2025
   * Ajustes finais;
   * Plano de Delivery;
   * Plano de Sustentação;
   * Relatório final;
   * Refatoração final.

## 📋 <a id="licenca"> Licença/license </a>

[Grupo 5](#groupName) by <a href= "https://www.inteli.edu.br/">Inteli</a>, <a href="https://www.linkedin.com/in/alan-rozensztajn-schipper-0563701ba/">Alan Schipper</a>, <a href="https://www.linkedin.com/in/beatriz-hirasaki-leite-b2261923a/">Beatriz Mayumi</a>, <a href="https://www.linkedin.com/in/felipe-saadi/">Felipe Saadi</a>, <a href="https://www.linkedin.com/in/jordan-acs/">Jordan Andrade</a>, <a href="https://www.linkedin.com/in/livia-bonotto-9064641a3/">Livia Bonotto</a>, <a href="https://www.linkedin.com/in/pedro-hagge/">Pedro Baptista</a>, <a href="https://www.linkedin.com/in/stefano-tinelli-b59515270/">Stefano Tinelli</a> is Licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## 🎓 <a id="ref"> Referências </a>

Node. Disponível em: https://nodejs.org/docs/latest/api/ . Acesso em: fev. 2024. <br>
Docker. Disponível em: https://docs.docker.com/ . Acesso em: fev. 2024. <br>
GRAFANA LABS. **k6: A modern load testing tool, using Go and JavaScript**. Disponível em: <https://github.com/grafana/k6>. Acesso em: 13 mar. 2024. <br>
PROMETHEUS AUTHORS. **Prometheus documentation**. Disponível em: <https://prometheus.io/docs/introduction/overview/>. Acesso em:  17 mar. 2024. <br>
GRAFANA LABS. **Grafana documentation**. Disponível em: <https://grafana.com/docs/>. Acesso em: 2 abr. 2024. <br>
AMAZON WEB SERVICES, INC. **AWS Documentation**. Disponível em: <https://docs.aws.amazon.com/>. Acesso em: 3 abr. 2024. <br>
MYERS, Glenford J.; BADGETT, Tom; THOMAS, Todd M. **The Art of Software Testing**. 3. ed. Hoboken, NJ: John Wiley & Sons, 2011. <br>
HUMBLE, Jez; FARLEY, David. **Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation**. Addison-Wesley Professional, 2010. <br>
PRESSMAN, Roger S.; MAXIM, Bruce R. **Software Engineering: A Practitioner's Approach**. 8. ed. McGraw-Hill Education, 2014. <br>
SOMMERVILLE, Ian. **Engenharia de Software**. 9. ed. Addison-Wesley, 2011. <br>

