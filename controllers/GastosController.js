import connection from '../bd.js';

export const getGastosFijos = (callback) => {
    const query = 'SELECT * FROM gastos_fijos';
    connection.query(query, (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

export const addGastoFijo = (gasto, callback) => {
    const { monto, descripcion, fecha } = gasto;
    const query = 'INSERT INTO gastos_fijos (monto, descripcion, fecha) VALUES (?, ?, ?)';
    connection.query(query, [monto, descripcion, fecha], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

export const getGastosDeseados = (callback) => {
    const query = 'SELECT * FROM gastos_deseados';
    connection.query(query, (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};

export const addGastoDeseado = (gasto, callback) => {
    const { monto, descripcion, fecha } = gasto;
    const query = 'INSERT INTO gastos_deseados (monto, descripcion, fecha) VALUES (?, ?, ?)';
    connection.query(query, [monto, descripcion, fecha], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};
