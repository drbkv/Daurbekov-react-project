import React, { useState, useEffect } from 'react';
import './Zapis.css';
import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';

const Zapis = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    issue: '',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  const handleInputChange = (field, value) => {
    setNewAppointment((prevAppointment) => ({
      ...prevAppointment,
      [field]: value,
    }));
  };

  const handleAddAppointment = () => {
    if (
      newAppointment.name &&
      newAppointment.email &&
      newAppointment.phone &&
      newAppointment.brand &&
      newAppointment.model &&
      newAppointment.issue
    ) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment({
        name: '',
        email: '',
        phone: '',
        brand: '',
        model: '',
        issue: '',
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="app-container2">
      <div className="api-users-container">
        <h2>Пользователи из API</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="api-user">
              {`Имя: ${user.first_name}, Фамилия: ${user.last_name}, Email: ${user.email}`}
            </li>
          ))}
        </ul>
      </div>
        <div className="questions-container2">
          <h2>Записи на ремонт</h2>
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>
                {`Имя: ${appointment.name}, Телефон: ${appointment.phone}, Модель часов: ${appointment.model}`}
              </li>
            ))}
          </ul>
        </div>

        <div className="answer-container2">
          <h2>Добавить запись</h2>
          <form>
    <label>
      Имя:
      <input
        type="text"
        value={newAppointment.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        required
      />
    </label>
    <br />
    <label>
      Email:
      <input
        type="email"
        value={newAppointment.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        required
      />
    </label>
    <br />
    <label>
      Телефон:
      <input
        type="tel"
        value={newAppointment.phone}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        required
      />
    </label>
    <br />
    <label>
      Марка часов:
      <input
        type="text"
        value={newAppointment.brand}
        onChange={(e) => handleInputChange('brand', e.target.value)}
        required
      />
    </label>
    <br />
    <label>
      Модель часов:
      <input
        type="text"
        value={newAppointment.model}
        onChange={(e) => handleInputChange('model', e.target.value)}
        required
      />
    </label>
    <br />
    <label>
      Описание проблемы:
      <textarea
        value={newAppointment.issue}
        onChange={(e) => handleInputChange('issue', e.target.value)}
        required
      />
    </label>
    <br />
    <button onClick={handleAddAppointment}>Добавить запись</button>
  </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Zapis;