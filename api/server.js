require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env
const app = require('./src/app');
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
