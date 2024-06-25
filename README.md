
# NotesApp

## Descrição

NotesApp é uma aplicação para gerenciamento de eventos. Esta aplicação permite que os usuários visualizem, registrem, editem e excluam eventos. A aplicação é dividida em duas partes principais: o frontend construído com React e o backend construído com Node.js e Express.

## Estrutura do Projeto

### Frontend

O frontend está localizado na pasta `notes` e utiliza React. A estrutura do diretório é a seguinte:

```
notes/
├── public/
├── src/
│   ├── components/
│   │   ├── CreateEvent.tsx
│   │   ├── EventList.tsx
│   │   ├── EventPage.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Login.tsx
│   │   ├── PrivateRoute.tsx
│   │   ├── Register.tsx
│   │   ├── UpdateEventForm.tsx
│   ├── css/
│   │   ├── AuthForm.css
│   │   ├── EventForm.css
│   │   ├── EventList.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   ├── utils/
│   │   ├── api.js
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

### Backend

O backend está localizado na pasta `api` e utiliza Node.js com Express. A estrutura do diretório é a seguinte:

```
api/
├── node_modules/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── .env
│   ├── middleware.js
│   ├── server.js
├── package-lock.json
├── package.json
└── README.md
```

## Instalação

### Frontend

1. Navegue até a pasta `notes`.
2. Execute o comando `npm install` para instalar as dependências.
3. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.

### Backend

1. Navegue até a pasta `api`.
2. Execute o comando `npm install` para instalar as dependências.
3. Crie um arquivo `.env` com as variáveis de ambiente necessárias.
4. Execute o comando `npm start` para iniciar o servidor.

## Funcionalidades

- **Visualizar Eventos**: Os usuários podem visualizar a lista de eventos.
- **Registrar em Eventos**: Os usuários podem se registrar em eventos.
- **Editar Eventos**: Os administradores podem editar os detalhes dos eventos.
- **Excluir Eventos**: Os administradores podem excluir eventos.

## Tecnologias Utilizadas

### Frontend

- React
- TypeScript
- Axios
- React Router

### Backend

- Node.js
- Express
- MongoDB (ou outro banco de dados, conforme necessário)
- Mongoose (ou outro ORM, conforme necessário)

## Contribuição

1. Fork o projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
