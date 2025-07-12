// import React, { useEffect, useRef, useState } from 'react';

// // Word levels
// const levelWords = {
//   1: ["Apple", "Banana", "Cat", "Dog", "Elephant"],
//   2: ["Fish", "Giraffe", "House", "Ice", "Juice"],
//   3: ["Kite", "Lion", "Monkey", "Nose", "Orange"]
// };

// // Remove articles and lowercase for comparison
// const clean = (text) => text.replace(/^(a |an |the )/i, '').trim().toLowerCase();

// // Similarity comparison (Levenshtein)
// function similarity(a, b) {
//   const longer = a.length > b.length ? a : b;
//   const shorter = a.length > b.length ? b : a;
//   const longerLength = longer.length;
//   if (longerLength === 0) return 1.0;
//   return (longerLength - levenshtein(longer, shorter)) / longerLength;
// }

// function levenshtein(a, b) {
//   const matrix = Array.from({ length: b.length + 1 }, (_, i) =>
//     Array.from({ length: a.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
//   );

//   for (let i = 1; i <= b.length; i++) {
//     for (let j = 1; j <= a.length; j++) {
//       matrix[i][j] = b[i - 1] === a[j - 1]
//         ? matrix[i - 1][j - 1]
//         : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
//     }
//   }
//   return matrix[b.length][a.length];
// }

// const PronunciationGame = () => {
//   const [level, setLevel] = useState(1);
//   const [index, setIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [feedback, setFeedback] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [spokenWord, setSpokenWord] = useState('');

//   const recognitionRef = useRef(null);
//   const words = levelWords[level];
//   const currentWord = words?.[index] ?? '';

//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert("Your browser does not support speech recognition.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onresult = (event) => {
//       const spoken = event.results[0][0].transcript.trim();
//       setSpokenWord(spoken);
//       const match = similarity(clean(spoken), clean(currentWord)) > 0.75;

//       if (match) {
//         setScore(prev => prev + 1);
//         setFeedback(`✅ Great job! You said: "${spoken}"`);
//       } else {
//         setFeedback(`❌ Oops! You said "${spoken}" — try saying "${currentWord}" again.`);
//       }

//       setTimeout(() => {
//         if (match && index + 1 < words.length) {
//           setIndex(i => i + 1);
//           setFeedback('');
//           setSpokenWord('');
//         } else if (match && level < 3 && index + 1 === words.length) {
//           setFeedback(`🎉 Nice! Level ${level} complete. Click below to go to Level ${level + 1}.`);
//         } else if (match && level === 3 && index + 1 === words.length) {
//           setFeedback(`🏁 All Levels Done! Final Score: ${score + 1} / 15`);
//           setGameOver(true);
//         }
//         setIsListening(false);
//       }, 3000);
//     };

//     recognition.onerror = (e) => {
//       setFeedback(`⚠️ Error: ${e.error}`);
//       setIsListening(false);
//     };

//     recognitionRef.current = recognition;

//     return () => recognition.abort();
//   }, [index, level, currentWord, score]);

//   const startListening = () => {
//     if (recognitionRef.current && !isListening) {
//       setIsListening(true);
//       setFeedback("🎤 Listening...");
//       recognitionRef.current.start();
//     }
//   };

//   const nextLevel = () => {
//     setLevel(prev => prev + 1);
//     setIndex(0);
//     setScore(0);
//     setFeedback('');
//     setSpokenWord('');
//     setGameOver(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4] p-4">
//       <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-xl border-4 border-green-200 text-center">
//         <h1 className="text-3xl font-bold text-green-600 mb-3">🗣️ Speak the Word</h1>
//         <div className="text-lg text-gray-700 mb-2">Level {level}</div>

//         {!gameOver && index < words.length && (
//           <div className="text-4xl text-green-700 font-bold mb-4">{currentWord}</div>
//         )}

//         {!gameOver && (
//           <div className="space-x-2">
//             <button
//               onClick={startListening}
//               disabled={isListening}
//               className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition disabled:opacity-50"
//             >
//               {isListening ? "🎙️ Listening..." : "🎤 Say It"}
//             </button>
//             {spokenWord && !isListening && (
//               <button
//                 onClick={startListening}
//                 className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
//               >
//                 🔁 Try Again
//               </button>
//             )}
//           </div>
//         )}

//         {feedback && (
//           <div className="mt-6 text-lg font-medium text-gray-800 min-h-[60px]">
//             {feedback}
//           </div>
//         )}

//         {index >= words.length && level < 3 && !gameOver && (
//           <button
//             onClick={nextLevel}
//             className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
//           >
//             🚀 Start Level {level + 1}
//           </button>
//         )}

//         <div className="mt-4 text-lg font-semibold text-green-800">
//           Score: {score} / {level * 5}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PronunciationGame;



import React, { useEffect, useRef, useState, useCallback } from "react";

// 📝 Word bank per level
const levelWords = {
  1: ["Apple", "Banana", "Cat", "Dog", "Elephant"],
  2: ["Fish", "Giraffe", "House", "Ice", "Juice"],
  3: ["Kite", "Lion", "Monkey", "Nose", "Orange"],
};

