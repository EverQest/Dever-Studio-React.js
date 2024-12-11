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

// Маршрут для добавления товара в корзину
app.post('/cart', (req, res) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity) {
    return res.status(400).json({ error: 'Необходимо указать userId, productId и quantity' });
  }

  const query = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)';
  db.query(query, [userId, productId, quantity], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Ошибка добавления в корзину' });
    } else {
      res.json({ message: 'Товар успешно добавлен в корзину' });
    }
  });
});

// Маршрут для получения данных корзины
app.get('/cart', (req, res) => {
  const userId = 1;

  const query = `
    SELECT cart.id, cart.quantity, products.name_main AS name, products.price_ts AS price, products.img_ts AS img 
    FROM cart 
    JOIN products ON cart.product_id = products.id 
    WHERE cart.user_id = ?;
  `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Ошибка получения данных корзины' });
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
