// import React, { useState, useEffect } from 'react';
// import { User, Trophy, Target, MessageSquare, Shapes, TrendingUp, Calendar, Star } from 'lucide-react';

// const Progress = () => {
//   const [kids, setKids] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedKid, setSelectedKid] = useState(null);

//   // Fetch kids data from API
//   useEffect(() => {
//     const fetchKids = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         console.log(token)
//         const response = await fetch('http://localhost:5000/api/kids', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         console.log(response)

//         if (!response.ok) {
//           throw new Error('Failed to fetch kids data');
//         }

//         const data = await response.json();
//         setKids(data);
//         if (data.length > 0) {
//           setSelectedKid(data[0]);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchKids();
//   }, []);

//   // Calculate progress percentage
//   const calculateProgress = (score, maxScore = 100) => {
//     return Math.min((score / maxScore) * 100, 100);
//   };

//   // Get progress color based on score
//   const getProgressColor = (score) => {
//     if (score >= 80) return 'bg-green-500';
//     if (score >= 60) return 'bg-yellow-500';
//     if (score >= 40) return 'bg-orange-500';
//     return 'bg-red-500';
//   };

//   // Get achievement level
//   const getAchievementLevel = (score) => {
//     if (score >= 90) return { level: 'Master', icon: '🏆', color: 'text-yellow-500' };
//     if (score >= 70) return { level: 'Expert', icon: '⭐', color: 'text-blue-500' };
//     if (score >= 50) return { level: 'Intermediate', icon: '📈', color: 'text-green-500' };
//     if (score >= 30) return { level: 'Beginner', icon: '🌱', color: 'text-purple-500' };
//     return { level: 'Getting Started', icon: '🎯', color: 'text-gray-500' };
//   };

//   // Calculate total score
//   const calculateTotalScore = (gameScores) => {
//     return gameScores.behaviour + gameScores.speech + gameScores.shapes;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading progress data...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
//         <div className="text-center bg-white p-8 rounded-lg shadow-lg">
//           <div className="text-red-500 text-5xl mb-4">⚠️</div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Data</h2>
//           <p className="text-gray-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (kids.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
//         <div className="text-center bg-white p-8 rounded-lg shadow-lg">
//           <div className="text-gray-400 text-6xl mb-4">👶</div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">No Kids Found</h2>
//           <p className="text-gray-600">Add some kids to start tracking their progress!</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Progress Dashboard</h1>
//           <p className="text-gray-600">Track your kids' learning journey</p>
//         </div>

