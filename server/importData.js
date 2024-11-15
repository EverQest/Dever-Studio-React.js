const prodList = [
    {
        id: 1,
        name: { 
            main: "4OpToBa DIO}i{uHA",
            cap: "Чорна класика",
            bag: "Чорна класика",
            pants: "Чорна класика",
            souvenir: "Термостакан DEver"
        },
        price: {
            ts: "599 UAH",
            hoodie: "799 UAH",
            cap: "249 UAH",
            bag: "1499 UAH",
            pants: "1199 UAH",
            souvenir: "199 UAH"
        },
        img: {
            img_ts: "t-s_black-4OpToBa DIO}i{uHA.png",
            img_hoodie: "black-4OpToBa DIO}i{uHA_hoodie.png",
            img_cap: "cap_black.png",
            img_bag: "classic_bag.png",
            img_pants: "classic_pants.png",
            img_souvenir: "logo_cup.png"
        },
        img_alt:"Black_classic",
    },
    {
        id: 2,
        name: { 
            main: "Бджола Туги",
            cap: "DEver",
            bag: "Бджола Туги",
            pants: "Titus",
            souvenir: "Titus"
        },
        price: {
            ts: "499 UAH",
            hoodie: "699 UAH",
            cap: "349 UAH",
            bag: "1999 UAH",
            pants: "1599 UAH",
            souvenir: "249 UAH"
        },
        img: {
            img_ts: "t-s_pchela_toski.png",
            img_hoodie: "pchela_toski_hoodie.png",
            img_cap: "cap_white_logo.png",
            img_bag: "pchela_toski_bag.png",
            img_pants: "titus_pants.png",
            img_souvenir: "titus_cup.png"
        },
        img_alt:"Pchela_toski",
    },
    {
        id: 3,
        name: { 
            main: "Бджола Туги Remastered",
            cap: "Clown",
            bag: "Titus DEver",
            souvenir: "Flame"
        },
        price: {
            ts: "599 UAH",
            hoodie: "799 UAH",
            cap: "299 UAH",
            bag: "1999 UAH",
            souvenir: "249 UAH"
        },
        img: {
            img_ts: "t-s_pchela_toski_remastered.png",
            img_hoodie: "pchela_toski_remastered_hoodie.png",
            img_cap: "cap_clown.png",
            img_bag: "logo2_bag.png",
            img_souvenir: "flame_cup.png"
        },
        img_alt:"Pchela_toski",
    },
    {
        id: 4,
        name: { 
            main: "Flame",
            cap: "Біла класика",
            bag: "Flame",
        },
        price: {
            ts: "799 UAH",
            hoodie: "999 UAH",
            cap: "249 UAH",
            bag: "1799 UAH"
        },
        img: {
            img_ts: "t-s_dimarik_flame.png",
            img_hoodie: "flame_hoodie.png",
            img_cap: "cap_white.png",
            img_bag: "falme_bag.png"
        },
        img_alt:"Flame",
    },
    {
        id: 5,
        name: { 
            main: "Titus",
            cap: "Titus",
            bag: "Titus",
        },
        price: {
            ts: "649 UAH",
            hoodie: "849 UAH",
            cap: "249 UAH",
            bag: "2199 UAH",
        },
        img: {
             img_ts: "t-s_titus_logo.png",
             img_hoodie: "titus_hoodie.png",
             img_cap: "cap_titus.png",
             img_bag: "titus_bag.png"
        },
        img_alt:"Titus",
    },
    {
        id: 6,
        name: { 
            main: "Stiker Titus",
            cap: "Flame",
            bag: "Stiker Titus"
        },
        price: {
            ts: "649 UAH",
            hoodie: "849 UAH",
            cap: "349 UAH",
            bag: "1999 UAH",
        },
        img: {
            img_ts: "t-s_titus_logo_stikers.png",
            img_hoodie: "stiker_titus_hoodie.png",
            img_cap: "cap_flame.png",
            img_bag: "stiker_titus_bag.png"
        },
        img_alt:"Stiker_titus",
    },
    {
        id: 7,
        name: { 
            main: "Королівська ніч",
            cap: "Бджола Туги",
            bag: "Frogus"
        },
        price: {
            ts: "849 UAH",
            hoodie: "1099 UAH",
            cap: "299 UAH",
            bag: "2199 UAH ",
        },
        img: {
            img_ts: "t-s_king_night.png",
            img_hoodie: "king_night_hoodie.png",
            img_cap: "cap_pchela_toski_white.png",
            img_bag: "frog_bag.png",
        },
        img_alt:"Stiker_titus",
    },
    {
        id: 8,
        name: { 
            main: "Жива класика",
            cap: "Бджола Туги",
            bag: "DEver",
        },
        price: {
            ts: "199 UAH",
            hoodie: "399 UAH",
            cap: "299 UAH",
            bag: "1799 UAH",
        },
        img: {
            img_ts: "t-s_classic.png",
            img_hoodie: "classic_hoodie.png",
            img_cap: "cap_pchela_toski_black.png",
            img_bag: "logo_bag.png",
        },
        img_alt:"Classic",
    },
];

module.exports = { prodList };

// importData.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin', // замените на ваше имя пользователя MySQL
  password: '12345', // замените на ваш пароль MySQL
  database: 'products_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Подключено к базе данных');

  prodList.forEach(product => {
    const query = `
      INSERT INTO products (
        name_main, name_cap, name_bag, name_pants, name_souvenir,
        price_ts, price_hoodie, price_cap, price_bag, price_pants, price_souvenir,
        img_ts, img_hoodie, img_cap, img_bag, img_pants, img_souvenir,
        img_alt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      product.name.main, product.name.cap, product.name.bag, product.name.pants, product.name.souvenir,
      product.price.ts, product.price.hoodie, product.price.cap, product.price.bag, product.price.pants, product.price.souvenir,
      product.img.img_ts, product.img.img_hoodie, product.img.img_cap, product.img.img_bag, product.img.img_pants, product.img.img_souvenir,
      product.img_alt
    ];

    db.query(query, values, (err) => {
      if (err) throw err;
    });
  });

  console.log('Данные успешно импортированы');
  db.end();
});
