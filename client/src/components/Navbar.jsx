import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  // Check auth on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow px-4 py-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">💙 Autism Hub</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>

        {loggedIn ? (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="hover:underline text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="hover:underline">Register</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}
