// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import Image1 from '../../assets/pngegg 1.png';
// import Image from '../../assets/Group 3.png';

// const ChildRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//     gender: '',
//     language: '', // Ensure this is part of your state if you plan to add the language field
//   });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleNext = () => {
//     console.log('Form data:', formData);
//     // Add your next step logic here
//   };

//   return (
//     <div className="min-h-screen w-full bg-white flex flex-col font-poppins">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-sm z-20 flex items-center px-8">
//         <span className="text-xl font-semibold text-black">LOGO</span>
//       </nav>

//       {/* Header */}
//       <header className="pt-16 w-full bg-gradient-to-r from-[#60BC64] to-[#10723A] py-12 px-8 flex flex-col md:flex-row items-center justify-between">
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-white">Let’s Get Started</h1>
//           <p className="text-[#D3FFD6] mt-2 uppercase tracking-wider font-medium text-sm md:text-base">
//             Help us get to know the child
//           </p>
//         </div>
//         <div className="mt-8 md:mt-0">
//           <img src={Image1} alt="Illustration" className="w-64 md:w-80 object-contain" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-8 py-16 gap-12">
//         {/* Steps */}
//         <div className="hidden md:flex flex-col items-center space-y-4">
//           {[1, 2, 3].map(step => (
//             <React.Fragment key={step}>
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs font-semibold ${
//                   step === 1
//                     ? 'bg-green-500 border-green-500 text-white'
//                     : 'bg-gray-200 border-gray-300 text-black'
//                 }`}
//               >
//                 {step}
//               </div>
//               {step !== 3 && <div className="w-px h-10 bg-gray-300"></div>}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Left Visual */}
//         <div className="flex-1 flex flex-col items-center md:items-start gap-8">
//           <div className="flex justify-center md:justify-start">
//             <img src={Image} alt="Learning Visual" className="w-72 md:w-96 object-contain" />
//           </div>
          
//         </div>

//         {/* Divider */}
//         <div className="hidden md:block w-px bg-gray-300"></div>

//         {/* Form */}
//         <div className="flex-1 max-w-md w-full">
//           <div className="bg-gray-50 border border-gray-200 shadow rounded-xl p-8">
//             <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
//               🧠 Basic Information
//             </h2>

//             <div className="space-y-6">
//               {/* First and Last Name */}
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1">
//                   <label className="block text-xs font-medium text-gray-600 mb-1">First Name</label>
//                   <input
//                     type="text"
//                     value={formData.firstName}
//                     onChange={e => handleInputChange('firstName', e.target.value)}
//                     placeholder="Enter first name"
//                     className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-xs font-medium text-gray-600 mb-1">Last Name</label>
//                   <input
//                     type="text"
//                     value={formData.lastName}
//                     onChange={e => handleInputChange('lastName', e.target.value)}
//                     placeholder="Enter last name"
//                     className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>
//               </div>

//               {/* Age, Gender */}
//               <div className="flex flex-col md:flex-row gap-4"> {/* Changed gap-16 to gap-4 */}
//                 <div className="flex-1"> {/* Changed w-full md:w-20 to flex-1 */}
//                   <label className="block text-xs font-medium text-gray-600 mb-1">Age</label>
//                   <input
//                     type="number"
//                     value={formData.age}
//                     onChange={e => handleInputChange('age', e.target.value)}
//                     placeholder="Age"
//                     className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
//                   />
//                 </div>

//                 <div className="flex-1 relative"> {/* Changed w-full md:w-32 to flex-1 */}
//                   <label className="block text-xs font-medium text-gray-600 mb-1">Gender</label>
//                   <select
//                     value={formData.gender}
//                     onChange={e => handleInputChange('gender', e.target.value)}
//                     className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-400"
//                   >
//                     <option value="">Select</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                   <ChevronDown className="absolute right-3 top-9 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
//                 </div>
//                 {/* You had an empty div here, removing it to streamline */}
//               </div>

//               {/* Next Button */}
//               <button
//                 onClick={handleNext}
//                 className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 mt-4"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ChildRegistrationForm;


import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import axios from 'axios';
import Image1 from '../../assets/pngegg 1.png';
import Image from '../../assets/Group 3.png';
import { useNavigate } from 'react-router-dom';


const ChildRegistrationForm = () => {
  const [role, setRole] = useState('parent'); // Default role
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    org_name: '',
    age: '',
    gender: '',
  });

  console.log(localStorage.getItem('token'))

  useEffect(() => {
    // Get user role from localStorage or backend
    const token = localStorage.getItem('token');
    if (!token) return;

    // Option 1: Store role in localStorage during login
    const storedRole = localStorage.getItem('role');
    if (storedRole) setRole(storedRole);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = async () => {
    try {
      const payload =
        role === 'organization'
          ? { org_name: formData.org_name }
          : {
              f_name: formData.f_name,
              l_name: formData.l_name,
              age: formData.age,
              gender: formData.gender,
            };

      const res = await axios.patch(
        'http://localhost:5000/api/auth/basic-info',
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      alert('Profile updated successfully!');
      console.log(res.data);
      // Proceed to next step
      navigate('/profile1')
    } catch (err) {
      console.error('Profile update error:', err);
      alert(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-poppins">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-sm z-20 flex items-center px-8">
        <span className="text-xl font-semibold text-black">LOGO</span>
      </nav>

      {/* Header */}
      <header className="pt-16 w-full bg-gradient-to-r from-[#60BC64] to-[#10723A] py-12 px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Let’s Get Started</h1>
          <p className="text-[#D3FFD6] mt-2 uppercase tracking-wider font-medium text-sm md:text-base">
            Help us get to know the {role === 'organization' ? 'organization' : 'child'}
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <img src={Image1} alt="Illustration" className="w-64 md:w-80 object-contain" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-8 py-16 gap-12">
        {/* Steps */}
        <div className="hidden md:flex flex-col items-center space-y-4">
          {[1, 2, 3].map(step => (
            <React.Fragment key={step}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs font-semibold ${
                  step === 1
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'bg-gray-200 border-gray-300 text-black'
                }`}
              >
                {step}
              </div>
              {step !== 3 && <div className="w-px h-10 bg-gray-300"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Left Image */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-8">
          <img src={Image} alt="Learning Visual" className="w-72 md:w-96 object-contain" />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300"></div>

        {/* Form */}
        <div className="flex-1 max-w-md w-full">
          <div className="bg-gray-50 border border-gray-200 shadow rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              🧠 Basic Information
            </h2>

            <div className="space-y-6">
              {role === 'organization' ? (
                <>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Organization Name</label>
                    <input
                      type="text"
                      value={formData.org_name}
                      onChange={e => handleInputChange('org_name', e.target.value)}
                      placeholder="Enter organization name"
                      className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">First Name</label>
                      <input
                        type="text"
                        value={formData.f_name}
                        onChange={e => handleInputChange('f_name', e.target.value)}
                        placeholder="Enter first name"
                        className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={formData.l_name}
                        onChange={e => handleInputChange('l_name', e.target.value)}
                        placeholder="Enter last name"
                        className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Age</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={e => handleInputChange('age', e.target.value)}
                        placeholder="Age"
                        className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>

                    <div className="flex-1 relative">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Gender</label>
                      <select
                        value={formData.gender}
                        onChange={e => handleInputChange('gender', e.target.value)}
                        className="w-full h-11 px-3 bg-white border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-400"
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-9 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </>
              )}

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 mt-4"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChildRegistrationForm;
