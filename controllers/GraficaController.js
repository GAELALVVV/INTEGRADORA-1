import connection from '../bd.js';

export const getGraficaGastos = (callback) => {
    const query = 'SELECT categoria, SUM(monto) AS total FROM gastos GROUP BY categoria';
    connection.query(query, (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};
