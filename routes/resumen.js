import express from 'express';
import { getResumenFinanciero } from '../controllers/ResumenController.js';

const router = express.Router();

router.get('/resumen-financiero', (req, res) => {
    getResumenFinanciero((error, resumen) => {
        if (error) return res.status(500).json({ message: 'Error al obtener el resumen financiero' });
        res.json(resumen);
    });
});

export default router;
