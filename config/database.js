const { Sequelize } = require('sequelize');
const { Pool } = require('pg');

// Configuración de Sequelize
const sequelize = new Sequelize('guadalupesol', 'sevazar', 'julele11', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

// Configuración del pool de conexiones
const pool = new Pool({
  user: 'sevazar',
  host: 'localhost',
  database: 'guadalupesol',
  password: 'julele11',
  port: 5432
});

module.exports = { sequelize, pool };