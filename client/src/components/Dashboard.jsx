// import { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Link, useNavigate } from 'react-router-dom';
// import { api } from '../api';

// export default function Dashboard() {
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     api
//       .get('/games/my-progress')
//       .then((res) => setRecords(res.data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   const sortedRecords = [...records].sort(
//     (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//   );

//   const labels = sortedRecords.map((r) =>
//     new Date(r.createdAt).toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//     })
//   );

//   const scores = sortedRecords.map((r) => r.score);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Score',
//         data: scores,
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-green-700 text-white flex flex-col p-6 space-y-6">
//         <h1 className="text-xl font-bold mb-8"></h1>

//         <nav className="flex flex-col gap-4">
//           <Link to="/dashboard" className="hover:bg-green-600 px-4 py-2 rounded">Dashboard</Link>
//           <Link to="/progress" className="hover:bg-green-600 px-4 py-2 rounded">Progress Tracking</Link>
//           <Link to="/users" className="hover:bg-green-600 px-4 py-2 rounded">Profiles</Link>
//           <Link to="/settings" className="hover:bg-green-600 px-4 py-2 rounded">Settings</Link>
          
//         </nav>

//         <button
//           className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
//           onClick={() => alert('Logging out...')}
//         >
//           Log out
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-[#EFEFEF] p-10 relative">
//         <h2 className="text-3xl font-semibold text-blue-600 mb-2">
//           👋 Hi Kid, Ready to Learn?
//         </h2>
//         <p className="text-sm text-gray-500 mb-6">OVERVIEW</p>

//         {/* Recommended Card */}
//         <div className="w-full bg-gradient-to-r from-green-500 to-green-900 rounded-2xl p-6 text-white mb-10 shadow-md">
//           <h3 className="text-sm tracking-widest mb-2">RECOMMENDED</h3>
//           <h2 className="text-4xl font-semibold">🧩 Shapes Sorting Game</h2>
//           <p className="text-xs mt-2 text-gray-200">Get your hands dirty with shapes</p>
//           <button 
//             onClick={() => navigate('/games/shapes')}
//             className="mt-4 bg-black px-4 py-2 rounded-lg text-xs font-bold"
//           >
//             START NOW
//           </button>
//         </div>

//         {/* Continue Learning Section */}
//         <div className="mb-10">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Continue Learning</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Behaviour & Emotions Card */}
//             <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
//               <h2 className="text-lg font-semibold mb-2">😊 Behaviour & Emotions</h2>
//               <p className="text-sm">
//                 Helps children understand emotions and build positive behavior step by step.
//               </p>
//               <button 
//                 onClick={() => navigate('/games/behaviour')}
//                 className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
//               >
//                 START NOW
//               </button>
//             </div>

//             {/* Speech & Words Card */}
//             <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
//               <h2 className="text-lg font-semibold mb-2">🔊 Speech & Words</h2>
//               <p className="text-sm">
//                 Helps children learn simple words and practice speaking with easy, interactive activities.
//               </p>
//               <button 
//                 onClick={() => navigate('/games/pronounce')}
//                 className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
//               >
//                 START NOW
//               </button>
//             </div>

//             {/* Shapes Card */}
//             <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
//               <h2 className="text-lg font-semibold mb-2">🧩 Shapes</h2>
//               <p className="text-sm">
//                 Helps children learn to spot, name, and sort basic shapes through fun games.
//               </p>
//               <button 
//                 onClick={() => navigate('/games/shapes')}
//                 className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
//               >
//                 START NOW
//               </button>
//             </div>
//               {/* Shapes Card */}
//               <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
//               <h2 className="text-lg font-semibold mb-2">🧩ABCD words</h2>
//               <p className="text-sm">
//                 Helps children learn to words, letter through fun games.
//               </p>
//               <button 
//                 onClick={() => navigate('/games/abcd')}
//                 className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
//               >
//                 START NOW
//               </button>
//             </div>
//           </div>
//         </div>

    
//       </main>
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../api';
// import Sidebar from './Sidebar';

// export default function Dashboard() {
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     api
//       .get('/games/my-progress')
//       .then((res) => setRecords(res.data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   const sortedRecords = [...records].sort(
//     (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
//   );

//   const labels = sortedRecords.map((r) =>
//     new Date(r.createdAt).toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//     })
//   );

//   const scores = sortedRecords.map((r) => r.score);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Score',
//         data: scores,
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Common Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <main className="flex-1 bg-[#EFEFEF] p-10 relative">
//         <h2 className="text-3xl font-semibold text-blue-600 mb-2">
//           👋 Hi Kid, Ready to Learn?
//         </h2>
//         <p className="text-sm text-gray-500 mb-6">OVERVIEW</p>

//         {/* Recommended Card */}
//         <div className="w-full bg-gradient-to-r from-green-500 to-green-900 rounded-2xl p-6 text-white mb-10 shadow-md">
//           <h3 className="text-sm tracking-widest mb-2">RECOMMENDED</h3>
//           <h2 className="text-4xl font-semibold">🧩 Shapes Sorting Game</h2>
//           <p className="text-xs mt-2 text-gray-200">Get your hands dirty with shapes</p>
//           <button 
//             onClick={() => navigate('/games/shapes')}
//             className="mt-4 bg-black px-4 py-2 rounded-lg text-xs font-bold"
//           >
//             START NOW
//           </button>
//         </div>

//         {/* Continue Learning Section */}
//         <div className="mb-10">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Continue Learning</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Behaviour & Emotions Card */}
//             <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
//               <h2 className="text-lg font-semibold mb-2">😊 Behaviour & Emotions</h2>
//               <p className="text-sm">
//                 Helps children understand emotions and build positive behavior step by step.
//               </p>
//               <button 
//                 onClick={() => navigate('/games/behaviour')}
//                 className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
//               >
//                 START NOW
//               </button>
//             </div>

//             {/* Speech & Words Card */}
//             <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
//               <h2 className="text-lg font-semibold mb-2">🔊 Speech & Words</h2>
//               <p className="text-sm">
//                 Helps children learn simple words and practice speaking with easy, interactive activities.
//               </p>
//               <button 
//                 onClick={() => navigate('/games/pronounce')}
//                 className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
//               >
//                 START NOW
//               </button>
//             </div>

//             {/* Shapes Card */}
//             <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
//               <h2 className="text-lg font-semibold mb-2">🧩 Shapes</h2>
//               <p className="text-sm">
//                 Helps children learn to spot, name, and sort basic shapes through fun games.
//               </p>
//               <button 
//                 onClick={() => navigate('/games/shapes')}
//                 className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
//               >
//                 START NOW
//               </button>
//             </div>
//               {/* ABCD Words Card */}
//               <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
//               <h2 className="text-lg font-semibold mb-2">🧩 ABCD Words</h2>
//               <p className="text-sm">
//                 Helps children learn to words, letter through fun games.
//               </p>
//               <button 
//                 onClick={() => navigate('/games/abcd')}
//                 className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
//               >
//                 START NOW
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/games/my-progress')
      .then((res) => setRecords(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const sortedRecords = [...records].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  const labels = sortedRecords.map((r) =>
    new Date(r.createdAt).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  );

  const scores = sortedRecords.map((r) => r.score);

  const data = {
    labels,
    datasets: [
      {
        label: 'Score',
        data: scores,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex min-h-screen">
      {/* Shared Sidebar */}

      {/* Main Content */}
      <main className="flex-1 bg-[#EFEFEF] p-10 relative">
        <h2 className="text-3xl font-semibold text-blue-600 mb-2">
          👋 Hi Kid, Ready to Learn?
        </h2>
        <p className="text-sm text-gray-500 mb-6">OVERVIEW</p>

        {/* Recommended Card */}
        <div className="w-full bg-gradient-to-r from-green-500 to-green-900 rounded-2xl p-6 text-white mb-10 shadow-md">
          <h3 className="text-sm tracking-widest mb-2">RECOMMENDED</h3>
          <h2 className="text-4xl font-semibold">🧩 Shapes Sorting Game</h2>
          <p className="text-xs mt-2 text-gray-200">Get your hands dirty with shapes</p>
          <button
            onClick={() => navigate('/games/shapes')}
            className="mt-4 bg-black px-4 py-2 rounded-lg text-xs font-bold"
          >
            START NOW
          </button>
        </div>

        {/* Continue Learning Section */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Continue Learning</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Behaviour & Emotions */}
            <LearningCard
              title="😊 Behaviour & Emotions"
              description="Helps children understand emotions and build positive behavior step by step."
              onClick={() => navigate('/games/behaviour')}
            />

            {/* Speech & Words */}
            <LearningCard
              title="🔊 Speech & Words"
              description="Helps children learn simple words and practice speaking with easy, interactive activities."
              onClick={() => navigate('/games/pronounce')}
            />

            {/* Shapes */}
            <LearningCard
              title="🧩 Shapes"
              description="Helps children learn to spot, name, and sort basic shapes through fun games."
              onClick={() => navigate('/games/shapes')}
            />

            {/* ABCD Words */}
            <LearningCard
              title="🧩 ABCD Words"
              description="Helps children learn words and letters through fun games."
              onClick={() => navigate('/games/abcd')}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable learning card component
function LearningCard({ title, description, onClick }) {
  return (
    <div className="bg-[#E2E2E2] rounded-2xl p-5 text-black shadow-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
      <button
        onClick={onClick}
        className="mt-4 bg-black text-white px-4 py-2 rounded-md text-xs font-bold"
      >
        START NOW
      </button>
    </div>
  );
}
