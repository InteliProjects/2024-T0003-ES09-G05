# Segurança do Frontend

## Implementação do AUTH0

Para garantir a segurança da nossa aplicação, fizemos o uso do PaaS AUTH0 para auntenticação do usuário. Com ele é possível abstrair a camada de autenticação da nossa aplicação, acelerando o desenvolvimento e protegendo nosso sistema de usuários não autorizados.

A implementação dele consiste na adição das dependências do AUTH0 em nossa aplicação React, assim como a implementação o capsulamento do acesso ao nosso router passando primeiramente pelo Provider do AUTH0.

![image](https://github.com/Inteli-College/2024-T0003-ES09-G05/assets/54749257/8e87140b-6be4-40f7-8ab9-5c692c7a2ded)

Dessa forma nossos usuários deverão passar pela por meio dessa autenticação do AUTH0 para terem acesso a nossa plataforma. A implementação do AUTH0 foi uma forma de acelerar o processo de desenvolvimento sem impactar no nível de segurança da aplicação.
