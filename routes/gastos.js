import express from 'express';
import { getGastosFijos, addGastoFijo, getGastosDeseados, addGastoDeseado } from '../controllers/GastosController.js';

const router = express.Router();

router.get('/gastos-fijos', (req, res) => {
    getGastosFijos((error, gastos) => {
        if (error) return res.status(500).json({ message: 'Error al obtener gastos fijos' });
        res.json(gastos);
    });
});

router.post('/gastos-fijos', (req, res) => {
    const gasto = req.body;
    addGastoFijo(gasto, (error) => {
        if (error) return res.status(500).json({ message: 'Error al registrar el gasto fijo' });
        res.status(200).json({ message: 'Gasto fijo registrado exitosamente' });
    });
});

router.get('/gastos-deseados', (req, res) => {
    getGastosDeseados((error, gastos) => {
        if (error) return res.status(500).json({ message: 'Error al obtener gastos deseados' });
        res.json(gastos);
    });
});

router.post('/gastos-deseados', (req, res) => {
    const gasto = req.body;
    addGastoDeseado(gasto, (error) => {
        if (error) return res.status(500).json({ message: 'Error al registrar el gasto deseado' });
        res.status(200).json({ message: 'Gasto deseado registrado exitosamente' });
    });
});

export default router;

