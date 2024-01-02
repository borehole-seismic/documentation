import React, { useState } from 'react';
import styles from './login.module.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === 'borehole seismic'.toLowerCase() 
    
    && password === 'Borehole_admin') {
        localStorage.setItem('isLoggedIn', 'true');
      // Redirect to the homepage if the credentials are correct
      window.location.href = '/documentation';
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (

<div className={styles.loginContainer}>
<nav className={styles.navbar}>
  {/* Include your logo here */}
  <img src="/documentation/img/BoreholeLogo.png" alt="Borehole Logo" className={styles.logo} />
</nav>
<div className={styles.titleContainer}>
        <h1 className={styles.title}>Documentation Access</h1>
        <p className={styles.subtitle}>Please log in to view the documentations</p>
      </div>
<form onSubmit={handleLogin} className={styles.loginForm}>
  <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.inputField} />
  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} />
  <button type="submit" className={styles.submitButton}>Login</button>
  {error && <p className={styles.errorMessage}>{error}</p>}
</form>
</div>
  );
};

export default LoginPage;
