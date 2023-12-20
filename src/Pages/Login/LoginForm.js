

import React, { useState } from 'react';
import './LoginForm.css';
import Header from '../../compoments/Header';
import {Link} from 'react-router-dom';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className='main-login-form'>
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <Link to='/user'>
            <button type="submit">Submit</button></Link>
          </form>
        </div>
       
      </div>

    </div>
  );
};

export default LoginForm;
