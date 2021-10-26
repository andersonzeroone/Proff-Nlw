<h1 align="center">
  <img alt="logo" width="450px"  title="#Be The Hero" src="./assets/logo.svg" />
</h1>

<h4 align="center"> 
	🚧 Proff🚀 concluído 🚧
</h4>

<br/>

<p align="center">
 <a href="#sobre-o-projeto">Sobre o projeto</a> • 
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#layout">Layout</a> • 
 <a href="#como-executar-o-projeto">Como executar o projeto</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#contribuidores">Contribuidores</a> • 
 <a href="#autor">Autor</a> • 
<a href="#licenc-a">Licença</a> • 
</p>
<br/>

## Sobre o projeto

<p align="left">Em meio a pandemia muitas áreas sofrem mudanças extrema e a educação foi uma delas que mais sofrem mudanças como a forma de realizar as aulas e o contato com professores. O sistema Proffy, permite você encontrar diversos professores on-line, que oferecem aulas particulares e com horários flexíveis servindo como um reformo em meio a pandemia.

Projeto desenvolvido durante a semana Next Level Week - NLW oferecida pela  [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/).. O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.
</p>

<br/>

##  Funcionalidades

- [x] Cadastrar professores.
- [x] Buscar Professores por:
  -  Matéria;
  -  Dia da Semana;
  -  Horário.
- [x] Listar professores.
- [x] Exibi informações sobre professor.
---

## Layout
Você pode acessar os Layout pelo Figma: 

Mobile: <a href="https://www.figma.com/file/3IYU7c1WocWs5Am74ds10U/Proffy_Mobile?node-id=45%3A640">desse link</a>.

Web: <a href="https://www.figma.com/file/7vDXSL28sXSTG8ybdIkIJH/Proffy_Web?node-id=0%3A1">desse link</a>.

<br/>
<h1>Versão Mobile</h1>
<h1 align="center">
  <img alt="proff" width="1000px"   title="proff" src="./assets/preview.png" />
</h1>

<h1>Versão web</h1>
<p align="center" >
  <img alt="proff"  width="450px" title="proff" src="./assets/Home.png" /></br>
  <img alt="proff"  width="450px" title="proff" src="./assets/Listagem.png" /></br>
  <img alt="proff"  width="450px" title="proff" src="./assets/Sem resultados.png" />
</p>

---
## Como executar o projeto
Este projeto é divido em três partes:
1. Backend (pasta backend) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

anto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲Clonando o projeto

```bash

# Clone este repositório
$ git clone git@github.com:andersonzeroone/Proff-Nlw.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Proff-Nlw

```
#### 🎲 Rodando o Backend (servidor)

```bash


# Acesse a pasta do projeto no terminal/cmd
$ cd backend

# Instale as dependências
$ npm install ou yarn install

# Execute a aplicação
$ npm start ou  yarn start 

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```
<!-- <p align="center">
  <a href="https://github.com/tgmarinho/README-ecoleta/blob/master/Insomnia_API_Ecoletajson.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p> -->

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install ou yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm start ou  yarn start 

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```


#### 🧭 Rodando a aplicação mobile

```bash

# Vá para a pasta da aplicação Front End
$ cd mobile

# Instale as dependências
$ npm install ou yarn install

# Execute a aplicação em modo de desenvolvimento
$ expo start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

acesse localhost:19002, leia o QR Code no seu celular e utilize o aplicativo Expo para rodar a versão mobile no seu smartphone. Ou com algum emulador Android/iOS para rodar no seu computador.

```
##  Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


 **Backend**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))
-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[Celebrate](https://github.com/arb/celebrate)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**


> See the file  [package.json](https://github.com/andersonzeroone/Proff-Nlw/blob/master/backend/package.json)
> 
#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**



> See the file  [package.json](https://github.com/andersonzeroone/Proff-Nlw/blob/master/web/package.json)

**Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))


-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/andersonzeroone/Proff-Nlw/blob/master/mobile/package.json)


**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Proff mobile)](https://www.figma.com/file/3IYU7c1WocWs5Am74ds10U/Proffy_Mobile)** →  **[Protótipo (Proff web)](https://www.figma.com/file/7vDXSL28sXSTG8ybdIkIJH/Proffy_Web?node-id=27%3A1703)**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  


-   API Test:  **[Insomnia](https://insomnia.rest/)**

---
## Contribuidores

💜 Um super thanks 👏 para essa galera que fez esse produto sair do campo da ideia e entrar nas lojas de aplicativos :)

## Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

##  Autor
</br>

<a href="https://github.com/andersonzeroone">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/33969430?v=4" width="100px;" alt=""/>
 <br />
 <br />
 <sub><b>Anderson Pablo</b></sub></a> <a href="https://www.linkedin.com/in/anderson-pablo-js/" title="andersonPablo">🚀</a>
 <br />


 [![Linkedin Badge](https://img.shields.io/badge/-Anderson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anderson-pablo-js/)](https://www.linkedin.com/in/anderson-pablo-js/) 
[![Gmail Badge](https://img.shields.io/badge/-anderson.pablo02@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:anderson.pablo02@gmail.com)](mailto:anderson.pablo02@gmail.com)

---

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Anderson Pablo 👋🏽 [Entre em contato!](https://www.linkedin.com/in/anderson-pablo-js/)

---

<!-- ##  Versões do README

[Português 🇧🇷](./README.md)  |  [Inglês sem emojis 🇺🇸](./README-en.md) | [Portugues sem logo  🇧🇷](./README-sem-logo.md)  -->