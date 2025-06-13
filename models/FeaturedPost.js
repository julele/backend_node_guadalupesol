const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const FeaturedPost = sequelize.define('featured_post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  subtitulo: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'featured_post',
  timestamps: false
});

module.exports = FeaturedPost;