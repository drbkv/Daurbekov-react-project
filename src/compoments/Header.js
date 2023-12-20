

import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Header.css';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$ </p>
  </div>)
}
const showNothing = () => {
  return (<div className='empty'>
    <h2>В корзине нет товаров</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isSertif = location.pathname === '/Sertificat';

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  }

  return (
    <header>
      <div>
        <span className='logo'>Watch Store</span>
        <ul className='nav'>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/aboutus">О нас</Link></li>
          <li><Link to="/partner">Партнеры</Link></li>
          <li><Link to="/Sertificat">Сертификат</Link></li>
          <li><Link to="/WatchServiceCenter">Сервис</Link></li>
          <li><Link to="/LoginForm">Кабинет</Link></li>
          <li><Link to="/Answer">Q/A</Link></li>
          <li><Link to="/Zapis">Запись</Link></li>
        
        </ul>
        <Outlet />

        {(isMainPage || isSertif) && (
          <>
            <FaShoppingCart onClick={toggleCart} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
          </>
        )}
      </div>
    </header>
  )
}
