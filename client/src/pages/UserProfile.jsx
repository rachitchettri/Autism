// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// export default function Profile() {
//   const [search, setSearch] = useState('');
//   const [profiles, setProfiles] = useState([
//     { name: 'Sandesh Dhakal', id: 'A4TYU6', active: true },
//     { name: 'Shivank Poudel', id: 'A4TYU6', active: false },
//     { name: 'Samrat Pokhrel', id: 'A4TYU6', active: false },
//     { name: 'Nabin Babu', id: 'A4TYU6', active: false },
//     { name: 'Sudip Adhikari', id: 'A4TYU6', active: false },
//     { name: 'Sumit Dhakool', id: 'A4TYU6', active: false }
//   ]);

//   const location = useLocation();

//   const handleSwitch = (index) => {
//     setProfiles(prev =>
//       prev.map((p, i) => ({ ...p, active: i === index }))
//     );
//   };

//   const filteredProfiles = profiles.filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase()) ||
//     p.id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="w-full flex font-[\'Google Sans\']">
//       {/* Sidebar */}
//       <aside className="w-64 bg-green-700 text-white flex flex-col p-6 space-y-6 min-h-screen">
//         <h1 className="text-xl font-bold mb-8">UNGA BUNGA</h1>

//         <nav className="flex flex-col gap-4">
//           <Link to="/dashboard" className={`px-4 py-2 rounded ${location.pathname === '/dashboard' ? 'bg-green-800' : 'hover:bg-green-600'}`}>Dashboard</Link>
//           <Link to="/progress" className={`px-4 py-2 rounded ${location.pathname === '/progress' ? 'bg-green-800' : 'hover:bg-green-600'}`}>Progress Tracking</Link>
//           <Link to="/profile" className={`px-4 py-2 rounded ${location.pathname === '/profile' ? 'bg-green-800' : 'hover:bg-green-600'}`}>Profiles</Link>
//           <Link to="/settings" className={`px-4 py-2 rounded ${location.pathname === '/settings' ? 'bg-green-800' : 'hover:bg-green-600'}`}>Settings</Link>
//         </nav>

//         <button
//           className="mt-auto bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
//           onClick={() => alert('Logging out...')}
//         >
//           Log out
//         </button>
//       </aside>

//       <main className="flex-1">
       
//         {/* Header & Search */}
//         <div className="px-12 pt-14 pb-6 bg-white">
//           <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">👤 Profiles</h2>
//           <p className="text-gray-400 text-sm mb-6">
//             Add, view, update or switch between your children’s profiles.
//           </p>

//           <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center mb-8 bg-white">
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search Profiles..."
//               className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
//             />
//             <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
//           </div>
//         </div>

//         {/* Switch Profiles Heading */}
//         <div className="px-12 pb-4">
//           <h3 className="text-2xl font-medium text-[#565656] mb-4">👥 Switch Profiles</h3>
//         </div>

//         {/* Cards */}
//         <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pb-20">
//           {filteredProfiles.map((profile, index) => (
//             <div
//               key={index}
//               className={`rounded-xl p-4 w-[285px] h-[118px] shadow-md transition duration-300 transform hover:scale-105 cursor-pointer ${
//                 profile.active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//               }`}
//             >
//               <h3 className="text-lg font-semibold">{profile.name}</h3>
//               <p className="text-xs mb-4 text-inherit">ID: {profile.id}</p>

//               <div className="flex gap-2">
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">VIEW</button>
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">EDIT</button>
//                 <button
//                   onClick={() => handleSwitch(index)}
//                   className={`border transition ${
//                     profile.active ? 'border-white text-white hover:bg-white hover:text-green-600' : 'border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white'
//                   } text-xs px-4 py-1 rounded`}
//                 >
//                   SWITCH
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// export default function Profile() {
//   const [search, setSearch] = useState('');
//   const [profiles, setProfiles] = useState([
//     { name: 'Sandesh Dhakal', id: 'A4TYU6', active: true },
//     { name: 'Shivank Poudel', id: 'A4TYU6', active: false },
//     { name: 'Samrat Pokhrel', id: 'A4TYU6', active: false },
//     { name: 'Nabin Babu', id: 'A4TYU6', active: false },
//     { name: 'Sudip Adhikari', id: 'A4TYU6', active: false },
//     { name: 'Sumit Dhakool', id: 'A4TYU6', active: false }
//   ]);

