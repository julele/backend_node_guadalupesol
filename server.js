const express = require('express');
const cors = require('cors');
const { sequelize, pool } = require('./config/database');
const postRoutes = require('./routes/postRoutes');
const featuredRoutes = require('./routes/featuredRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Body:', req.body);
  next();
});

// Rutas
app.use('/api', postRoutes);
app.use('/api', testimonialRoutes);
app.use('/api', featuredRoutes);

app.get("/api/ping", (req, res) => {
  res.send("pong");
});

// Manejador de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: 'Algo salió mal!', 
    error: err.message 
  });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Verificar conexión a PostgreSQL
    const client = await pool.connect();
    console.log('Conexión a PostgreSQL establecida');
    await client.query('SELECT NOW()');
    client.release();

    // Verificar conexión a Sequelize
    await sequelize.authenticate();
    console.log('Conexión a Sequelize establecida');
    
    // Sincronizar modelos
    await sequelize.sync({ alter: false });
    console.log('Modelos sincronizados');
    
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
      console.log(`API disponible en http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
}

startServer();