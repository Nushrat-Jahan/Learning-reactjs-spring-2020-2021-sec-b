import React, { useState } from 'react';

const Login = ({ leUserLogin }) => {
  const [username, setUsername] = useState('Test');

  const loginUser = (e) => {
    if (!username) return alert('enter your username');
    e.preventDefault();
    leUserLogin(username);
  };

  return (
    <div className='container'>
      <form onSubmit={loginUser}>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' name='username' id='' />
        <label>Password</label>
        <input type='password' name='password' id='' />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
