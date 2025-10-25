import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/Provider';
export const Login = () => {
  const {setLogin,login}=useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    const adminEmail = import.meta.env.VITE_ADMIN_ACCOUNT;
    const adminPassword = import.meta.env.VITE_ADMIN_ACCOUNT_PASSWORD;
    if (email === adminEmail && password === adminPassword) {
      console.log('Login successful');
      setError('');
      setLogin(true);
      // Redirect to dashboard or another page

      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  }
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  return (
  
  <>
    {setLogin === true && navigate('/dashboard')}
    <div className="login-header">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  </>
  )
}
