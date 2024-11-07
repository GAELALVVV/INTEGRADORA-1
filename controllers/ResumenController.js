import connection from '../bd.js';

export const getResumenFinanciero = (callback) => {
    const query = `
        SELECT 
            (SELECT SUM(monto) FROM ingresos) AS total_ingresos,
            (SELECT SUM(monto) FROM gastos_fijos) + (SELECT SUM(monto) FROM gastos_deseados) AS total_gastos,
            (SELECT SUM(monto) FROM ahorros) AS total_ahorros
    `;
    connection.query(query, (error, results) => {
        if (error) return callback(error);
        callback(null, results[0]);
    });
};