//   const handleSwitch = (index) => {
//     setProfiles(prev =>
//       prev.map((p, i) => ({ ...p, active: i === index }))
//     );
//   };

//   const filteredProfiles = profiles.filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase()) ||
//     p.id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="flex-1 min-h-screen bg-gray-50 font-['Google Sans']">
//       {/* Header & Search */}
//       <div className="px-12 pt-14 pb-6 bg-white">
//         <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">👤 Profiles</h2>
//         <p className="text-gray-400 text-sm mb-6">
//           Add, view, update or switch between your children’s profiles.
//         </p>

//         <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center mb-8 bg-white">
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search Profiles..."
//             className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
//           />
//           <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
//         </div>
//       </div>

//       {/* Switch Profiles Heading */}
//       <div className="px-12 pb-4">
//         <h3 className="text-2xl font-medium text-[#565656] mb-4">👥 Switch Profiles</h3>
//       </div>

//       {/* Cards */}
//       <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pb-20">
//         {filteredProfiles.map((profile, index) => (
//           <div
//             key={index}
//             className={`rounded-xl p-4 w-[285px] h-[118px] shadow-md transition duration-300 transform hover:scale-105 cursor-pointer ${
//               profile.active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//             }`}
//           >
//             <h3 className="text-lg font-semibold">{profile.name}</h3>
//             <p className="text-xs mb-4 text-inherit">ID: {profile.id}</p>

