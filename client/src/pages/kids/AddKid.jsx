import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addKid } from '../api'; // ✅ Your API call to POST /api/kids
import KidImage from '../assets/kid_illustration.png'; // Replace with your image path

export default function AddKid() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addKid(form); // 🔐 Must send token in headers
      alert('Kid added successfully!');
      navigate('/dashboard'); // ✅ Update route if needed
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message || 'Failed to add kid. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Form Side */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md bg-white p-8">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Add New Kid
            </h2>
            <p className="text-gray-500 text-sm">
              Link a child under your organization
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Kid's Name
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Aarya Sharma"
                required
                className="border border-gray-300 px-4 py-2.5 w-full rounded-lg"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg text-base font-semibold hover:bg-green-700"
            >
              Add Kid
            </button>
          </form>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center bg-gray-100">
        <img
          src={KidImage}
          alt="Add Kid Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
