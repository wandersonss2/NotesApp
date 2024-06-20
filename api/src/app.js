const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes'); // Importar as rotas de usuário
const dotenv = require('dotenv');

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const app = express();

// Conectar ao MongoDB usando a URL do arquivo .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Middlewares
app.use(bodyParser.json());
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes); // Usar as rotas de usuário

module.exports = app;