//         {/* Kid Selection */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//             <User className="mr-2 text-purple-600" size={24} />
//             Select a Kid
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {kids.map((kid) => (
//               <button
//                 key={kid._id}
//                 onClick={() => setSelectedKid(kid)}
//                 className={`p-4 rounded-lg border-2 transition-all duration-200 ${
//                   selectedKid?._id === kid._id
//                     ? 'border-purple-500 bg-purple-50'
//                     : 'border-gray-200 hover:border-purple-300'
//                 }`}
//               >
//                 <div className="text-center">
//                   <div className="text-3xl mb-2">👶</div>
//                   <h3 className="font-semibold text-gray-800">{kid.name}</h3>
//                   <p className="text-sm text-gray-600">
//                     Total Score: {calculateTotalScore(kid.gameScores)}
//                   </p>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {selectedKid && (
//           <>
//             {/* Kid Overview */}
//             <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   {selectedKid.name}'s Progress
//                 </h2>
//                 <div className="flex items-center space-x-2">
//                   <Calendar className="text-purple-600" size={20} />
//                   <span className="text-sm text-gray-600">
//                     Last updated: {new Date(selectedKid.updatedAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>

//               {/* Overall Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-purple-600">
//                     {calculateTotalScore(selectedKid.gameScores)}
//                   </div>
//                   <p className="text-gray-600">Total Score</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600">
//                     {Math.round(calculateTotalScore(selectedKid.gameScores) / 3)}
//                   </div>
//                   <p className="text-gray-600">Average Score</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-green-600">
//                     {Math.max(selectedKid.gameScores.behaviour, selectedKid.gameScores.speech, selectedKid.gameScores.shapes)}
//                   </div>
//                   <p className="text-gray-600">Best Game</p>
//                 </div>
//                 <div className="text-center">
//                   <div className={`text-3xl font-bold ${getAchievementLevel(calculateTotalScore(selectedKid.gameScores)).color}`}>
//                     {getAchievementLevel(calculateTotalScore(selectedKid.gameScores)).icon}
//                   </div>
//                   <p className="text-gray-600">
//                     {getAchievementLevel(calculateTotalScore(selectedKid.gameScores)).level}
//                   </p>
//                 </div>
//               </div>

//               {/* Game Progress Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Behaviour Game */}
//                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-lg font-semibold text-gray-800">Behaviour</h3>
//                     <Target className="text-blue-600" size={24} />
//                   </div>
//                   <div className="mb-4">
//                     <div className="flex justify-between text-sm text-gray-600 mb-2">
//                       <span>Score</span>
//                       <span>{selectedKid.gameScores.behaviour}/100</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3">
//                       <div
//                         className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(selectedKid.gameScores.behaviour)}`}
//                         style={{ width: `${calculateProgress(selectedKid.gameScores.behaviour)}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                       selectedKid.gameScores.behaviour >= 70 
//                         ? 'bg-green-100 text-green-800' 
//                         : selectedKid.gameScores.behaviour >= 40 
//                         ? 'bg-yellow-100 text-yellow-800' 
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {selectedKid.gameScores.behaviour >= 70 ? '🎉 Great!' : 
//                        selectedKid.gameScores.behaviour >= 40 ? '👍 Good' : '💪 Keep Going!'}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Speech Game */}
//                 <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-lg font-semibold text-gray-800">Speech</h3>
//                     <MessageSquare className="text-green-600" size={24} />
//                   </div>
//                   <div className="mb-4">
//                     <div className="flex justify-between text-sm text-gray-600 mb-2">
//                       <span>Score</span>
//                       <span>{selectedKid.gameScores.speech}/100</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3">
//                       <div
//                         className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(selectedKid.gameScores.speech)}`}
//                         style={{ width: `${calculateProgress(selectedKid.gameScores.speech)}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                       selectedKid.gameScores.speech >= 70 
//                         ? 'bg-green-100 text-green-800' 
//                         : selectedKid.gameScores.speech >= 40 
//                         ? 'bg-yellow-100 text-yellow-800' 
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {selectedKid.gameScores.speech >= 70 ? '🎉 Great!' : 
//                        selectedKid.gameScores.speech >= 40 ? '👍 Good' : '💪 Keep Going!'}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Shapes Game */}
//                 <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-lg font-semibold text-gray-800">Shapes</h3>
//                     <Shapes className="text-purple-600" size={24} />
//                   </div>
//                   <div className="mb-4">
//                     <div className="flex justify-between text-sm text-gray-600 mb-2">
//                       <span>Score</span>
//                       <span>{selectedKid.gameScores.shapes}/100</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3">
//                       <div
//                         className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(selectedKid.gameScores.shapes)}`}
//                         style={{ width: `${calculateProgress(selectedKid.gameScores.shapes)}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                       selectedKid.gameScores.shapes >= 70 
//                         ? 'bg-green-100 text-green-800' 
//                         : selectedKid.gameScores.shapes >= 40 
//                         ? 'bg-yellow-100 text-yellow-800' 
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {selectedKid.gameScores.shapes >= 70 ? '🎉 Great!' : 
//                        selectedKid.gameScores.shapes >= 40 ? '👍 Good' : '💪 Keep Going!'}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Achievements & Recommendations */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Achievements */}
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <Trophy className="mr-2 text-yellow-500" size={24} />
//                   Achievements
//                 </h3>
//                 <div className="space-y-3">
//                   {selectedKid.gameScores.behaviour >= 50 && (
//                     <div className="flex items-center p-3 bg-blue-50 rounded-lg">
//                       <div className="text-2xl mr-3">🎯</div>
//                       <div>
//                         <p className="font-medium text-gray-800">Behavior Champion</p>
//                         <p className="text-sm text-gray-600">Scored 50+ in Behaviour</p>
//                       </div>
//                     </div>
//                   )}
//                   {selectedKid.gameScores.speech >= 50 && (
//                     <div className="flex items-center p-3 bg-green-50 rounded-lg">
//                       <div className="text-2xl mr-3">🗣️</div>
//                       <div>
//                         <p className="font-medium text-gray-800">Speech Star</p>
//                         <p className="text-sm text-gray-600">Scored 50+ in Speech</p>
//                       </div>
//                     </div>
//                   )}
//                   {selectedKid.gameScores.shapes >= 50 && (
//                     <div className="flex items-center p-3 bg-purple-50 rounded-lg">
//                       <div className="text-2xl mr-3">🔶</div>
//                       <div>
//                         <p className="font-medium text-gray-800">Shape Master</p>
//                         <p className="text-sm text-gray-600">Scored 50+ in Shapes</p>
//                       </div>
//                     </div>
//                   )}
//                   {calculateTotalScore(selectedKid.gameScores) >= 150 && (
//                     <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
//                       <div className="text-2xl mr-3">🏆</div>
//                       <div>
//                         <p className="font-medium text-gray-800">Overall Excellence</p>
//                         <p className="text-sm text-gray-600">Total score above 150</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Recommendations */}
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <TrendingUp className="mr-2 text-green-500" size={24} />
//                   Recommendations
//                 </h3>
//                 <div className="space-y-3">
//                   {selectedKid.gameScores.behaviour < 50 && (
//                     <div className="p-3 bg-blue-50 rounded-lg">
//                       <p className="font-medium text-gray-800">Focus on Behaviour</p>
//                       <p className="text-sm text-gray-600">Practice more behaviour activities to improve</p>
//                     </div>
//                   )}
//                   {selectedKid.gameScores.speech < 50 && (
//                     <div className="p-3 bg-green-50 rounded-lg">
//                       <p className="font-medium text-gray-800">Enhance Speech Skills</p>
//                       <p className="text-sm text-gray-600">Try more speech exercises and games</p>
//                     </div>
//                   )}
//                   {selectedKid.gameScores.shapes < 50 && (
//                     <div className="p-3 bg-purple-50 rounded-lg">
//                       <p className="font-medium text-gray-800">Work on Shapes</p>
//                       <p className="text-sm text-gray-600">Practice shape recognition and puzzles</p>
//                     </div>
//                   )}
//                   {calculateTotalScore(selectedKid.gameScores) >= 200 && (
//                     <div className="p-3 bg-yellow-50 rounded-lg">
//                       <p className="font-medium text-gray-800">Excellent Progress!</p>
//                       <p className="text-sm text-gray-600">Consider advanced challenges</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Progress;



// import React, { useState, useEffect } from 'react';
// import { User, Calendar, TrendingUp, BarChart3 } from 'lucide-react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const Progress = () => {
//   const [kids, setKids] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedKid, setSelectedKid] = useState(null);
//   const [timeRange, setTimeRange] = useState('all'); // 'all', 'week', 'month', 'year'

//   // Fetch kids data from API
//   useEffect(() => {
//     const fetchKids = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         console.log(token)
//         const response = await fetch('http://localhost:5000/api/kids', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         console.log(response)

//         if (!response.ok) {
//           throw new Error('Failed to fetch kids data');
//         }

//         const data = await response.json();
//         setKids(data);
//         if (data.length > 0) {
//           setSelectedKid(data[0]);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchKids();
//   }, []);

//   // Prepare chart data
//   const prepareChartData = (gameScores) => {
//     return [
//       {
//         game: 'Behaviour',
//         score: gameScores.behaviour,
//         fill: '#3B82F6'
//       },
//       {
//         game: 'Speech',
//         score: gameScores.speech,
//         fill: '#10B981'
//       },
//       {
//         game: 'Shapes',
//         score: gameScores.shapes,
//         fill: '#8B5CF6'
//       }
//     ];
//   };

//   // Custom tooltip for the bar chart
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
//           <p className="font-semibold text-gray-800">{`${label}`}</p>
//           <p className="text-blue-600">
//             Score: <span className="font-bold">{payload[0].value}/100</span>
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   // Get time range label
//   const getTimeRangeLabel = () => {
//     switch (timeRange) {
//       case 'week': return 'This Week';
//       case 'month': return 'This Month';
//       case 'year': return 'This Year';
//       default: return 'All Time';
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading progress data...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
//         <div className="text-center bg-white p-8 rounded-lg shadow-lg">
//           <div className="text-red-500 text-5xl mb-4">⚠️</div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Data</h2>
//           <p className="text-gray-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (kids.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
//         <div className="text-center bg-white p-8 rounded-lg shadow-lg">
//           <div className="text-gray-400 text-6xl mb-4">👶</div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">No Kids Found</h2>
//           <p className="text-gray-600">Add some kids to start tracking their progress!</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Progress Dashboard</h1>
//           <p className="text-gray-600">Track your kids' learning journey with interactive charts</p>
//         </div>

//         {/* Controls */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Kid Selection */}
//             <div className="flex-1">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <User className="mr-2 text-purple-600" size={24} />
//                 Select a Kid
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {kids.map((kid) => (
//                   <button
//                     key={kid._id}
//                     onClick={() => setSelectedKid(kid)}
//                     className={`p-4 rounded-lg border-2 transition-all duration-200 ${
//                       selectedKid?._id === kid._id
//                         ? 'border-purple-500 bg-purple-50'
//                         : 'border-gray-200 hover:border-purple-300'
//                     }`}
//                   >
//                     <div className="text-center">
//                       <div className="text-3xl mb-2">👶</div>
//                       <h3 className="font-semibold text-gray-800">{kid.name}</h3>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Time Range Selection */}
//             <div className="md:w-64">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <Calendar className="mr-2 text-green-600" size={24} />
//                 Time Range
//               </h2>
//               <div className="space-y-2">
//                 {[
//                   { value: 'all', label: 'All Time' },
//                   { value: 'year', label: 'This Year' },
//                   { value: 'month', label: 'This Month' },
//                   { value: 'week', label: 'This Week' }
//                 ].map((range) => (
//                   <button
//                     key={range.value}
//                     onClick={() => setTimeRange(range.value)}
//                     className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
//                       timeRange === range.value
//                         ? 'border-green-500 bg-green-50 text-green-800'
//                         : 'border-gray-200 hover:border-green-300'
//                     }`}
//                   >
//                     {range.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {selectedKid && (
//           <>
//             {/* Chart Section */}
//             <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800 flex items-center">
//                   <BarChart3 className="mr-2 text-purple-600" size={28} />
//                   {selectedKid.name}'s Progress - {getTimeRangeLabel()}
//                 </h2>
//                 <div className="flex items-center space-x-2">
//                   <TrendingUp className="text-purple-600" size={20} />
//                   <span className="text-sm text-gray-600">
//                     Last updated: {new Date(selectedKid.updatedAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>

//               {/* Bar Chart */}
//               <div className="h-96 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={prepareChartData(selectedKid.gameScores)}
//                     margin={{
//                       top: 20,
//                       right: 30,
//                       left: 20,
//                       bottom: 5,
//                     }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                     <XAxis 
//                       dataKey="game" 
//                       tick={{ fill: '#6B7280', fontSize: 14 }}
//                       axisLine={{ stroke: '#E5E7EB' }}
//                     />
//                     <YAxis 
//                       domain={[0, 100]}
//                       tick={{ fill: '#6B7280', fontSize: 14 }}
//                       axisLine={{ stroke: '#E5E7EB' }}
//                       label={{ value: 'Score', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280' } }}
//                     />
//                     <Tooltip content={<CustomTooltip />} />
//                     <Bar 
//                       dataKey="score" 
//                       radius={[4, 4, 0, 0]}
//                       fill="#8884d8"
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             {/* Summary Statistics */}
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary Statistics</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="text-center p-4 bg-blue-50 rounded-lg">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">
//                     {selectedKid.gameScores.behaviour}
//                   </div>
//                   <p className="text-gray-600">Behaviour Score</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     <div
//                       className="bg-blue-500 h-2 rounded-full transition-all duration-500"
//                       style={{ width: `${selectedKid.gameScores.behaviour}%` }}
//                     ></div>
//                   </div>
//                 </div>
                
//                 <div className="text-center p-4 bg-green-50 rounded-lg">
//                   <div className="text-3xl font-bold text-green-600 mb-2">
//                     {selectedKid.gameScores.speech}
//                   </div>
//                   <p className="text-gray-600">Speech Score</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-500"
//                       style={{ width: `${selectedKid.gameScores.speech}%` }}
//                     ></div>
//                   </div>
//                 </div>
                
//                 <div className="text-center p-4 bg-purple-50 rounded-lg">
//                   <div className="text-3xl font-bold text-purple-600 mb-2">
//                     {selectedKid.gameScores.shapes}
//                   </div>
//                   <p className="text-gray-600">Shapes Score</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     <div
//                       className="bg-purple-500 h-2 rounded-full transition-all duration-500"
//                       style={{ width: `${selectedKid.gameScores.shapes}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Progress;


import React, { useState, useEffect } from 'react';
import { User, Calendar, TrendingUp, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Progress = () => {
  const [kids, setKids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedKid, setSelectedKid] = useState(null);
  const [timeRange, setTimeRange] = useState('all'); // 'all', 'week', 'month', 'year'

  useEffect(() => {
    const fetchKids = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role'); // get role from localStorage

        // Base URL
        const baseUrl = 'http://localhost:5000/api/kids';

        let url = baseUrl;

        // If role is parent, filter kids by parentId, backend handles this based on token,
        // but to be safe, we fetch all and filter on frontend only if backend doesn't filter.
        // Ideally backend already filters based on token, but to demonstrate:
        // So no extra param needed if backend filters on token

        // If your backend endpoint /api/kids returns only kids for logged-in user (parent or org)
        // then you don't need to change URL.

        // Fetch kids
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch kids data');
        }

        let data = await response.json();

        // If backend returns all kids for organization and only kids for parent, then no need to filter here.
        // But if backend returns all kids regardless of role, then filter here:

        if (role === 'parent') {
          // Filter kids that belong to this parent (we need parentId of logged in user)
          // Let's get userId from token payload or localStorage (if you stored it).
          // Since we only have token, no userId in localStorage by default.
          // So, you should have userId stored locally at login or decode token here.

          // Let's decode token here to get userId
          const payloadBase64 = token.split('.')[1];
          const decodedPayload = JSON.parse(atob(payloadBase64));
          const userId = decodedPayload.id;

          // Filter kids by matching parentId to userId
          data = data.filter(kid => kid.parentId?._id === userId || kid.parentId === userId);
        }

        setKids(data);
        if (data.length > 0) {
          setSelectedKid(data[0]);
        } else {
          setSelectedKid(null);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchKids();
  }, []);

  const prepareChartData = (gameScores) => {
    return [
      { game: 'Behaviour', score: gameScores?.behaviour || 0, fill: '#3B82F6' },
      { game: 'Speech', score: gameScores?.speech || 0, fill: '#10B981' },
      { game: 'Shapes', score: gameScores?.shapes || 0, fill: '#8B5CF6' }
    ];
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{label}</p>
          <p className="text-blue-600">
            Score: <span className="font-bold">{payload[0].value}/100</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const getTimeRangeLabel = () => {
    switch (timeRange) {
      case 'week': return 'This Week';
      case 'month': return 'This Month';
      case 'year': return 'This Year';
      default: return 'All Time';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading progress data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Data</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!kids.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <div className="text-gray-400 text-6xl mb-4">👶</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Kids Found</h2>
          <p className="text-gray-600">Add some kids to start tracking their progress!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Progress Dashboard</h1>
          <p className="text-gray-600">Track your kids' learning journey with interactive charts</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Kid Selection */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="mr-2 text-purple-600" size={24} />
                Select a Kid
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {kids.map((kid) => (
                  <button
                    key={kid._id}
                    onClick={() => setSelectedKid(kid)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedKid?._id === kid._id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">👶</div>
                      <h3 className="font-semibold text-gray-800">{kid.name}</h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Range Selection */}
            <div className="md:w-64">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="mr-2 text-green-600" size={24} />
                Time Range
              </h2>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Time' },
                  { value: 'year', label: 'This Year' },
                  { value: 'month', label: 'This Month' },
                  { value: 'week', label: 'This Week' }
                ].map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setTimeRange(range.value)}
                    className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                      timeRange === range.value
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedKid && (
          <>
            {/* Chart Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <BarChart3 className="mr-2 text-purple-600" size={28} />
                  {selectedKid.name}'s Progress - {getTimeRangeLabel()}
                </h2>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-purple-600" size={20} />
                  <span className="text-sm text-gray-600">
                    Last updated: {new Date(selectedKid.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={prepareChartData(selectedKid.gameScores)}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="game"
                      tick={{ fill: '#6B7280', fontSize: 14 }}
                      axisLine={{ stroke: '#E5E7EB' }}
                    />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fill: '#6B7280', fontSize: 14 }}
                      axisLine={{ stroke: '#E5E7EB' }}
                      label={{
                        value: 'Score',
                        angle: -90,
                        position: 'insideLeft',
                        style: { textAnchor: 'middle', fill: '#6B7280' }
                      }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="score" radius={[4, 4, 0, 0]} fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Summary Statistics */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {selectedKid.gameScores.behaviour}
                  </div>
                  <p className="text-gray-600">Behaviour Score</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${selectedKid.gameScores.behaviour}%` }}
                    />
                  </div>
                </div>

                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {selectedKid.gameScores.speech}
                  </div>
                  <p className="text-gray-600">Speech Score</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${selectedKid.gameScores.speech}%` }}
                    />
                  </div>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {selectedKid.gameScores.shapes}
                  </div>
                  <p className="text-gray-600">Shapes Score</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${selectedKid.gameScores.shapes}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Progress;
