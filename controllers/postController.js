const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['fecha_inicio', 'DESC']]
    });
    res.json(posts);
  } catch (error) {
    console.error('Error en getAllPosts:', error);
    res.status(500).json({ message: 'Error al obtener los posts' });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error('Error en createPost:', error);
    res.status(500).json({ message: 'Error al crear el post' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }
    await post.update(req.body);
    res.json(post);
  } catch (error) {
    console.error('Error en updatePost:', error);
    res.status(500).json({ message: 'Error al actualizar el post' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }
    await post.destroy();
    res.json({ message: 'Post eliminado correctamente' });
  } catch (error) {
    console.error('Error en deletePost:', error);
    res.status(500).json({ message: 'Error al eliminar el post' });
  }
};