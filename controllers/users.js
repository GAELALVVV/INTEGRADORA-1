import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Importa JWT
import connection from '../bd.js';

export const registerUser = async (req, res) => {
  try {
    const { nombre_completo, correo, nombre_usuario, contraseña } = req.body;

    // Validar que los campos no estén vacíos
    if (!nombre_completo || !correo || !nombre_usuario || !contraseña) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    console.log("Contraseña recibida:", contraseña); // Para verificar el valor de la contraseña

    // Verificar si el correo ya está registrado
    const [existingUser] = await connection.query('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Insertar el usuario en la base de datos
    await connection.query(
      'INSERT INTO Usuarios (nombre_completo, correo, nombre_usuario, contraseña) VALUES (?, ?, ?, ?)',
      [nombre_completo, correo, nombre_usuario, hashedPassword]
    );
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

const SECRET_KEY = 'tu_clave_secreta'; // Cambia esto por una clave secreta segura

export const loginUser = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    if (!correo || !contraseña) {
      return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
    }

    const [user] = await connection.query('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
    if (user.length === 0) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(contraseña, user[0].contraseña);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Genera un token con el ID de usuario
    const token = jwt.sign({ userId: user[0].ID_usuario }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const [users] = await connection.query('SELECT * FROM Usuarios');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
