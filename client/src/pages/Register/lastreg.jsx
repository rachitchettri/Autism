import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from "../../assets/Group 3.png";
import Image1 from "../../assets/pngegg 1.png";

const StepCircle = ({ number, active }) => (
  <div
    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
      active
        ? 'bg-green-600 border-green-600 text-white'
        : 'bg-gray-200 border-gray-200 text-black'
    }`}
  >
    <span className="text-xs font-medium">{number}</span>
  </div>
);

const StepConnector = () => (
  <div className="w-px h-10 bg-gray-200"></div>
);

export default function ReviewFinish() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    // In a real application, you would use React Router's navigate function:
    // navigate('/dashboard');
    console.log('Navigating to dashboard...');
  };

  const handleAddNewProfile = () => {
    // In a real application, you would use React Router's navigate function:
    // navigate('/add-profile');
    console.log('Navigating to add new profile...');
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col"> {/* Changed font-google-sans to font-sans for standard Tailwind */}
      {/* Nav */}
      <nav className="w-full h-16 flex items-center px-8 shadow-sm">
        <div className="text-black font-semibold text-xl font-poppins">LOGO</div>
      </nav>

      {/* Header */}
      <header className="w-full bg-gradient-to-r from-[#60BC64] to-[#10723A] px-8 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-white text-4xl md:text-5xl font-medium mb-2">
            Review & Finish
          </h1>
          <p className="text-[#D3FFD6] font-bold tracking-widest">
            MAKE SURE EVERYTHING LOOKS GOOD
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={Image1}
            alt="Illustration"
            className="w-64 md:w-80 object-contain"
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-8 py-12 gap-12 md:items-start"> {/* ✅ Added md:items-start */}
        {/* Steps */}
        <div className="flex flex-col items-center">
          <StepCircle number={1} />
          <StepConnector />
          <StepCircle number={2} />
          <StepConnector />
          <StepCircle number={3} active />
        </div>

        {/* Visual Left */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-8">
          <img
            src={Image}
            alt="Character Ladder"
            className="w-72 md:w-96 object-contain"
          />
         
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300"></div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl font-medium text-[#2A86EB]">
            👦 Sandesh’s Ready to Learn!
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-lg">
            Sandesh Dhakal is 7 years old and will be learning in English.
            We’ll begin with Behaviour & Emotions and Shapes & Thinking to match Sandesh’s needs.
            You can update these details anytime in Settings.
            <br /><br />
            Let’s make learning fun together!
          </p>

          <div className="flex flex-col gap-4 max-w-md">
            <button
              onClick={handleStartLearning}
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition"
            >
              START LEARNING 🎉
            </button>
            <button
              onClick={handleAddNewProfile}
              className="border-2 border-gray-400 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              ADD NEW PROFILE
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}