//             <div className="flex gap-2">
//               <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">VIEW</button>
//               <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">EDIT</button>
//               <button
//                 onClick={() => handleSwitch(index)}
//                 className={`border transition ${
//                   profile.active ? 'border-white text-white hover:bg-white hover:text-green-600' : 'border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white'
//                 } text-xs px-4 py-1 rounded`}
//               >
//                 SWITCH
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Profile() {
//   const [search, setSearch] = useState('');
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchKids = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/kids', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const kids = res.data.map((kid, index) => ({
//           id: kid.kidId,
//           name: kid.name,
//           active: index === 0, // Mark the first kid as active by default
//         }));

//         setProfiles(kids);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch kids');
//         setLoading(false);
//       }
//     };

//     fetchKids();
//   }, [token]);

//   const handleSwitch = (index) => {
//     setProfiles((prev) =>
//       prev.map((p, i) => ({ ...p, active: i === index }))
//     );
//   };

//   const filteredProfiles = profiles.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="flex-1 min-h-screen bg-gray-50 font-['Google Sans']">
//       {/* Header & Search */}
//       <div className="px-12 pt-14 pb-6 bg-white">
//         <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">👤 Profiles</h2>
//         <p className="text-gray-400 text-sm mb-6">
//           Add, view, update or switch between your children’s profiles.
//         </p>

//         <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center mb-8 bg-white">
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search Profiles..."
//             className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
//           />
//           <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
//         </div>
//       </div>

//       {/* Body */}
//       <div className="px-12 pb-4">

//         {loading ? (
//           <p className="text-gray-500">Loading profiles...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : filteredProfiles.length === 0 ? (
//           <p className="text-gray-500">No profiles found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pb-20">
//             {filteredProfiles.map((profile, index) => (
//               <div
//                 key={index}
//                 className={`rounded-xl p-4 w-[285px] h-[118px] shadow-md transition duration-300 transform hover:scale-105 cursor-pointer ${
//                   profile.active
//                     ? 'bg-green-500 text-white'
//                     : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//                 }`}
//               >
//                 <h3 className="text-lg font-semibold">{profile.name}</h3>
//                 <p className="text-xs mb-4 text-inherit">ID: {profile.id}</p>

//                 <div className="flex gap-2">
//                   <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">VIEW</button>
//                   <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">EDIT</button>
//                   <button
//                     onClick={() => handleSwitch(index)}
//                     className={`border transition ${
//                       profile.active
//                         ? 'border-white text-white hover:bg-white hover:text-green-600'
//                         : 'border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white'
//                     } text-xs px-4 py-1 rounded`}
//                   >
//                     SWITCH
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Profile() {
//   const [search, setSearch] = useState('');
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [newKidName, setNewKidName] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     fetchKids();
//   }, []);

//   const fetchKids = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/kids', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const kids = res.data.map((kid, index) => ({
//         id: kid.kidId,
//         name: kid.name,
//         active: index === 0,
//       }));

//       setProfiles(kids);
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to fetch kids');
//       setLoading(false);
//     }
//   };

//   const handleSwitch = (index) => {
//     setProfiles((prev) =>
//       prev.map((p, i) => ({ ...p, active: i === index }))
//     );
//   };

//   const handleAddKid = async () => {
//     if (!newKidName.trim()) return;

//     try {
//       await axios.post(
//         'http://localhost:5000/api/kids',
//         { name: newKidName },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setNewKidName('');
//       setShowAddModal(false);
//       fetchKids(); // refresh the list
//     } catch (err) {
//       alert('Failed to add kid');
//     }
//   };

//   const filteredProfiles = profiles.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="flex-1 min-h-screen bg-gray-50 font-['Google Sans']">
//       {/* Header */}
//       <div className="px-12 pt-14 pb-6 bg-white">
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">👤 Profiles</h2>
//             <p className="text-gray-400 text-sm mb-6">
//               Add, view, update or switch between your children’s profiles.
//             </p>

//             <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center bg-white">
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search Profiles..."
//                 className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
//               />
//               <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
//             </div>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium shadow"
//           >
//             + Add Profile
//           </button>
//         </div>
//       </div>

//       {/* Switch Profiles Heading */}
//       <div className="px-12 pb-4">
//         <h3 className="text-2xl font-medium text-[#565656] mb-4">👥 Switch Profiles</h3>
//       </div>

//       {/* Profiles Grid */}
//       <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pb-20">
//         {loading ? (
//           <p className="text-gray-500">Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : filteredProfiles.length === 0 ? (
//           <p className="text-gray-400">No profiles found.</p>
//         ) : (
//           filteredProfiles.map((profile, index) => (
//             <div
//               key={index}
//               className={`rounded-xl p-4 w-[285px] h-[118px] shadow-md transition duration-300 transform hover:scale-105 cursor-pointer ${
//                 profile.active
//                   ? 'bg-green-500 text-white'
//                   : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//               }`}
//             >
//               <h3 className="text-lg font-semibold">{profile.name}</h3>
//               <p className="text-xs mb-4 text-inherit">ID: {profile.id}</p>

//               <div className="flex gap-2">
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">VIEW</button>
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">EDIT</button>
//                 <button
//                   onClick={() => handleSwitch(index)}
//                   className={`border transition ${
//                     profile.active
//                       ? 'border-white text-white hover:bg-white hover:text-green-600'
//                       : 'border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white'
//                   } text-xs px-4 py-1 rounded`}
//                 >
//                   SWITCH
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Add Kid Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-[300px]">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Add New Profile</h3>
//             <input
//               type="text"
//               value={newKidName}
//               onChange={(e) => setNewKidName(e.target.value)}
//               placeholder="Enter name"
//               className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddKid}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Profile() {
//   const [search, setSearch] = useState('');
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [newKidName, setNewKidName] = useState('');
//   const [parentIdInput, setParentIdInput] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);

//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role');

//   useEffect(() => {
//     fetchKids();
//   }, []);

//   const fetchKids = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/kids', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const kids = res.data.map((kid, index) => ({
//         id: kid.kidId,
//         name: kid.name,
//         active: index === 0,
//       }));

//       setProfiles(kids);
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to fetch kids');
//       setLoading(false);
//     }
//   };

//   const handleSwitch = (index) => {
//     setProfiles((prev) =>
//       prev.map((p, i) => ({ ...p, active: i === index }))
//     );
//   };

//   const handleAddKid = async () => {
//     if (!newKidName.trim()) return;
//     const payload = { name: newKidName };

//     // Only orgs can assign a parent manually
//     if (role === 'organization' && parentIdInput.trim()) {
//       payload.parentId = parentIdInput;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/kids', payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setNewKidName('');
//       setParentIdInput('');
//       setShowAddModal(false);
//       fetchKids();
//     } catch (err) {
//       alert('Failed to add kid: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const filteredProfiles = profiles.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="flex-1 min-h-screen bg-gray-50 font-['Google Sans']">
//       {/* Header */}
//       <div className="px-12 pt-14 pb-6 bg-white">
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">👤 Profiles</h2>
//             <p className="text-gray-400 text-sm mb-6">
//               Add, view, update or switch between your children’s profiles.
//             </p>

//             <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center bg-white">
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search Profiles..."
//                 className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
//               />
//               <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
//             </div>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium shadow"
//           >
//             + Add Profile
//           </button>
//         </div>
//       </div>

//       {/* Switch Profiles Heading */}
//       <div className="px-12 pb-4">
//         <h3 className="text-2xl font-medium text-[#565656] mb-4">👥 Switch Profiles</h3>
//       </div>

//       {/* Profiles Grid */}
//       <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pb-20">
//         {loading ? (
//           <p className="text-gray-500">Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : filteredProfiles.length === 0 ? (
//           <p className="text-gray-400">No profiles found.</p>
//         ) : (
//           filteredProfiles.map((profile, index) => (
//             <div
//               key={index}
//               className={`rounded-xl p-4 w-[285px] h-[118px] shadow-md transition duration-300 transform hover:scale-105 cursor-pointer ${
//                 profile.active
//                   ? 'bg-green-500 text-white'
//                   : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//               }`}
//             >
//               <h3 className="text-lg font-semibold">{profile.name}</h3>
//               <p className="text-xs mb-4 text-inherit">ID: {profile.id}</p>

//               <div className="flex gap-2">
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">VIEW</button>
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">EDIT</button>
//                 <button
//                   onClick={() => handleSwitch(index)}
//                   className={`border transition ${
//                     profile.active
//                       ? 'border-white text-white hover:bg-white hover:text-green-600'
//                       : 'border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white'
//                   } text-xs px-4 py-1 rounded`}
//                 >
//                   SWITCH
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Add Kid Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-[320px]">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Add New Profile</h3>

//             <input
//               type="text"
//               value={newKidName}
//               onChange={(e) => setNewKidName(e.target.value)}
//               placeholder="Kid's Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
//             />

//             {role === 'organization' && (
//               <input
//                 type="text"
//                 value={parentIdInput}
//                 onChange={(e) => setParentIdInput(e.target.value)}
//                 placeholder="Parent ID"
//                 className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             )}

//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                   setNewKidName('');
//                   setParentIdInput('');
//                 }}
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddKid}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Profile() {
//   const [search, setSearch] = useState('');
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [newKidName, setNewKidName] = useState('');
//   const [parentIdInput, setParentIdInput] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);

//   // Get auth token and role from localStorage
//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role');

//   useEffect(() => {
//     fetchKids();
//   }, []);

//   const fetchKids = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await axios.get('http://localhost:5000/api/kids', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       // Map backend response kids to profile shape
//       const kids = res.data.map((kid, index) => ({
//         id: kid.kidId,
//         name: kid.name,
//         active: index === 0,
//       }));
//       setProfiles(kids);
//     } catch (err) {
//       setError('Failed to fetch profiles.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSwitch = (index) => {
//     setProfiles((prev) =>
//       prev.map((p, i) => ({ ...p, active: i === index }))
//     );
//   };

//   const handleAddKid = async () => {
//     if (!newKidName.trim()) {
//       alert('Please enter a name');
//       return;
//     }

//     const payload = { name: newKidName.trim() };

//     // If org role, send parentId (optional)
//     if (role === 'organization' && parentIdInput.trim()) {
//       payload.parentId = parentIdInput.trim();
//     }

//     try {
//       await axios.post('http://localhost:5000/api/kids', payload, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNewKidName('');
//       setParentIdInput('');
//       setShowAddModal(false);
//       fetchKids();
//     } catch (err) {
//       alert(
//         'Failed to add profile: ' +
//           (err.response?.data?.message || err.message || 'Unknown error')
//       );
//     }
//   };

//   const filteredProfiles = profiles.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="flex-1 min-h-screen bg-gray-50 font-['Google Sans']">
//       {/* Header & Search */}
//       <div className="px-12 pt-14 pb-6 bg-white flex justify-between items-center">
//         <div>
//           <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">
//             👤 Profiles
//           </h2>
//           <p className="text-gray-400 text-sm mb-6">
//             Add, view, update or switch between your children’s profiles.
//           </p>

//           <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center bg-white">
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search Profiles..."
//               className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
//             />
//             <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
//           </div>
//         </div>

//         <button
//           onClick={() => setShowAddModal(true)}
//           className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium shadow"
//         >
//           + Add Profile
//         </button>
//       </div>

//       {/* Switch Profiles Heading */}
//       <div className="px-12 pb-4">
//         <h3 className="text-2xl font-medium text-[#565656] mb-4">👥 Switch Profiles</h3>
//       </div>

//       {/* Profiles Grid */}
//       <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pb-20">
//         {loading ? (
//           <p className="text-gray-500">Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : filteredProfiles.length === 0 ? (
//           <p className="text-gray-400">No profiles found.</p>
//         ) : (
//           filteredProfiles.map((profile, index) => (
//             <div
//               key={profile.id}
//               className={`rounded-xl p-4 w-[285px] h-[118px] shadow-md transition duration-300 transform hover:scale-105 cursor-pointer ${
//                 profile.active
//                   ? 'bg-green-500 text-white'
//                   : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//               }`}
//             >
//               <h3 className="text-lg font-semibold">{profile.name}</h3>
//               <p className="text-xs mb-4 text-inherit">ID: {profile.id}</p>

//               <div className="flex gap-2">
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">
//                   VIEW
//                 </button>
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">
//                   EDIT
//                 </button>
//                 <button
//                   onClick={() => handleSwitch(index)}
//                   className={`border transition ${
//                     profile.active
//                       ? 'border-white text-white hover:bg-white hover:text-green-600'
//                       : 'border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white'
//                   } text-xs px-4 py-1 rounded`}
//                 >
//                   SWITCH
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Add Profile Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-[320px]">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Add New Profile</h3>

//             <input
//               type="text"
//               value={newKidName}
//               onChange={(e) => setNewKidName(e.target.value)}
//               placeholder="Kid's Name"
//               className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
//             />

//             {/* Show Parent ID input only for organizations */}
//             {role === 'organization' && (
//               <input
//                 type="text"
//                 value={parentIdInput}
//                 onChange={(e) => setParentIdInput(e.target.value)}
//                 placeholder="Parent ID"
//                 className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             )}

//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                   setNewKidName('');
//                   setParentIdInput('');
//                 }}
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddKid}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Profile() {
//   const [search, setSearch] = useState('');
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedKid, setSelectedKid] = useState(null);

//   // Form state for adding new kid
//   const [newKidName, setNewKidName] = useState('');
//   const [newParentId, setNewParentId] = useState('');

//   // Fetch kids on mount
//   useEffect(() => {
//     fetchKids();
//   }, []);

//   const fetchKids = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const token = localStorage.getItem('token');
//       const res = await axios.get('http://localhost:5000/api/kids', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProfiles(res.data);
//     } catch (err) {
//       setError('Failed to fetch kids.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle Add Kid form submit
//   const handleAddKid = async (e) => {
//     e.preventDefault();
//     if (!newKidName || !newParentId) {
//       alert('Please provide both Kid Name and Parent ID');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:5000/api/kids',
//         { name: newKidName, parentId: newParentId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNewKidName('');
//       setNewParentId('');
//       fetchKids(); // Refresh list
//     } catch (err) {
//       alert('Failed to add kid. ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const filteredProfiles = profiles.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase()) ||
//     (p.kidId && p.kidId.toLowerCase().includes(search.toLowerCase()))
//   );

//   const closeModal = () => setSelectedKid(null);

//   return (
//     <main className="flex-1 min-h-screen bg-gray-50 font-['Google Sans'] px-12 py-10">
//       {/* Header & Search */}
//       <div className="mb-8 bg-white p-6 rounded shadow">
//         <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">👤 Profiles</h2>
//         <p className="text-gray-400 text-sm mb-6">
//           Add, view, or edit your children’s profiles.
//         </p>

//         <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center mb-8 bg-white">
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search Profiles..."
//             className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
//           />
//           <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
//         </div>

//         {/* Add Kid/Profile Form */}
//         <form onSubmit={handleAddKid} className="space-y-4 max-w-sm">
//           <div>
//             <label className="block mb-1 font-semibold text-gray-700">Kid Name</label>
//             <input
//               type="text"
//               value={newKidName}
//               onChange={(e) => setNewKidName(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter kid's name"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold text-gray-700">Parent ID</label>
//             <input
//               type="text"
//               value={newParentId}
//               onChange={(e) => setNewParentId(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter parent ID"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
//           >
//             Add Kid
//           </button>
//         </form>
//       </div>

//       {/* Profiles Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {loading && <p>Loading profiles...</p>}
//         {error && <p className="text-red-600">{error}</p>}
//         {!loading && !error && filteredProfiles.length === 0 && <p>No profiles found.</p>}

//         {!loading &&
//           !error &&
//           filteredProfiles.map((profile, index) => (
//             <div
//               key={profile._id || index}
//               className="rounded-xl p-4 w-full max-w-xs h-[140px] shadow-md bg-gray-200 text-gray-800"
//             >
//               <h3 className="text-lg font-semibold">{profile.name}</h3>
//               <p className="text-xs mb-4">ID: {profile.kidId || profile._id}</p>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setSelectedKid(profile)}
//                   className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded"
//                 >
//                   VIEW
//                 </button>
//                 <button className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded">
//                   EDIT
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* Modal */}
//       {selectedKid && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-6 rounded-lg w-96 max-w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-xl font-bold mb-4">Kid Profile</h2>
//             <p>
//               <strong>Name:</strong> {selectedKid.name}
//             </p>
//             <p>
//               <strong>ID:</strong> {selectedKid.kidId || selectedKid._id}
//             </p>
//             <p>
//               <strong>Parent:</strong>{' '}
//               {selectedKid.parentId
//                 ? `${selectedKid.parentId.f_name || ''} ${selectedKid.parentId.l_name || ''}`
//                 : 'N/A'}
//             </p>