// 🔎 Utility – strip articles & lowercase
const clean = (txt) => txt.replace(/^(a |an |the )/i, "").trim().toLowerCase();

// 🔁 Levenshtein distance (edit distance)
function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) =>
    Array.from({ length: a.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
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

// ✨ Normalised similarity (0–1)
function similarity(a, b) {
  const [longer, shorter] = a.length > b.length ? [a, b] : [b, a];
  if (!longer.length) return 1;
  return (longer.length - levenshtein(longer, shorter)) / longer.length;
}

export default function PronunciationGame() {
  // 📊 Game state
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [spokenWord, setSpokenWord] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // 🔗 Refs to keep latest values in callbacks
  const recognitionRef = useRef(null);
  const currentWordRef = useRef("");
  const levelRef = useRef(level);

  const words = levelWords[level];
  const currentWord = words[index];
  currentWordRef.current = currentWord; // keep fresh
  levelRef.current = level;

  // 🎙️ Initialise SpeechRecognition once
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support the Web Speech API. Try latest Chrome, Edge or Safari.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;

    recog.onresult = (e) => {
      const spoken = e.results[0][0].transcript.trim();
      setSpokenWord(spoken);
      const match = similarity(clean(spoken), clean(currentWordRef.current)) > 0.75;

      if (match) {
        setScore((s) => s + 1);
        setFeedback(`✅ Great job! You said: "${spoken}"`);
      } else {
        setFeedback(`❌ Oops! You said "${spoken}" — try saying "${currentWordRef.current}" again.`);
      }

      // ⌛ Give the user 2.5 s before continuing
      setTimeout(() => {
        if (match) {
          advanceGame();
        }
        setIsListening(false);
      }, 2500);
    };

    recog.onerror = (e) => {
      setFeedback(`⚠️ Error: ${e.error}`);
      setIsListening(false);
    };

    recog.onend = () => {
      // Browser stopped listening (timeout / success). Ensure UI sync.
      setIsListening(false);
    };

    recognitionRef.current = recog;

    return () => recog.abort();
  }, []); // empty deps → run once

  /**
   * 🚀 Advance index / level / gameOver flags
   */
  const advanceGame = () => {
    setIndex((i) => {
      const nextIdx = i + 1;
      const isLastWordInLevel = nextIdx >= levelWords[levelRef.current].length;

      // Level finished
      if (isLastWordInLevel) {
        if (levelRef.current < 3) {
          setFeedback(`🎉 Nice! Level ${levelRef.current} complete. Click below to go to Level ${levelRef.current + 1}.`);
          return i; // keep index so word stays visible until user clicks
        }
        // All levels complete
        setFeedback(`🏁 All Levels Done! Final Score: ${score + 1} / 15`);
        setGameOver(true);
        return i; // game over – don't advance index
      }

      // Normal next word
      setFeedback("");
      setSpokenWord("");
      return nextIdx;
    });
  };

  /**
   * 🎧 Start listening (single utterance)
   */
  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening && !gameOver) {
      try {
        setIsListening(true);
        setFeedback("🎤 Listening…");
        setSpokenWord("");
        recognitionRef.current.start();
      } catch (err) {
        // Chrome may throw if start() called too soon after last stop().
        setFeedback("⚠️ Please wait a moment before trying again.");
        setIsListening(false);
      }
    }
  }, [isListening, gameOver]);

  /**
   * 🛑 Optionally allow user to cancel mid‑sentence.
   */
  const stopListening = useCallback(() => {
    recognitionRef.current?.abort();
  }, []);

  const nextLevel = () => {
    setLevel((l) => l + 1);
    setIndex(0);
    setScore(0);
    setFeedback("");
    setSpokenWord("");
    setGameOver(false);
  };

  // 🌈 Tailwind UI
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4] p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-xl border-4 border-green-200 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-3">🗣️ Speak the Word</h1>
        <div className="text-lg text-gray-700 mb-2">Level {level}</div>

        {!gameOver && index < words.length && (
          <div className="text-4xl text-green-700 font-bold mb-4">{currentWord}</div>
        )}

        {/* 🎮 Controls */}
        {!gameOver && (
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <button
              onClick={startListening}
              disabled={isListening}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition disabled:opacity-50"
            >
              {isListening ? "🎙️ Listening…" : "🎤 Say It"}
            </button>
            {isListening && (
              <button
                onClick={stopListening}
                className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition"
              >
                ✋ Stop
              </button>
            )}
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

        {/* 💬 Feedback */}
        {feedback && (
          <div className="mt-6 text-lg font-medium text-gray-800 min-h-[60px] whitespace-pre-line">
            {feedback}
          </div>
        )}

        {/* 🚀 Next level button */}
        {index >= words.length && level < 3 && !gameOver && (
          <button
            onClick={nextLevel}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            🚀 Start Level {level + 1}
          </button>
        )}

        {/* 🏅 Score */}
        <div className="mt-4 text-lg font-semibold text-green-800">
          Score: {score} / {level * 5}
        </div>
      </div>
    </div>
  );
}
