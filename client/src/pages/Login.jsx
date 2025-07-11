import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👉 import this!
import { login } from '../api';

export default function Login() {
  const navigate = useNavigate(); // 👉 initialize navigate

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await login(form);

      // ✅ Store the token
      localStorage.setItem('token', res.data.token);

      alert(`Welcome ${res.data.user.name}!\nRole: ${res.data.user.role}`);
      console.log('Login success:', res.data);

      // ✅ Redirect to dashboard
      navigate('/dashboard');

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
            placeholder="email@example.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
