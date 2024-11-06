

// Código de la ruta GET
import { getGastosFijos } from './controllers/GastosController.js';

server.get('/api/gastos-fijos', (req, res) => {
    res.json(getGastosFijos());
});

// Código de la ruta POST
import { addGastoFijo } from './controllers/GastosController.js';

server.post('/api/gastos-fijos', (req, res) => {
    const { monto, descripcion, fecha } = req.body;
    try {
        addGastoFijo({ monto, descripcion, fecha });
        res.status(200).json({ message: "Gasto fijo registrado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el gasto fijo" });
    }
});

import { getGastosDeseados } from './controllers/GastosController.js';

server.get('/api/gastos-deseados', (req, res) => {
    res.json(getGastosDeseados());
});

import { addGastoDeseado } from './controllers/GastosController.js';

server.post('/api/gastos-deseados', (req, res) => {
    const { monto, descripcion, fecha } = req.body;
    try {
        addGastoDeseado({ monto, descripcion, fecha });
        res.status(200).json({ message: "Gasto deseado registrado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el gasto deseado" });
    }
});

import { getGraficaGastos } from './controllers/GraficaController.js';

server.get('/api/grafica-gastos', (req, res) => {
    res.json(getGraficaGastos());
});

import { addAhorro } from './controllers/AhorrosController.js';

server.post('/api/ahorros', (req, res) => {
    const { monto, descripcion, fecha } = req.body;
    try {
        addAhorro({ monto, descripcion, fecha });
        res.status(200).json({ message: "Ahorro registrado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el ahorro" });
    }
});

import { getResumenFinanciero } from './controllers/ResumenController.js';

server.get('/api/resumen-financiero', (req, res) => {
    res.json(getResumenFinanciero());
});