//             <h3 className="mt-4 font-semibold">Game Scores</h3>
//             <ul className="list-disc list-inside">
//               <li>Behaviour: {selectedKid.gameScores?.behaviour ?? 0}</li>
//               <li>Speech: {selectedKid.gameScores?.speech ?? 0}</li>
//               <li>Shapes: {selectedKid.gameScores?.shapes ?? 0}</li>
//             </ul>

//             <button
//               onClick={closeModal}
//               className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Profile() {
//   const [search, setSearch] = useState('');
//   const [profiles, setProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [selectedKid, setSelectedKid] = useState(null);
//   const [editKid, setEditKid] = useState(null);

//   // Form state for adding new kid
//   const [newKidName, setNewKidName] = useState('');
//   const [newParentId, setNewParentId] = useState('');

//   // Form state for editing kid
//   const [editKidName, setEditKidName] = useState('');
//   const [editParentId, setEditParentId] = useState('');

//   useEffect(() => {
//     fetchKids();
//   }, []);

//   const fetchKids = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const token = localStorage.getItem('token');
//       const res = await axios.get('http://localhost:5000/api/kids', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProfiles(res.data);
//     } catch (err) {
//       setError('Failed to fetch kids.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddKid = async (e) => {
//     e.preventDefault();
//     if (!newKidName || !newParentId) {
//       alert('Please provide both Kid Name and Parent ID');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:5000/api/kids',
//         { name: newKidName, parentId: newParentId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNewKidName('');
//       setNewParentId('');
//       fetchKids();
//     } catch (err) {
//       alert('Failed to add kid. ' + (err.response?.data?.message || err.message));
//     }
//   };

