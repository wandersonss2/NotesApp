const express = require('express');
const connectDB = require('./database');
const noteRoutes = require('./routes/NoteRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');  
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(cors());  
app.use(express.json());
app.use('/api', noteRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});
