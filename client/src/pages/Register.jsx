import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api'; // ✅ use your custom API instance
import SignUpImage from '../assets/P.png';

export default function SignUp() {
  const navigate = useNavigate();

  const [mode, setMode] = useState('organization'); // 'organization' or 'parent'

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        role: mode,
      };

      const res = await register(payload); // ✅ use defined API function
      alert(res.data.message || 'Registration successful!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md bg-white p-8">
          {/* Toggle */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMode('organization')}
              className={`px-4 py-2 rounded-full border ${
                mode === 'organization'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              Organization
            </button>
            <button
              onClick={() => setMode('parent')}
              className={`px-4 py-2 rounded-full border ${
                mode === 'parent'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              Parent
            </button>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {mode === 'organization' ? 'Organization Sign Up' : 'Parent Sign Up'}
            </h2>
            <p className="text-gray-500 text-sm">
              Let’s start the journey and make an impact
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="mail@abc.com"
                required
                className="border border-gray-300 px-4 py-2.5 w-full rounded-lg"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Set Password
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="*************"
                required
                className="border border-gray-300 px-4 py-2.5 w-full rounded-lg"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="*************"
                required
                className="border border-gray-300 px-4 py-2.5 w-full rounded-lg"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-green-700"
            >
              Let’s Go
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center bg-gray-100">
        <img
          src={SignUpImage}
          alt="Sign Up Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
