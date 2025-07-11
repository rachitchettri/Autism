import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';
import SignUpImage from '../assets/P.png';

export default function SignUp() {
  const navigate = useNavigate();

  const [mode, setMode] = useState('organization'); // 'organization' or 'parent'

  const [orgForm, setOrgForm] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [parentForm, setParentForm] = useState({
    email: '',
    password: '',
  });

  const handleOrgChange = e => {
    const { name, value, type, checked } = e.target;
    setOrgForm({ ...orgForm, [name]: type === 'checkbox' ? checked : value });
  };

  const handleParentChange = e => {
    const { name, value } = e.target;
    setParentForm({ ...parentForm, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formToSubmit = mode === 'organization' ? orgForm : parentForm;
      const res = await register(formToSubmit);
      alert(res.data.message);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Registration failed.');
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
            {mode === 'organization' ? (
              <>
                {/* Org Email */}
                <div>
                  <label className="block mb-1 text-xs font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={orgForm.email}
                    onChange={handleOrgChange}
                    placeholder="mail@abc.com"
                    required
                    className="border border-gray-300 px-4 py-2.5 w-full rounded-lg"
                  />
                </div>

                {/* Org Password */}
                <div>
                  <label className="block mb-1 text-xs font-semibold text-gray-700">
                    Set Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={orgForm.password}
                    onChange={handleOrgChange}
                    placeholder="*************"
                    required
                    className="border border-gray-300 px-4 py-2.5 w-full rounded-lg"
                  />
                </div>

                {/* Remember Me */}
                <div className="flex items-center text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={orgForm.remember}
                      onChange={handleOrgChange}
                      className="accent-green-600"
                    />
                    <span className="text-gray-700">Remember Me</span>
                  </label>
                </div>
              </>
            ) : (
              <>
                {/* Parent Email */}
                <div>
                  <label className="block mb-1 text-xs font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={parentForm.email}
                    onChange={handleParentChange}
                    placeholder="parent@mail.com"
                    required
                    className="border border-gray-300 px-4 py-2.5 w-full rounded-lg"
                  />
                </div>

                {/* Parent Password */}
                <div>
                  <label className="block mb-1 text-xs font-semibold text-gray-700">
                    Set Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={parentForm.password}
                    onChange={handleParentChange}
                    placeholder="*************"
                    required
                    className="border border-gray-300 px-4 py-2.5 w-full rounded-lg"
                  />
                </div>
              </>
            )}

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
