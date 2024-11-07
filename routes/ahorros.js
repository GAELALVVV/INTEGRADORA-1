import express from 'express';
import { addAhorro } from '../controllers/AhorrosController.js';

const router = express.Router();

router.post('/ahorros', (req, res) => {
    const ahorro = req.body;
    addAhorro(ahorro, (error) => {
        if (error) return res.status(500).json({ message: 'Error al registrar el ahorro' });
        res.status(200).json({ message: 'Ahorro registrado exitosamente' });
    });
});

export default router;
