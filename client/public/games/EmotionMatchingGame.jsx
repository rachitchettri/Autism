import React, { useState, useEffect, useRef } from 'react';

const emotions = [
  {
    label: "Happy",
    img: "https://th.bing.com/th/id/R.1c05de0609916e40f72cdc9669ee4d09?rik=%2f%2f1f3nZ5GJrdjQ&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fhappy%2fhappy-06.jpg&ehk=eCiuP1pMTtYeV2q8MpK3C5Vm0l2ValarKRDdIfZzjpY%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    label: "Sad",
    img: "https://th.bing.com/th/id/OIP.99UyvYmVT9c5Ao0kuY4uLAHaHZ?w=195&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    label: "Angry",
    img: "https://tse1.explicit.bing.net/th/id/OIP.nMTSSkrnW72scimdePqOgwHaHZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    label: "Surprised",
    img: "https://www.pngmart.com/files/23/Surprised-Emoji-PNG-Photo.png"
  }
];

const EmotionMatchingGame = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [matched, setMatched] = useState({});
  const [feedback, setFeedback] = useState('');
  const voicesRef = useRef([]);

  useEffect(() => {
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }
  }, []);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    const voices = voicesRef.current;
    const preferredVoice = voices.find(
      (v) => v.lang.toLowerCase().includes('en-in') || v.name.toLowerCase().includes('english')
    );
    if (preferredVoice) utterance.voice = preferredVoice;
    window.speechSynthesis.speak(utterance);
  };

  const handleEmotionClick = (emotion) => {
    setSelectedWord(emotion);
    setFeedback('');
  };

  const handleFaceClick = (face) => {
    if (!selectedWord) {
      setFeedback('Select an emotion word first!');
      speak('Select an emotion word first');
      return;
    }

    const isCorrect = selectedWord === face;
    const updated = { ...matched };

    if (isCorrect) {
      updated[face] = selectedWord;
      setMatched(updated);
      setFeedback(`✅ Matched ${selectedWord} correctly!`);
      speak(`Correct! That is ${selectedWord}`);
    } else {
      setFeedback('❌ Try again!');
      speak('Oops! Try again');
    }

    setSelectedWord('');
  };

  const resetGame = () => {
    setMatched({});
    setSelectedWord('');
    setFeedback('');
  };

  useEffect(() => {
    if (Object.keys(matched).length === emotions.length) {
      setFeedback("🎉 All matched! Great job!");
      speak("Awesome! You matched all emotions!");
    }
  }, [matched]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-lime-200 py-10 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-4xl border-4 border-green-200">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-2">Emotion Matching Game</h1>
        <p className="text-gray-600 text-center mb-8">Tap an emotion word and match it with the right face.</p>

        {/* Faces Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {emotions.map((emotion, index) => (
            <div
              key={index}
              onClick={() => handleFaceClick(emotion.label)}
              className={`cursor-pointer rounded-2xl border-2 p-4 transition transform hover:scale-105 ${
                matched[emotion.label]
                  ? 'bg-green-100 border-green-400'
                  : 'bg-green-50 border-green-200'
              }`}
            >
              <img src={emotion.img} alt={emotion.label} className="w-full h-24 object-contain mb-3" />
              <p className="text-lg font-bold text-center">
                {matched[emotion.label] ? matched[emotion.label] : '?'}
              </p>
            </div>
          ))}
        </div>

        {/* Emotion Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {emotions.map((emotion, index) => (
            <button
              key={index}
              disabled={matched[emotion.label]}
              onClick={() => handleEmotionClick(emotion.label)}
              className={`px-6 py-2 rounded-full font-semibold text-white shadow transition-all ${
                selectedWord === emotion.label
                  ? 'bg-green-700'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {emotion.label}
            </button>
          ))}
        </div>

        {/* Feedback */}
        <div className="text-xl text-center font-medium text-gray-800 min-h-[40px]">
          {feedback}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold shadow"
          >
            🔄 Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmotionMatchingGame;
