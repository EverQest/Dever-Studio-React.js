// Cart.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cart');
        setCartItems(response.data);
        setLoading(false);
      } catch (err) {
        setError('Не удалось загрузить данные корзины');
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="cart-container">
      <h2>Ваша Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart_item">
            <img src={`/images/ts/${item.img}`} alt={item.name} className="cart_item_image" />
            <div className="cart_item_details">
              <h3>{item.name}</h3>
              <p>Цена: {item.price}</p>
              <p>Количество: {item.quantity}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
