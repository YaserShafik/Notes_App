const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/authController');
const router = express.Router();

const userValidationRules = [
    body('name').notEmpty().withMessage('El nombre es obligatorio.').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres.'),
    body('email').isEmail().withMessage('Introduce un email válido.'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
];

router.get('/register', userController.user_register_get);
router.post('/register', userValidationRules, userController.user_register_post);

// Ruta GET para mostrar el formulario de login
router.get('/login', userController.user_login_get);

// Ruta POST para manejauserr el envío del formulario de login
router.post('/login', userController.user_login_post);
module.exports = router;
