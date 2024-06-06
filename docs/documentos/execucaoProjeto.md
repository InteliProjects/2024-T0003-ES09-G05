# Guia de Execução do Projeto
Passo a passo para executar cada parte do projeto. Ao seguir os passos corretamente deve se ter o projeto 100% funcional. 

Obs: Algumas etapas necessitarão ajustes no .env.

## Executar o Backend
### Docker

Navegue até a pasta Backend
```
cd backend
```

Crie um arquivo .env na raiz da pasta backend e adicione as seguintes informações (preencher com os dados do banco)
```
DATABASE_URL=postgresql://user:password@database_url
SMTP_PASS=password
```

Rode o Docker
```
docker-compose up
```

### Manualmente
Navegue até a pasta Backend
```
cd backend
```

Instale as dependências
```
npm install
```

Crie um arquivo .env na raiz da pasta backend e adicione as seguintes informações (preencher com os dados do banco e SMTP)
```
DATABASE_URL=postgresql://user:password@database_url
SMTP_PASS=password
```

Faça a Migração do DB
```
npx prisma migrate dev
```

Rode a Aplicação Backend
```
npm run start
```

## Executar o Frontend
### Manualmente

Navegue até a pasta Frontend
```
cd frontend
```

Instale as dependências
```
npm install
```

Crie um arquivo .env na raiz da pasta frontend e adicione as seguintes informações (preencher com os dados do auth0)
```
VITE_API=http://localhost:3000
VITE_DOMAIN=AUTH0DOMAIN
VITE_CLIENT_ID=AUTH0CLIENTID
VITE_CLIENT_SECRET=CLIENTSECRET
```

Rode a Aplicação Frontend
```
npm run dev
```

## Executar os Testes E2E

Primeiro, é necessário certificar-se que o Cypress está instalado no projeto.

Caso não esteja, será necessário fazer a instalação do Cypress rodando o seguinte código no diretório do projeto:
```
npm install cypress --save-dev
```
A próxima etapa é abrir a interface do Cypress. Para isso, utilize o seguinte comando:
```
npx cypress open
```

Isso abrirá a interface gráfica, onde você pode selecionar individualmente os testes para executar.


Outra opção é executar os testes pela linha de comando sem abrir a interface gráfica. Para isso utilize o comando:
```
npx cypress run
```

Este comando executa todos os testes e é ideal para integração contínua.


## Executar os Testes de Carga

Primeiro, é necessário que você esteja rodando o Backend do projeto.


Instalação do k6: 
Antes de iniciar os testes de carga, primeiramente é necessário realizar a instalação e configuração do k6. Para isso, basta seguir o [tutorial de instação](https://k6.io/docs/get-started/installation/) e em seguida executar o seguinte comando no terminal do projeto para verificar se o k6 já se encontra disponível para uso
```
k6 version
```

Este comando verificará a versão do K6 instalada na máquina. Caso retorne a versão do K6, significa que está instalado e pronto para uso. Caso contrário, será necessário refazer o tutorial disponibilizado.


Abra o terminal ou linha de comando e navegue até a pasta "Load":
```
cd .\backend\test\load\
```
Para executar um dos testes, basta escolher um dos arquivos de teste executar o comando:
```
k6 run nome-do-arquivo.js
```
_Substitua nome-do-arquivo.js pelo nome do arquivo de teste que deseja rodar._

### Alterando o número de VUs e duração do teste
Para alterar o número de Usuários Virtuais (VUs) e a duração do teste sem modificar o script, você pode passar os parâmetros diretamente no comando de execução do k6. 

Execute o teste com o comando k6, especificando o número de VUs e a duração desejados com os parâmetros --vus e --duration. 

Por exemplo:

```
k6 run --vus 10 --duration 5m load_test_A.js
```
_Onde load_test_A é o nome do seu arquivo de script do k6 e 10 é o número desejado de VUs, 5m é a duração do teste em minutos._

Dessa forma, você pode facilmente ajustar a carga de teste de acordo com as necessidades, sem qualquer alteração no código do teste.
