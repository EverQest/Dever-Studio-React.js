import { React, useState, useEffect } from 'react';
import { prodList } from '../data/data.ts';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const ItemList = (type) => {
  const typeOf = type.type.type;
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
  // Filter the items based on the type
  const filteredItems = prodList.filter((item) => {
    switch (typeOf) {
      case 'ts':
        return item.price.ts !== '';
      case 'hoodie':
        return item.price.hoodie !== '';
      case 'pants':
        return item.price.pants !== '';
      case 'cap':
        return item.price.cap !== '';
      case 'bag':
        return item.price.bag !== '';
      case 'souvenir':
        return item.price.souvenir !== '';
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

  return (
    renderedItems.map((item) => {
      let price, imgSrc, name;

      switch (typeOf) {
        case 'ts':
          price = item.price.ts;
          imgSrc = item.img.img_ts;
          name = item.name.main;
          break;
        case 'hoodie':
          price = item.price.hoodie;
          imgSrc = item.img.img_hoodie;
          name = item.name.main;
          break;
        case 'pants':
          price = item.price.pants;
          imgSrc = item.img.img_pants;
          name = item.name.pants;
          break;
        case 'cap':
          price = item.price.cap;
          imgSrc = item.img.img_cap;
          name = item.name.cap;
          break;
        case 'bag':
          price = item.price.bag;
          imgSrc = item.img.img_bag;
          name = item.name.bag;
          break;
        case 'souvenir':
          price = item.price.souvenir;
          imgSrc = item.img.img_souvenir;
          name = item.name.souvenir;
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
              <Link to={`/product/${typeOf}/${name}/${item.id}/${imgSrc}/${price}`}>
                <img className='cart_icon' src="/images/icons/online-shopping.png" alt="cart_icon" />
              </Link>
            </div>
          </div>
        </div>
      );
    })
  );
}
