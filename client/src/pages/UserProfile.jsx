import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Autism from '../assets/autism.png'

export default function Profile() {
  const [search, setSearch] = useState('');
  const [profiles, setProfiles] = useState([
    { name: 'Sandesh Dhakal', id: 'A4TYU6', active: true },
    { name: 'Shivank Poudel', id: 'A4TYU6', active: false },
    { name: 'Samrat Pokhrel', id: 'A4TYU6', active: false },
    { name: 'Nabin Babu', id: 'A4TYU6', active: false },
    { name: 'Sudip Adhikari', id: 'A4TYU6', active: false },
    { name: 'Sumit Dhakool', id: 'A4TYU6', active: false }
  ]);

  const location = useLocation();

  const handleSwitch = (index) => {
    setProfiles(prev =>
      prev.map((p, i) => ({ ...p, active: i === index }))
    );
  };

  const filteredProfiles = profiles.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full flex font-[\'Google Sans\']">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col p-6 space-y-6 min-h-screen">
      <div className="flex items-center">
        <a href="/">
          <img
            src={Autism}
            alt="Logo"
            className="h-14 md:h-24 w-auto object-contain"
          />
        </a>
      </div>

        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className={`px-4 py-2 rounded ${location.pathname === '/dashboard' ? 'bg-green-800' : 'hover:bg-green-600'}`}>Dashboard</Link>
          <Link to="/progress" className={`px-4 py-2 rounded ${location.pathname === '/progress' ? 'bg-green-800' : 'hover:bg-green-600'}`}>Progress Tracking</Link>
          <Link to="/profile" className={`px-4 py-2 rounded ${location.pathname === '/profile' ? 'bg-green-800' : 'hover:bg-green-600'}`}>Profiles</Link>
          <Link to="/settings" className={`px-4 py-2 rounded ${location.pathname === '/settings' ? 'bg-green-800' : 'hover:bg-green-600'}`}>Settings</Link>
        </nav>

        <button
          className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
          onClick={() => alert('Logging out...')}
        >
          Log out
        </button>
      </aside>

      <main className="flex-1">
       
        {/* Header & Search */}
        <div className="px-12 pt-14 pb-6 bg-white">
          <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">👤 Profiles</h2>
          <p className="text-gray-400 text-sm mb-6">
            Add, view, update or switch between your children’s profiles.
          </p>

          <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center mb-8 bg-white">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Profiles..."
              className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
            />
            <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
          </div>
        </div>

        {/* Switch Profiles Heading */}
        <div className="px-12 pb-4">
          <h3 className="text-2xl font-medium text-[#565656] mb-4">👥 Switch Profiles</h3>
        </div>

        {/* Cards */}
        <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pb-20">
          {filteredProfiles.map((profile, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 w-[285px] h-[118px] shadow-md transition duration-300 transform hover:scale-105 cursor-pointer ${
                profile.active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="text-xs mb-4 text-inherit">ID: {profile.id}</p>

              <div className="flex gap-2">
                <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">VIEW</button>
                <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">EDIT</button>
                <button
                  onClick={() => handleSwitch(index)}
                  className={`border transition ${
                    profile.active ? 'border-white text-white hover:bg-white hover:text-green-600' : 'border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white'
                  } text-xs px-4 py-1 rounded`}
                >
                  SWITCH
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}