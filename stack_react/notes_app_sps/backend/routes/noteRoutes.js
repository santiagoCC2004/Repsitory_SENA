const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Ruta para obtener todas las notas
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear una nueva nota
router.post('/', async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
    creator: req.body.creator,
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Otras rutas (editar, eliminar, etc.) pueden agregarse de manera similar

module.exports = router;