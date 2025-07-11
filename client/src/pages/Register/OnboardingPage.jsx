import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ChildRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    language: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    console.log('Form data:', formData);
    // Handle form submission or navigation to next step
  };

  return (
    <div className="relative w-full max-w-[2480px] mx-auto bg-white max-h-screen">
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white">
        <div className="absolute left-20 top-4">
          <span className="font-poppins font-semibold text-xl text-black tracking-tight">
            LOGO
          </span>
        </div>
      </div>

      {/* Header Section */}
      <div className="absolute top-16 left-0 right-0 h-40 bg-gradient-to-r from-blue-400 to-blue-800">
        <div className="absolute left-36 top-7 w-[632px]">
          <h1 className="font-poppins font-semibold text-5xl leading-[72px] text-white mb-2">
            Let's Get Started
          </h1>
          <p className="font-poppins font-semibold text-xl text-blue-200 tracking-[0.26em]">
            HELP US GET TO KNOW THE CHILD
          </p>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="absolute left-12 top-96">
        <div className="flex flex-col items-center space-y-4">
          {/* Step 1 - Active */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-green-500 flex items-center justify-center">
              <span className="text-white font-poppins font-medium text-xs">1</span>
            </div>
            <div className="w-0.5 h-10 bg-gray-200 mt-2"></div>
          </div>
          
          {/* Step 2 - Inactive */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-black font-poppins font-medium text-xs">2</span>
            </div>
            <div className="w-0.5 h-10 bg-gray-200 mt-2"></div>
          </div>
          
          {/* Step 3 - Inactive */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-black font-poppins font-medium text-xs">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="absolute left-60 top-96 w-80 h-72">
        <div className="relative">
          {/* Background shapes */}
          <div className="absolute left-4 top-32 w-44 h-20 bg-gray-300 rounded-lg"></div>
          <div className="absolute left-28 top-16 w-44 h-36 bg-gray-300 rounded-lg"></div>
          <div className="absolute left-52 top-0 w-28 h-56 bg-gray-300 rounded-lg"></div>
          
          {/* Character placeholder */}
          <div className="absolute left-8 top-8 w-16 h-28 bg-orange-400 rounded-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-orange-600 rounded-full"></div>
          </div>
        </div>
        
        <p className="absolute bottom-0 left-0 right-0 text-center text-gray-500 font-poppins text-xs">
          We use this info to personalize the app for the child's age and language.
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="absolute left-[640px] top-72 w-1 h-[433px] bg-gray-200"></div>

      {/* Form Section */}
      <div className="absolute right-16 top-80 w-[500px]">
        <div className="mb-8">
          <h2 className="font-poppins font-semibold text-3xl text-gray-600 mb-2">
            🧠 Basic Information
          </h2>
        </div>

        <div className="space-y-6">
          {/* Name Fields */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-poppins font-semibold text-xs text-gray-500 mb-2 tracking-tight">
                FIRST NAME
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full h-11 px-3 bg-gray-100 border border-blue-500 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block font-poppins font-semibold text-xs text-gray-500 mb-2 tracking-tight">
                LAST NAME
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Age, Gender, Language Fields */}
          <div className="flex gap-4">
            <div className="w-20">
              <label className="block font-poppins font-semibold text-xs text-gray-500 mb-2 tracking-tight">
                AGE
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="w-32">
              <label className="block font-poppins font-semibold text-xs text-gray-500 mb-2 tracking-tight">
                GENDER
              </label>
              <div className="relative">
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>
            
            <div className="flex-1">
              <label className="block font-poppins font-semibold text-xs text-gray-500 mb-2 tracking-tight">
                LANGUAGE
              </label>
              <div className="relative">
                <select
                  value={formData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                  className="w-full h-11 px-3 bg-gray-100 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                >
                  <option value="">Select Language</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="chinese">Chinese</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="pt-6">
            <button
              onClick={handleNext}
              className="w-full h-11 bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildRegistrationForm;