// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { 
//   Home, 
//   TrendingUp, 
//   User, 
//   Settings, 
//   LogOut,
//   Gamepad2,
//   BookOpen,
//   Brain,
//   MessageCircle,
//   Shapes,
//   Type
// } from 'lucide-react';

// const Sidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear authentication data
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     // Navigate to login page
//     navigate('/login');
//   };

//   const menuItems = [
//     {
//       path: '/dashboard',
//       name: 'Dashboard',
//       icon: Home,
//       description: 'Home & Overview'
//     },
//     {
//       path: '/progress',
//       name: 'Progress',
//       icon: TrendingUp,
//       description: 'Track Learning'
//     },
//     {
//       path: '/users',
//       name: 'Profiles',
//       icon: User,
//       description: 'Manage Kids'
//     },
//     {
//       path: '/settings',
//       name: 'Settings',
//       icon: Settings,
//       description: 'Preferences'
//     }
//   ];

//   const gameItems = [
//     {
//       path: '/games/behaviour',
//       name: 'Behaviour',
//       icon: Brain,
//       color: 'text-blue-400'
//     },
//     {
//       path: '/games/pronounce',
//       name: 'Speech',
//       icon: MessageCircle,
//       color: 'text-green-400'
//     },
//     {
//       path: '/games/shapes',
//       name: 'Shapes',
//       icon: Shapes,
//       color: 'text-purple-400'
//     },
//     {
//       path: '/games/abcd',
//       name: 'ABCD Words',
//       icon: Type,
//       color: 'text-orange-400'
//     }
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//    <aside className="w-64 bg-green-700 text-white flex flex-col">
//   {/* Header */}
//   <div className="p-6 border-b border-green-600">
//     <div className="flex items-center space-x-3">
//       <div className="w-10 h-10 bg-white text-green-700 rounded-lg flex items-center justify-center">
//         <BookOpen className="w-5 h-5" />
//       </div>
//       <div>
//         <h1 className="text-lg font-bold">UNGA BUNGA</h1>
//       </div>
//     </div>
//   </div>

//   {/* Navigation */}
//   <nav className="flex-1 p-4 space-y-6">
//     {/* Main Menu */}
//     <div className="space-y-4">
//       {menuItems.map((item) => {
//         const Icon = item.icon;
//         return (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`flex items-center space-x-3 px-4 py-2 rounded-md ${
//               isActive(item.path)
//                 ? 'bg-green-800 font-semibold'
//                 : 'hover:bg-green-800'
//             }`}
//           >
//             <Icon className="w-5 h-5" />
//             <span>{item.name}</span>
//           </Link>
//         );
//       })}
//     </div>

//     {/* Games Menu */}
//     <div className="space-y-4">
//       {gameItems.map((item) => {
//         const Icon = item.icon;
//         return (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`flex items-center space-x-3 px-4 py-2 rounded-md ${
//               isActive(item.path)
//                 ? 'bg-green-800 font-semibold'
//                 : 'hover:bg-green-800'
//             }`}
//           >
//             <Icon className="w-5 h-5" />
//             <span>{item.name}</span>
//           </Link>
//         );
//       })}
//     </div>
//   </nav>

//   {/* Footer */}
//   <div className="p-4">
//     <button
//       onClick={handleLogout}
//       className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold"
//     >
//       <LogOut className="w-5 h-5" />
//       <span>Log out</span>
//     </button>
//   </div>
// </aside>

//   );
// };

// export default Sidebar;


import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  User, 
  Settings, 
  LogOut,
  BookOpen,
  Brain,
  MessageCircle,
  Shapes,
  Type
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Get role from localStorage
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role'); // Optional, clean up
    navigate('/login');
  };

  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: Home,
      description: 'Home & Overview'
    },
    {
      path: '/progress',
      name: 'Progress',
      icon: TrendingUp,
      description: 'Track Learning'
    },
    {
      path: '/users',
      name: 'Profiles',
      icon: User,
      description: 'Manage Kids'
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: Settings,
      description: 'Preferences'
    }
  ];

  const gameItems = [
    {
      path: '/games/behaviour',
      name: 'Behaviour',
      icon: Brain,
      color: 'text-blue-400'
    },
    {
      path: '/games/pronounce',
      name: 'Speech',
      icon: MessageCircle,
      color: 'text-green-400'
    },
    {
      path: '/games/shapes',
      name: 'Shapes',
      icon: Shapes,
      color: 'text-purple-400'
    },
    {
      path: '/games/abcd',
      name: 'ABCD Words',
      icon: Type,
      color: 'text-orange-400'
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-green-700 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-green-600">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white text-green-700 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold">UNGA BUNGA</h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-6">
        {/* Main Menu */}
        <div className="space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-2 rounded-md ${
                  isActive(item.path)
                    ? 'bg-green-800 font-semibold'
                    : 'hover:bg-green-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Games Menu - Hidden for parents */}
        {role !== 'parent' && (
          <div className="space-y-4">
            {gameItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-md ${
                    isActive(item.path)
                      ? 'bg-green-800 font-semibold'
                      : 'hover:bg-green-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold"
        >
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
