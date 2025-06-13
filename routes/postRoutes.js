const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Verifica que el controlador exista
console.log('Controladores disponibles:', Object.keys(postController));

// Define las rutas
router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;