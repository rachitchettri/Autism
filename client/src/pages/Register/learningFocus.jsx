import React, { useState } from 'react';
import Image from "../../assets/Group 3.png";
import Image1 from "../../assets/pngegg 1.png";

const LearningFocus = () => {
  const [selectedSubjects, setSelectedSubjects] = useState(['behaviour', 'shapes']);

  const subjects = [
    { id: 'behaviour', label: '😊 Behaviour & Emotion' },
    { id: 'shapes', label: '🧩 Shapes & Thinking' },
    { id: 'speech', label: '🔊 Speech and Words' }
  ];

  const toggleSubject = (subjectId) => {
    setSelectedSubjects(prev =>
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleNext = () => {
    console.log('Selected subjects:', selectedSubjects);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Nav Bar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-sm z-20 flex items-center px-8">
        <div className="text-2xl font-bold text-gray-900">LOGO</div>
      </nav>

      {/* Header */}
      <header className="pt-16 w-full bg-gradient-to-r from-[#60BC64] to-[#10723A] py-10 px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Learning Focus
          </h1>
          <p className="text-blue-200 mt-2 uppercase tracking-widest font-semibold text-sm md:text-base">
            WHAT SHOULD SANDESH WORK ON?
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
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto w-full px-8 py-12 gap-12 relative md:items-start"> {/* ✅ Changed md:items-center to md:items-start */}
        {/* Steps */}
        <div className="hidden md:flex flex-col items-center space-y-4">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-xs font-semibold ${
                  step === 2
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'bg-gray-200 border-gray-200 text-black'
                }`}
              >
                {step}
              </div>
              {step !== 3 && <div className="w-px h-10 bg-gray-300"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Left */}
        <div className="flex-1 flex justify-center">
          <img
            src={Image}
            alt="Learning Visual"
            className="w-72 md:w-96 object-contain"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300"></div>

        {/* Right */}
        <div className="flex-1 max-w-md">
          <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              🛣️ Personalize Your Learning
            </h2>
            <div className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-4">
              FOCUS AREAS
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              {subjects.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => toggleSubject(subject.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5 ${
                    selectedSubjects.includes(subject.id)
                      ? 'bg-blue-50 text-blue-700 border-blue-400'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {subject.label}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition shadow hover:shadow-lg"
            >
              NEXT
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningFocus;