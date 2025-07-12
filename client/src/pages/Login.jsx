// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../api';
// import LoginImage from '../assets/P.png';

// export default function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: '', password: '', remember: false });

//   const handleChange = e => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await login(form);
//       localStorage.setItem('token', res.data.token);
//       alert(`Welcome ${res.data.user.name}!\nRole: ${res.data.user.role}`);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.error || 'Login failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left Side - Login Form */}
//       <div className="flex-1 flex items-center justify-center p-8 bg-white">
//         <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
//           {/* Heading + Subheading */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">Login to your Account</h2>
//             <p className="text-gray-500 text-sm">
//               Let’s get back to where we were actually making an impact
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block mb-1 text-xs font-semibold text-gray-700 tracking-wide">EMAIL</label>
//               <input
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="mail@abc.com"
//                 required
//                 className="border border-gray-300 px-4 py-2.5 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block mb-1 text-xs font-semibold text-gray-700 tracking-wide">PASSWORD</label>
//               <input
//                 name="password"
//                 type="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="*************"
//                 required
//                 className="border border-gray-300 px-4 py-2.5 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
//               />
//             </div>

//             {/* Remember Me + Forgot Password */}
//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="remember"
//                   checked={form.remember}
//                   onChange={handleChange}
//                   className="accent-green-600"
//                 />
//                 <span className="text-gray-700">Remember Me</span>
//               </label>
//               <a href="/forgot-password" className="text-green-600 hover:underline">
//                 Forgot Password?
//               </a>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-200"
//             >
//               LOGIN
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="hidden md:flex flex-1 h-full items-center justify-center bg-gray-100">
//         <img
//           src={LoginImage}
//           alt="Login Illustration"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../api';
// import LoginImage from '../assets/P.png';

// export default function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: '', password: '', remember: false });

//   const handleChange = e => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await login({
//         email: form.email,
//         password: form.password,
//       });

//       localStorage.setItem('token', res.data.token);

//       const { role, f_name, l_name, org_name } = res.data.user;
//       const displayName = role === 'organization' ? org_name || 'Organization' : `${f_name || ''} ${l_name || ''}`.trim();

//       alert(`Welcome ${displayName}!\nRole: ${role}`);
//       navigate('/profile');
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || 'Login failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left Side - Login Form */}
//       <div className="flex-1 flex items-center justify-center p-8 bg-white">
//         <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
//           {/* Heading + Subheading */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">Login to your Account</h2>
//             <p className="text-gray-500 text-sm">
//               Let’s get back to where we were actually making an impact
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block mb-1 text-xs font-semibold text-gray-700 tracking-wide">EMAIL</label>
//               <input
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="mail@abc.com"
//                 required
//                 className="border border-gray-300 px-4 py-2.5 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block mb-1 text-xs font-semibold text-gray-700 tracking-wide">PASSWORD</label>
//               <input
//                 name="password"
//                 type="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="*************"
//                 required
//                 className="border border-gray-300 px-4 py-2.5 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
//               />
//             </div>

//             {/* Remember Me + Forgot Password */}
//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="remember"
//                   checked={form.remember}
//                   onChange={handleChange}
//                   className="accent-green-600"
//                 />
//                 <span className="text-gray-700">Remember Me</span>
//               </label>
//               <a href="/forgot-password" className="text-green-600 hover:underline">
//                 Forgot Password?
//               </a>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-200"
//             >
//               LOGIN
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="hidden md:flex flex-1 h-full items-center justify-center bg-gray-100">
//         <img
//           src={LoginImage}
//           alt="Login Illustration"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import {jwtDecode} from 'jwt-decode';
import LoginImage from '../assets/P.png';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.clear();
          alert('Session expired. Please log in again.');
          navigate('/login');
        } else {
          navigate('/profile'); // Already logged in
        }
      } catch (err) {
        console.error('Token decode error:', err);
        localStorage.clear();
      }
    }
  }, [navigate]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await login({
        email: form.email,
        password: form.password,
      });

      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role); // ✅ Save role in localStorage

      const { role, f_name, l_name, org_name } = user;
      const displayName =
        role === 'organization'
          ? org_name || 'Organization'
          : `${f_name || ''} ${l_name || ''}`.trim();

      alert(`Welcome ${displayName}!\nRole: ${role}`);
      navigate('/profile');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Login to your Account</h2>
            <p className="text-gray-500 text-sm">
              Let’s get back to where we were actually making an impact
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700 tracking-wide">EMAIL</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="mail@abc.com"
                required
                className="border border-gray-300 px-4 py-2.5 w-full rounded-lg focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700 tracking-wide">PASSWORD</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="*************"
                required
                className="border border-gray-300 px-4 py-2.5 w-full rounded-lg focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="accent-green-600"
                />
                <span className="text-gray-700">Remember Me</span>
              </label>
              <a href="/forgot-password" className="text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center bg-gray-100">
        <img src={LoginImage} alt="Login Illustration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
