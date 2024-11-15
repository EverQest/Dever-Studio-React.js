// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Подключение к базе данных MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '12345',
  database: 'products_db'
});

// Подключаемся к базе данных
db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключено к базе данных MySQL');
});

// API для получения всех товаров
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// Маршрут для входа
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
          return res.status(500).send('Ошибка базы данных');
      }

      if (results.length === 0) {
          return res.status(400).send('Неверный логин или пароль');
      }

      const user = results[0];

      // Создание токена
      const token = jwt.sign({ id: user.id, username: user.username }, 'your_secret_key', {
          expiresIn: '1h',
      });

      res.json({ message: 'Успешный вход', token });
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
