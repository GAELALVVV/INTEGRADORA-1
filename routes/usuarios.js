
import express from 'express';
import { registerUser, getUsers, loginUser } from '../controllers/users.js';

const router = express.Router();

// Rutas para el registro, obtención de usuarios y login
router.post('/register', registerUser);  // Ruta de registro
router.get('/', getUsers);               // Ruta para obtener usuarios
router.post('/login', loginUser);        // Ruta para iniciar sesión

export default router;
