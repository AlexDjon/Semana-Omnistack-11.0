<h1 align="center">
    <img alt="Be The Hero" title="#bethehero" src=".github/bethehero.svg" width="200px" />
</h1>

<h4 align="center">
  🚀 Semana OmniStack 11.0
</h4>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#realizar-testes">Realizar testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <img alt="BeTheHero" src=".github/bethehero.png" width="25%">
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## Como Rodar
- <b>Backend:</b> Acesse a pasta /backend e rode os comandos <b>npm install</b> e <b>npm start</b>
- <b>Frontend:</b> Acesse a pasta /frontend e também rode os comandos <b>npm install</b> e <b>npm start</b> (com o backend já startado)
- <b>Mobile:</b> É necessário configurar um emulador ou instalar no celular o aplicativo expo, rode o comando <b>yarn start</b> e de um scan no QR Code mostrado no terminal/navegador

## Realizar Testes
Acesse a pasta /backend e para realizar os testes rode <b>npm test</b>
- <b>ONGS</b> possui 4 funções, sendo elas:
   - ongsListen: Lista as Ongs registradas (por padrão é a única chamada no código)
   - createNewONG: Cria uma ONG no banco de testes e informa no terminal a sua ID
   - ongLogin: Realiza um teste de Login na Id da Ong informada
   - profileIncidents: Retorna os incidents registrados na Ong do Id informado
- <b>INCIDENTS</b> possui 3 funções, sendo elas:
   - incidentsListen: Lista os Incidentes presentes no banco de dados (por padrão é a única chamada no código)
   - createNewIncident: Cria um Incident nos registros da Id da Ong que foi informada
   - deleteIncident: Deleta um registro existente, sendo necessário a Id da Ong e a do Incident
<br>

## Projeto

O BeTheHero é um projeto que visa conectar pessoas que desejam fazer contribuições monetárias a ONG's (Organizações não governamentais) que precisam de ajuda.

## 🔖 Layout

Você pode visualizar o layout do projeto no formato através [desse link](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11?node-id=37%3A394). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

---

Feito com ♥ by AlexDjonata - Orquestrado por Rocketseat :wave:
