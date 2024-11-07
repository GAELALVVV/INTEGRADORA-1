import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',        // Cambia a la dirección de tu servidor de MySQL, usualmente 'localhost'
    user: 'root',       // Cambia 'tu_usuario' por el nombre de usuario de tu base de datos MySQL
    password: '25879539',
    port: 3306, // Cambia 'tu_contraseña' por la contraseña de tu usuario de MySQL
    database: 'Finpera' // Cambia 'tu_base_de_datos' por el nombre de tu base de datos
});

connection.connect((error) => {
    if (error) {
        console.error('Error conectando a MySQL:', error);
        return;
    }
    console.log('Conexión a MySQL exitosa');
});

export default connection;

connection.end();
