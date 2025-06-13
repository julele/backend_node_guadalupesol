const { pool } = require('../config/database');
const FeaturedPost = require('../models/FeaturedPost');

exports.getFeatured = async (req, res) => {
  try {
    const featured = await FeaturedPost.findOne({
      order: [['id', 'DESC']]
    });
    
    if (!featured) {
      // Si no existe, crear uno por defecto
      const defaultFeatured = await FeaturedPost.create({
        titulo: 'Bienvenido',
        subtitulo: 'Publicación destacada',
        texto: 'Esta es la publicación destacada por defecto.'
      });
      return res.json(defaultFeatured);
    }
    
    res.json(featured);
  } catch (error) {
    console.error('Error en getFeatured:', error);
    res.status(500).json({ message: 'Error al obtener la publicación destacada' });
  }
};

exports.createFeatured = async (req, res) => {
  try {
    const { titulo, subtitulo, texto, link } = req.body;
    
    if (!titulo) {
      return res.status(400).json({ message: 'El título es requerido' });
    }

    const featured = await FeaturedPost.create({
      titulo,
      subtitulo,
      texto,
      link
    });

    res.status(201).json(featured);
  } catch (error) {
    console.error('Error en createFeatured:', error);
    res.status(500).json({ message: 'Error al crear la publicación destacada' });
  }
};

exports.updateFeatured = async (req, res) => {
  try {
    const { titulo, subtitulo, texto, link } = req.body;
    
    if (!titulo) {
      return res.status(400).json({ message: 'El título es requerido' });
    }

    const featured = await FeaturedPost.findByPk(req.params.id);
    
    if (!featured) {
      return res.status(404).json({ message: 'Publicación destacada no encontrada' });
    }

    await featured.update({
      titulo,
      subtitulo,
      texto,
      link
    });

    res.json(featured);
  } catch (error) {
    console.error('Error en updateFeatured:', error);
    res.status(500).json({ message: 'Error al actualizar la publicación destacada' });
  }
};

exports.deleteFeatured = async (req, res) => {
  try {
    const featured = await FeaturedPost.findByPk(req.params.id);
    
    if (!featured) {
      return res.status(404).json({ message: 'Publicación destacada no encontrada' });
    }

    await featured.destroy();
    res.json({ message: 'Publicación destacada eliminada correctamente' });
  } catch (error) {
    console.error('Error en deleteFeatured:', error);
    res.status(500).json({ message: 'Error al eliminar la publicación destacada' });
  }
};