import express from 'express';
import { getGraficaGastos } from '../controllers/GraficaController.js';

const router = express.Router();

router.get('/grafica-gastos', (req, res) => {
    getGraficaGastos((error, data) => {
        if (error) return res.status(500).json({ message: 'Error al obtener datos de la gráfica de gastos' });
        res.json(data);
    });
});

export default router;
