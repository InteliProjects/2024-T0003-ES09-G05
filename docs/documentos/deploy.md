
# Documentação do Workflow de CI/CD

Este documento descreve o arquivo de configuração do GitHub Actions utilizado para realizar o deployment automático de uma aplicação backend quando há alterações na branch `main`.

## Estrutura do Arquivo

O arquivo YAML está dividido nas seguintes seções:

### Nome do Workflow

```yaml
name: Push-BackEnd
```

Define o nome do workflow como `Push-BackEnd`. Este nome é exibido na interface do GitHub Actions.

### Evento de Trigger

```yaml
on:
  push:
    branches:
      - main
```

Especifica que o workflow será acionado (`triggered`) quando ocorrer um `push` na branch `main`.

### Jobs

```yaml
jobs:
  deploy:
    name: Deploy to instance
    runs-on: ubuntu-latest
```

Define um job chamado `deploy`, que será executado em um ambiente com a última versão do Ubuntu (`ubuntu-latest`).

#### Etapas do Job (`steps`)

1. **Checkout dos Arquivos**

   ```yaml
   - name: Checkout the files
     uses: actions/checkout@v3
   ```

   Utiliza a ação `actions/checkout@v3` para fazer o checkout do código fonte do repositório no ambiente de execução.

2. **Criação do Diretório `.ssh`**

   ```yaml
   - name: Create ~/.ssh directory
     run: mkdir -p ~/.ssh
   ```

   Cria o diretório `.ssh` no ambiente de execução para armazenar a chave privada SSH.

3. **Verificação da Conexão SSH**

   ```yaml
   - name: Verificar Conexão SSH
     run: |
       echo "${{ secrets.SSH_PRIVATE_KEY }}" > /home/runner/.ssh/deploy_key
       chmod 600 /home/runner/.ssh/deploy_key
       ssh -Tv -i /home/runner/.ssh/deploy_key -o StrictHostKeyChecking=no ${{ secrets.REMOTE_USER }}@${{ secrets.REMOTE_HOST }}
   ```

   - Armazena a chave privada SSH em um arquivo chamado `deploy_key`.
   - Modifica as permissões do arquivo `deploy_key` para que apenas o proprietário possa lê-lo e escrevê-lo.
   - Realiza uma verificação de conexão SSH para o servidor remoto usando a chave privada.

4. **Deploying**

   ```yaml
   - name: Deploying
     uses: easingthemes/ssh-deploy@main
     env:
       SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
       REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
       REMOTE_USER: ${{ secrets.REMOTE_USER }}
       TARGET: ${{ secrets.TARGET }}
       EXCLUDE: "/dist/, /node.modules/, **.gitigonre"
       SCRIPT_AFTER: |
         sh update.sh
   ```

   Utiliza a ação `easingthemes/ssh-deploy@main` para realizar o deploy no servidor remoto. As variáveis de ambiente configuradas incluem:

   - `SSH_PRIVATE_KEY`: A chave privada SSH para autenticação.
   - `REMOTE_HOST`: O endereço do servidor remoto.
   - `REMOTE_USER`: O usuário no servidor remoto.
   - `TARGET`: O diretório de destino no servidor remoto onde o código será implantado.
   - `EXCLUDE`: Arquivos e diretórios a serem excluídos do deploy.
   - `SCRIPT_AFTER`: Um script que será executado após o deploy ser concluído (neste caso, `sh update.sh`).

## Conclusão

Este arquivo de configuração do GitHub Actions automatiza o processo de deploy de uma aplicação backend, reduzindo a possibilidade de erros manuais e garantindo que as alterações sejam implantadas de forma rápida e eficiente.