//   // Open edit modal and fill form
//   const openEditModal = (kid) => {
//     setEditKid(kid);
//     setEditKidName(kid.name);
//     setEditParentId(kid.parentId || '');
//   };

//   const closeEditModal = () => {
//     setEditKid(null);
//     setEditKidName('');
//     setEditParentId('');
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     if (!editKidName || !editParentId) {
//       alert('Please provide both Kid Name and Parent ID');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:5000/api/kids/${editKid._id}`,
//         { name: editKidName, parentId: editParentId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       closeEditModal();
//       fetchKids();
//     } catch (err) {
//       alert('Failed to update kid. ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const handleDelete = async (kidId) => {
//     if (!window.confirm('Are you sure you want to delete this kid profile?')) return;
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5000/api/kids/${kidId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchKids();
//     } catch (err) {
//       alert('Failed to delete kid. ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const filteredProfiles = profiles.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase()) ||
//     (p.kidId && p.kidId.toLowerCase().includes(search.toLowerCase()))
//   );

//   const closeModal = () => setSelectedKid(null);

//   return (
//     <main className="flex-1 min-h-screen bg-gray-50 font-['Google Sans'] px-12 py-10">
//       {/* Header & Search */}
//       <div className="mb-8 bg-white p-6 rounded shadow">
//         <h2 className="text-[32px] font-medium text-[#565656] leading-[41px] mb-1">👤 Profiles</h2>
//         <p className="text-gray-400 text-sm mb-6">
//           Add, view, edit, or delete your children’s profiles.
//         </p>

//         <div className="w-72 border border-gray-500 rounded-md px-4 py-1 flex items-center mb-8 bg-white">
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search Profiles..."
//             className="text-sm text-gray-700 placeholder-gray-500 w-full focus:outline-none"
//           />
//           <div className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
//         </div>

//         {/* Add Kid/Profile Form */}
//         <form onSubmit={handleAddKid} className="space-y-4 max-w-sm">
//           <div>
//             <label className="block mb-1 font-semibold text-gray-700">Kid Name</label>
//             <input
//               type="text"
//               value={newKidName}
//               onChange={(e) => setNewKidName(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter kid's name"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-semibold text-gray-700">Parent ID</label>
//             <input
//               type="text"
//               value={newParentId}
//               onChange={(e) => setNewParentId(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter parent ID"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
//           >
//             Add Kid
//           </button>
//         </form>
//       </div>

//       {/* Profiles Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {loading && <p>Loading profiles...</p>}
//         {error && <p className="text-red-600">{error}</p>}
//         {!loading && !error && filteredProfiles.length === 0 && <p>No profiles found.</p>}

//         {!loading &&
//           !error &&
//           filteredProfiles.map((profile, index) => (
//             <div
//               key={profile._id || index}
//               className="rounded-xl p-4 w-full max-w-xs h-[140px] shadow-md bg-gray-200 text-gray-800"
//             >
//               <h3 className="text-lg font-semibold">{profile.name}</h3>
//               <p className="text-xs mb-4">ID: {profile.kidId || profile._id}</p>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setSelectedKid(profile)}
//                   className="bg-black hover:bg-gray-800 text-white text-xs px-4 py-1 rounded"
//                 >
//                   VIEW
//                 </button>
//                 <button
//                   onClick={() => openEditModal(profile)}
//                   className="bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-4 py-1 rounded"
//                 >
//                   EDIT
//                 </button>
//                 <button
//                   onClick={() => handleDelete(profile._id)}
//                   className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-1 rounded"
//                 >
//                   DELETE
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* View Modal */}
//       {selectedKid && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-6 rounded-lg w-96 max-w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-xl font-bold mb-4">Kid Profile</h2>
//             <p>
//               <strong>Name:</strong> {selectedKid.name}
//             </p>
//             <p>
//               <strong>ID:</strong> {selectedKid.kidId || selectedKid._id}
//             </p>
//             <p>
//               <strong>Parent:</strong>{' '}
//               {selectedKid.parentId
//                 ? `${selectedKid.parentId.f_name || ''} ${selectedKid.parentId.l_name || ''}`
//                 : 'N/A'}
//             </p>

//             <h3 className="mt-4 font-semibold">Game Scores</h3>
//             <ul className="list-disc list-inside">
//               <li>Behaviour: {selectedKid.gameScores?.behaviour ?? 0}</li>
//               <li>Speech: {selectedKid.gameScores?.speech ?? 0}</li>
//               <li>Shapes: {selectedKid.gameScores?.shapes ?? 0}</li>
//             </ul>

//             <button
//               onClick={closeModal}
//               className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editKid && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//           onClick={closeEditModal}
//         >
//           <div
//             className="bg-white p-6 rounded-lg w-96 max-w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-xl font-bold mb-4">Edit Kid Profile</h2>

//             <form onSubmit={handleEditSubmit} className="space-y-4">
//               <div>
//                 <label className="block mb-1 font-semibold text-gray-700">Kid Name</label>
//                 <input
//                   type="text"
//                   value={editKidName}
//                   onChange={(e) => setEditKidName(e.target.value)}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Enter kid's name"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-semibold text-gray-700">Parent ID</label>
//                 <input
//                   type="text"
//                   value={editParentId}
//                   onChange={(e) => setEditParentId(e.target.value)}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Enter parent ID"
//                 />
//               </div>

//               <div className="flex justify-end gap-3">
//                 <button
//                   type="button"
//                   onClick={closeEditModal}
//                   className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
  const [search, setSearch] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Add kid form states
  const [newKidName, setNewKidName] = useState('');
  const [newParentId, setNewParentId] = useState('');

  // Edit kid states
  const [editKid, setEditKid] = useState(null);
  const [editKidName, setEditKidName] = useState('');
  const [editParentId, setEditParentId] = useState('');

  // Modal for viewing single kid
  const [viewKid, setViewKid] = useState(null);

  // Load kids on mount
  useEffect(() => {
    fetchKids();
  }, []);

  const fetchKids = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/kids', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfiles(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load kids');
    } finally {
      setLoading(false);
    }
  };

  const handleAddKid = async (e) => {
    e.preventDefault();
    if (!newKidName.trim() || !newParentId.trim()) {
      alert('Please enter both kid name and parent ID');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/kids', {
        name: newKidName.trim(),
        parentId: newParentId.trim()
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNewKidName('');
      setNewParentId('');
      fetchKids();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add kid');
    }
  };

  const openEditModal = (kid) => {
    setEditKid(kid);
    setEditKidName(kid.name);
    setEditParentId(kid.parentId?._id || kid.parentId || '');
  };

  const closeEditModal = () => {
    setEditKid(null);
    setEditKidName('');
    setEditParentId('');
  };

  const handleEditKid = async (e) => {
    e.preventDefault();
    if (!editKidName.trim() || !editParentId.trim()) {
      alert('Please enter both kid name and parent ID');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/kids/${editKid._id}`, {
        name: editKidName.trim(),
        parentId: editParentId.trim()
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      closeEditModal();
      fetchKids();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update kid');
    }
  };

  const handleDeleteKid = async (kidId) => {
    if (!window.confirm('Are you sure you want to delete this kid?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/kids/${kidId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchKids();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete kid');
    }
  };

  const filteredProfiles = profiles.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.kidId && p.kidId.toLowerCase().includes(search.toLowerCase())) ||
    (p.parentId?.f_name && p.parentId.f_name.toLowerCase().includes(search.toLowerCase())) ||
    (p.parentId?.l_name && p.parentId.l_name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="flex-1 min-h-screen bg-gray-50 font-['Google Sans'] p-12">
      <h2 className="text-3xl font-medium text-gray-700 mb-2">👤 Profiles</h2>
      <p className="text-gray-500 mb-8">
        Add, view, update, or delete your children’s profiles.
      </p>

      {/* Search */}
      <div className="mb-8 w-72">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search Profiles..."
          className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none"
        />
      </div>

      {/* Add Kid Form */}
      <form onSubmit={handleAddKid} className="mb-10 max-w-md space-y-4 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Add New Kid/Profile</h3>
        <input
          type="text"
          placeholder="Kid Name"
          value={newKidName}
          onChange={e => setNewKidName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded"
          required
        />
        <input
          type="text"
          placeholder="Parent ID"
          value={newParentId}
          onChange={e => setNewParentId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add Kid
        </button>
      </form>

      {/* Loading/Error */}
      {loading && <p>Loading profiles...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfiles.map((profile) => (
          <div
            key={profile._id}
            className={`rounded-xl p-6 shadow-md bg-white transition transform hover:scale-105`}
          >
            <h3 className="text-lg font-semibold mb-2">{profile.name}</h3>
            <p className="text-sm text-gray-600 mb-2">ID: {profile.kidId || profile._id}</p>
            <p className="text-sm text-gray-600 mb-4">
              Parent: {profile.parentId ? `${profile.parentId.f_name || ''} ${profile.parentId.l_name || ''}` : 'N/A'}
            </p>

            <div className="flex space-x-3">
              <button
                onClick={() => setViewKid(profile)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm"
              >
                View
              </button>
              <button
                onClick={() => openEditModal(profile)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteKid(profile._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Kid Modal */}
      {viewKid && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setViewKid(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">{viewKid.name}'s Profile</h2>
            <p><strong>Kid ID:</strong> {viewKid.kidId || viewKid._id}</p>
            <p>
              <strong>Parent Name:</strong>{' '}
              {viewKid.parentId ? `${viewKid.parentId.f_name || ''} ${viewKid.parentId.l_name || ''}` : 'N/A'}
            </p>
            <p><strong>Created At:</strong> {new Date(viewKid.createdAt).toLocaleDateString()}</p>
            <p><strong>Updated At:</strong> {new Date(viewKid.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      )}

      {/* Edit Kid Modal */}
      {editKid && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeEditModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Kid Profile</h2>
            <form onSubmit={handleEditKid} className="space-y-4">
              <input
                type="text"
                placeholder="Kid Name"
                value={editKidName}
                onChange={(e) => setEditKidName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded"
                required
              />
              <input
                type="text"
                placeholder="Parent ID"
                value={editParentId}
                onChange={(e) => setEditParentId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded"
                required
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
