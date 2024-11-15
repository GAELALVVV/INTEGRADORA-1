import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: '25879539',
    port: 3306,
    database: 'Finera'
});

// Prueba de conexión
async function testConnection() {
    try {
        await connection.query('SELECT 1');
        console.log('Conexión a MySQL exitosa');
    } catch (error) {
        console.error('Error conectando a MySQL:', error);
    }
}

testConnection();

export default connection;

