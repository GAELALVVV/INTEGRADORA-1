import connection from '../bd.js';

export const addAhorro = (ahorro, callback) => {
    const { monto, descripcion, fecha } = ahorro;
    const query = 'INSERT INTO ahorros (monto, descripcion, fecha) VALUES (?, ?, ?)';
    connection.query(query, [monto, descripcion, fecha], (error, results) => {
        if (error) return callback(error);
        callback(null, results);
    });
};
