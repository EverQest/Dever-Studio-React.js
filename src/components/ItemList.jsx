import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ItemList = (type) => {
  let typeOf = type.type.type;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Функция для загрузки данных с сервера
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Не удалось загрузить данные');
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);
  

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredItems = products.filter((item) => {
    switch (typeOf) {
      case 'ts':
        return item.price_ts !== '';
      case 'hoodie':
        return item.price_hoodie !== '';
      case 'pants':
        return item.price_pants !== '';
      case 'cap':
        return item.price_cap !== '';
      case 'bag':
        return item.price_bag !== '';
      case 'souvenir':
        return item.price_souvenir !== '';
      default:
        return false;
    }
  });

  // Render two items for "pants" and three items for "souvenir"
  let renderedItems = filteredItems;
  if (typeOf === 'pants') {
    renderedItems = filteredItems.slice(0, 2);
  } else if (typeOf === 'souvenir') {
    renderedItems = filteredItems.slice(0, 3);
  }

  // Функция для добавления товара в корзину
  const handleAddToCart = async (productId) => {
    try {
      const userId = 1;
      const quantity = 1;

      await axios.post('http://localhost:3001/cart', {
        userId,
        productId,
        quantity
      });

      console.log('Товар добавлен в корзину');
      // Добавьте логику для уведомления пользователя или обновления UI
    } catch (error) {
      console.log('Ошибка при добавлении товара в корзину:', error);
    }
  };

  return (
    renderedItems.map((item) => {
      let price, imgSrc, name;

      switch (typeOf) {
        case 'ts':
          price = item.price_ts;
          imgSrc = item.img_ts;
          name = item.name_main;
          break;
        case 'hoodie':
          price = item.price_hoodie;
          imgSrc = item.img_hoodie;
          name = item.name_main;
          break;
        case 'pants':
          price = item.price_pants;
          imgSrc = item.img_pants;
          name = item.name_pants;
          break;
        case 'cap':
          price = item.price_cap;
          imgSrc = item.img_cap;
          name = item.name_cap;
          break;
        case 'bag':
          price = item.price_bag;
          imgSrc = item.img_bag;
          name = item.name_bag;
          break;
        case 'souvenir':
          price = item.price_souvenir;
          imgSrc = item.img_souvenir;
          name = item.name_souvenir;
          break;
        default:
          price = '';
          imgSrc = '';
          name = '';
      }
      
      return (
        <div className='card_container'>
          <div className="card card_hover" key={item.id}>
            <Link to={`/product/${typeOf}/${name}/${item.id}/${imgSrc}/${price}`} className="img_card">
              <img src={`/images/${typeOf}/${imgSrc}`} alt={item.img_alt} />
            </Link>
          </div>
          <div className='info_container'>
            <div className='margin_left'>
              <div className="card_name">{name}</div>
              <div className='line'></div>
              <div className="price_container">
                <span className="price">{price}</span>
            </div>
            </div>
            <div className='icons'>
              <img className='cart_icon' src="/images/icons/heart.png" alt="heart_icon" />
              <img className='cart_icon' onClick={() => handleAddToCart(item.id)} src="/images/icons/cart.png" alt="cart_icon" />         
            </div>
          </div>
        </div>
      );
    })
  );
};

export default ItemList;
