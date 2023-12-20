import React, { useState } from 'react';
import Header from '../../compoments/Header';
import './UserProfile.css';
import ContactUs from '../AboutUs/ContactUs/ContactUs';
import Footer from '../../compoments/Footer';
import { Link } from 'react-router-dom';


const UserProfile = () => {
  const [isLoggedIn, setLoggedIn] = useState(true); 

  const userInfo = {
    firstName: 'Рамазан',
    lastName: 'Даурбеков',
    phoneNumber: '+77004446212',
    email: 'Daurbekov.001@mail.ru',
    address: 'Маргулана 21',
  };

  const handleLogout = () => {
 
    setLoggedIn(false);
  };

  return (
    <div className="user-profile-container">
      <Header />
      <div className="user-profile-content">
        <div className="user-photo-container">
          <img src="/img/ава.jpeg" alt="User Photo" className="user-photo" />
        </div>
        <div className="user-info">
          <div className="user-info-item">
            <label className="info-label">Имя: </label>
            <span className="info-text">{userInfo.firstName}</span>
          </div>
          <div className="user-info-item">
            <label className="info-label">Фамилия:</label>
            <span className="info-text">{userInfo.lastName}</span>
          </div>
          <div className="user-info-item">
            <label className="info-label">Телефон:</label>
            <span className="info-text">{userInfo.phoneNumber}</span>
          </div>
          <div className="user-info-item">
            <label className="info-label">Email:</label>
            <span className="info-text">{userInfo.email}</span>
          </div>
          <div className="user-info-item">
            <label className="info-label">Адрес:</label>
            <span className="info-text">{userInfo.address}</span>
          </div>
          <Link to={'/loginform'}>
          <button className="logout-button" onClick={handleLogout}>
            Выйти
          </button>
          </Link>
        
        </div>
      </div>
      <div className='Contact-text'>
      <h2>Есть вопросы?</h2>
      <h4>Заполни ниже</h4>
      <p> </p>
      <p>|</p>
      <p>\/</p>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default UserProfile;

