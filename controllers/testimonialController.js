const Testimonial = require('../models/Testimonial');

exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll({
      order: [['created_at', 'DESC']]
    });
    res.json(testimonials);
  } catch (error) {
    console.error('Error en getAllTestimonials:', error);
    res.status(500).json({ message: 'Error al obtener los testimonios' });
  }
};

exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    console.error('Error en createTestimonial:', error);
    res.status(500).json({ message: 'Error al crear el testimonio' });
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonio no encontrado' });
    }
    await testimonial.update(req.body);
    res.json(testimonial);
  } catch (error) {
    console.error('Error en updateTestimonial:', error);
    res.status(500).json({ message: 'Error al actualizar el testimonio' });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonio no encontrado' });
    }
    await testimonial.destroy();
    res.json({ message: 'Testimonio eliminado correctamente' });
  } catch (error) {
    console.error('Error en deleteTestimonial:', error);
    res.status(500).json({ message: 'Error al eliminar el testimonio' });
  }
};