import React, { useEffect, useRef, useState } from 'react';

// Word levels
const levelWords = {
  1: ["Apple", "Banana", "Cat", "Dog", "Elephant"],
  2: ["Fish", "Giraffe", "House", "Ice", "Juice"],
  3: ["Kite", "Lion", "Monkey", "Nose", "Orange"]
};

// Remove articles and lowercase for comparison
const clean = (text) => text.replace(/^(a |an |the )/i, '').trim().toLowerCase();

// Similarity comparison (Levenshtein)
function similarity(a, b) {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - levenshtein(longer, shorter)) / longerLength;
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) =>
    Array.from({ length: a.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i - 1] === a[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
    }
  }
  return matrix[b.length][a.length];
}

const PronunciationGame = () => {
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [spokenWord, setSpokenWord] = useState('');

  const recognitionRef = useRef(null);
  const words = levelWords[level];
  const currentWord = words?.[index] ?? '';

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript.trim();
      setSpokenWord(spoken);
      const match = similarity(clean(spoken), clean(currentWord)) > 0.75;

      if (match) {
        setScore(prev => prev + 1);
        setFeedback(`✅ Great job! You said: "${spoken}"`);
      } else {
        setFeedback(`❌ Oops! You said "${spoken}" — try saying "${currentWord}" again.`);
      }

      setTimeout(() => {
        if (match && index + 1 < words.length) {
          setIndex(i => i + 1);
          setFeedback('');
          setSpokenWord('');
        } else if (match && level < 3 && index + 1 === words.length) {
          setFeedback(`🎉 Nice! Level ${level} complete. Click below to go to Level ${level + 1}.`);
        } else if (match && level === 3 && index + 1 === words.length) {
          setFeedback(`🏁 All Levels Done! Final Score: ${score + 1} / 15`);
          setGameOver(true);
        }
        setIsListening(false);
      }, 3000);
    };

    recognition.onerror = (e) => {
      setFeedback(`⚠️ Error: ${e.error}`);
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => recognition.abort();
  }, [index, level, currentWord, score]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      setFeedback("🎤 Listening...");
      recognitionRef.current.start();
    }
  };

  const nextLevel = () => {
    setLevel(prev => prev + 1);
    setIndex(0);
    setScore(0);
    setFeedback('');
    setSpokenWord('');
    setGameOver(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4] p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-xl border-4 border-green-200 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-3">🗣️ Speak the Word</h1>
        <div className="text-lg text-gray-700 mb-2">Level {level}</div>

        {!gameOver && index < words.length && (
          <div className="text-4xl text-green-700 font-bold mb-4">{currentWord}</div>
        )}

        {!gameOver && (
          <div className="space-x-2">
            <button
              onClick={startListening}
              disabled={isListening}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition disabled:opacity-50"
            >
              {isListening ? "🎙️ Listening..." : "🎤 Say It"}
            </button>
            {spokenWord && !isListening && (
              <button
                onClick={startListening}
                className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                🔁 Try Again
              </button>
            )}
          </div>
        )}

        {feedback && (
          <div className="mt-6 text-lg font-medium text-gray-800 min-h-[60px]">
            {feedback}
          </div>
        )}

        {index >= words.length && level < 3 && !gameOver && (
          <button
            onClick={nextLevel}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            🚀 Start Level {level + 1}
          </button>
        )}

        <div className="mt-4 text-lg font-semibold text-green-800">
          Score: {score} / {level * 5}
        </div>
      </div>
    </div>
  );
};

export default PronunciationGame;
