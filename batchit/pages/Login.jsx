import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../utils/api';
import Loader from '../components/Loader';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('baatchitUser'));

  // Redirect only if user exists AND we're not already on /chat or login
  if (user && window.location.pathname === '/login') {
    navigate('/chat', { replace: true });
  }
}, []);




  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginUser(form);
      
      if (response.success) {
        localStorage.setItem('baatchitUser', JSON.stringify({
          ...response.user,
          token: response.token
        }));
        navigate('/chat');
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 
                      err.message || 
                      'Login failed. Please try again.';
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white p-6 rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">Login to BaatChit</h2>
      
      {error && (
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={form.password}
          onChange={(e) => setForm({...form, password: e.target.value})}
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? <Loader /> : 'Login'}
        </button>
      </form>

      <p className="text-center">
        Don't have an account?{' '}
        <Link to="/register" className="link link-primary">Register here</Link>
      </p>
    </div>
  );
}