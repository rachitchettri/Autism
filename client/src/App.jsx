import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import GamesLibrary from './components/GameLibrary';
import Community from './pages/Community';
import AdminPanel from './pages/AdminPanel';
import Scores from './components/gamescore';
import Profile from './pages/Register/OnboardingPage';

// Example auth check — replace with your real logic!
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // or your auth state
};

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/games"
          element={
            <PrivateRoute>
              <GamesLibrary />
            </PrivateRoute>
          }
        />
        <Route
          path="/community"
          element={
            <PrivateRoute>
              <Community />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
         <Route
          path="/score"
          element={
            <PrivateRoute>
              <Scores />
            </PrivateRoute>
          }
        />
      </Routes>
      
    </BrowserRouter>
  );
}
