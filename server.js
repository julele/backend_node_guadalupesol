const express = require('express');
const session = require('express-session');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const passport = require('./auth/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Cambia esto por tu dominio en producción
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: 'tu_secreto_super_secreto',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/api/auth', authRoutes);

// GET público
app.get('/api/content', (req, res) => {
  const filePath = path.join(__dirname, 'content.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'No se pudo leer el archivo' });
    res.json(JSON.parse(data));
  });
});

// Middleware de autenticación
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) return next();
  res.status(401).json({ message: 'No autorizado' });
}

// POST protegido
app.post('/api/content', ensureAuthenticated, (req, res) => {
  const filePath = path.join(__dirname, 'content.json');
  fs.writeFile(filePath, JSON.stringify(req.body, null, 2), err => {
    if (err) return res.status(500).json({ error: 'No se pudo guardar el archivo' });
    res.json({ ok: true });
  });
});

// Manejador de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: 'Algo salió mal!', 
    error: err.message 
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log(`API disponible en http://localhost:${PORT}/api`);
});