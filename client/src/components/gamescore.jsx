import React from 'react';

const GameScore = ({ score, total }) => {
  const getMessage = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🌟 Perfect! Amazing pronunciation!";
    if (percentage >= 80) return "✅ Great job! Keep practicing!";
    if (percentage >= 50) return "👍 Good effort! Try to improve more!";
    return "💪 Keep practicing! You’ll get better!";
  };

  return (
    <div className="max-w-md mx-auto text-center mt-20 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-4">🎉 Level Complete</h1>
      <p className="text-xl mb-2">Your Score: <strong>{score} / {total}</strong></p>
      <p className="text-lg mb-4">{getMessage()}</p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
        onClick={() => window.location.reload()}
      >
        🔄 Try Again
      </button>
    </div>
  );
};

export default GameScore;
