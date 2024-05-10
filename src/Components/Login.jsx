import React, { useState } from 'react';
import { createCart, login } from '../lib/actions';
import { Link, Redirect } from 'wouter';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { success, data } = await login(email, password);
      if (success) {
        setIsAuthenticated(true);
        const { payload } = data;
        console.log(payload);
        localStorage.setItem('payload', JSON.stringify(payload));
      }
    } catch (error) {
      setError(error.message);
    }
  };  



  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div>{error}</div>}
      <div>
        <p>Don't have an account? <Link href="/register">Register here</Link></p>
      </div>

      {isAuthenticated && <Redirect to={`/products`} />} 
    </div>
  );
}

export default LoginPage;
