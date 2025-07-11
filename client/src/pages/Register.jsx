import { useState } from 'react';
import { register } from '../api';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'parent',
    childName: '',
    childAge: '',
    orgName: '',
    orgAddress: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await register(form);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Registration failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
            placeholder="Your Name"
            required
          />
        </div>

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

        <div>
          <label className="block mb-1 text-sm">Register as:</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          >
            <option value="parent">Parent</option>
            <option value="kid">Kid</option>
            <option value="organization">Organization</option>
          </select>
        </div>

        {form.role === 'parent' && (
          <>
            <div>
              <label className="block mb-1 text-sm">Child Name</label>
              <input
                name="childName"
                value={form.childName}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Child's Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Child Age</label>
              <input
                name="childAge"
                type="number"
                min="1"
                max="18"
                value={form.childAge}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Child's Age"
              />
            </div>
          </>
        )}

        {form.role === 'organization' && (
          <>
            <div>
              <label className="block mb-1 text-sm">Organization Name</label>
              <input
                name="orgName"
                value={form.orgName}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Organization Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Organization Address</label>
              <input
                name="orgAddress"
                value={form.orgAddress}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Organization Address"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
