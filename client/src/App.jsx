import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import ABCD from '../public/games/abc';

import Scores from './components/gamescore';
import Profile from './pages/Register/OnboardingPage';
import Profile1 from './pages/Register/learningFocus';
import Profile2  from './pages/Register/lastreg';
import Profiles from './pages/UserProfile';
import ShapesGame from '../public/games/Shape';
import BehaviourGame from '../public/games/EmotionMatchingGame';
import PronounceGame from '../public/games/pronounce';
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
        <Route path="/games/shapes" element={<ShapesGame />} />
        <Route path="/games/behaviour" element={<BehaviourGame />} />
        <Route path="/games/pronounce" element={<PronounceGame />} />
        <Route path="/games/abcd" element={<ABCD />} />
     
        <Route path='/profile' element={
          
          <PrivateRoute>
          <Profile/>
          </PrivateRoute>
          
          } />
        <Route path='/profile1' element={
          <PrivateRoute>
          <Profile1 />
          </PrivateRoute>
          } />
        <Route path='/profile2' element={
          
         <PrivateRoute>
          <Profile2 />
          </PrivateRoute>
          
          } />
        <Route path='/users' element={
          
         <PrivateRoute>
          <Profiles />
          </PrivateRoute>
          
          } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profiles />} />
      

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
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
