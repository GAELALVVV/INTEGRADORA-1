import express from 'express';

import gastosRoutes from './routes/gastos.js';
import graficaRoutes from './routes/grafica.js';
import ahorrosRoutes from './routes/ahorros.js';
import resumenRoutes from './routes/resumen.js';

const app = express();

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Ruta principal para indicar que el sitio está en construcción
app.get("/", (req, res) => {
    res.send("EN CONSTRUCCIÓN");
});

// Configuración de rutas para cada módulo de la API con rutas específicas
app.use('/api/gastos', gastosRoutes);
app.use('/api/grafica', graficaRoutes);
app.use('/api/ahorros', ahorrosRoutes);
app.use('/api/resumen', resumenRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send("Ruta no encontrada");
});

// Inicialización del servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


