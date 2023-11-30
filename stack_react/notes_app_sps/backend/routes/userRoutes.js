const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Otras rutas (editar, eliminar, etc.) pueden agregarse de manera similar

module.exports = router;