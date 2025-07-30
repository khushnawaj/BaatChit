import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/api'; // Make sure this returns actual API result (axios/fetch)
import '../src/index.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('baatchitUser');
    if (user) {
      navigate('/chat');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginUser(form);

      // Ensure response is structured correctly
      if (response?.success && response?.user) {
        localStorage.setItem('baatchitUser', JSON.stringify(response.user));
        navigate('/chat');
      } else {
        const msg =
          typeof response?.message === 'string'
            ? response.message
            : 'Invalid credentials or server error';
        setError(msg);
      }
    } catch (err) {
      const serverError =
        err?.response?.data?.message || err?.message || 'Network error. Try again.';
      setError(serverError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white p-6 rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">Login to Baat-Chit</h2>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className={`btn w-full ${loading ? 'btn-disabled' : 'btn-primary'}`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
