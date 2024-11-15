import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Visa from '../source/payment/visa.png'
import Mastercard from '../source/payment/mastercard.png'
import Privat24 from '../source/payment/privat24.png'

export const PageToBuy = () => {
  const { type, name, id, img, price } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSize, setCurrentSize] = useState('M');
  const modalRef = useRef(null);

  window.scrollTo(0, 0);

  const toggleSize = (size) => {
    if (currentSize === size) {
      setCurrentSize(null);
    } else {
      setCurrentSize(size);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    };
  
    document.addEventListener('mousedown', handleOutsideClick);
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [toggleModal]);
  
  return (
    <div className='wrap'>
      <div className='img_card img_card_item'>
        <img src={`/images/${type}/${img}`} alt="item" key={id} />
      </div>
      <div className='info_wrap'>
        <div className='title_item'>{name}</div>
        <div className='price_item'>{price}</div>
        <form>
          <p>Виберіть колір:</p>
          <input type="radio" name="color" id="color1" value="Button" />
          <input type="radio" name="color" id="color2" value="Button" />
        </form>
        <div>
          <p>Розмір:</p>
          <div className='size_item'>
            <span
              onClick={() => toggleSize('S')}
              className={currentSize === 'S' ? 'current_item' : ''}
            >
              S
            </span>
            <span
              onClick={() => toggleSize('M')}
              className={currentSize === 'M' ? 'current_item' : ''}
            >
              M
            </span>
            <span
              onClick={() => toggleSize('L')}
              className={currentSize === 'L' ? 'current_item' : ''}
            >
              L
            </span>
            <span
              onClick={() => toggleSize('XL')}
              className={currentSize === 'XL' ? 'current_item' : ''}
            >
              XL
            </span>
          </div>
        </div>
        <div>
          <button className='btn_item' onClick={toggleModal}>Придбати</button>  
          {isModalOpen && (
            <div className='modal' ref={modalRef}>
              <div className='exit_item' onClick={toggleModal}> X </div>
              <div className='inputs_item'>
                <div style={{color:"#fff"}}>Оформлення заказу</div>
                <input type='text' placeholder='Ваша країна' />
                <input type='text' placeholder='Ваше місто' />
                <input type='text' placeholder='Ваш поштовий індекс' />
                <input type='text' placeholder='Вашa пошта' />
                <p style={{color:'#fff', fontSize:'15px', fontStyle:'italic'}}>*Ця інформація буде надіслана нам для поточної перевірки</p>
                <button className='btn_item_modal'>Оформити заказ</button>  
              </div>
            </div>
            )}
          <div className='payment_item'>
            <img style={{width:'50px', padding:'10px'}} src={Visa} alt='Visa' />
            <img style={{width:'50px', padding:'10px'}} src={Mastercard} alt='MasterCard' />
            <img style={{width:'50px', padding:'10px'}} src={Privat24} alt='Privat24' />
          </div>
        </div>
      </div>
    </div>
  );
};