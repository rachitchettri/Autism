import React, { useEffect, useState } from "react";

// Utility to shuffle array
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

// Word to icon mapping
const wordToIconMap = {
  Apple: "https://img.icons8.com/color/96/apple--v1.png",
  Ball: "https://img.icons8.com/color/96/soccer-ball.png",
  Ant: "https://img.icons8.com/color/96/ant.png",
  Bat: "https://img.icons8.com/color/96/baseball.png",
  Cat: "https://img.icons8.com/color/96/cat.png",
  Dog: "https://img.icons8.com/color/96/dog.png",
  Elephant: "https://img.icons8.com/color/96/elephant.png",
  Fan: "https://img.icons8.com/color/96/fan.png",
  Egg: "https://img.icons8.com/color/96/egg.png",
  Fork: "https://img.icons8.com/color/96/fork.png",
  Car: "https://img.icons8.com/color/96/sedan.png",
  Envelope: "https://img.icons8.com/color/96/closed-envelope.png",
  Fish: "https://img.icons8.com/color/96/fish.png",
  Toy: "https://img.icons8.com/color/96/toy.png",
  Zoo: "https://img.icons8.com/color/96/zoo.png",
  Bus: "https://img.icons8.com/color/96/bus.png",
  Orange: "https://img.icons8.com/color/96/orange.png",
};

// Question list with just letters, answers, and word options
const allQuestions = [
  { letter: "A", answer: "Apple", options: ["Apple", "Orange", "Ball"] },
  { letter: "B", answer: "Ball", options: ["Ball", "Cat", "Apple"] },
  { letter: "C", answer: "Cat", options: ["Toy", "Cat", "Dog"] },
  { letter: "D", answer: "Dog", options: ["Dog", "Ant", "Cat"] },
  { letter: "E", answer: "Elephant", options: ["Elephant", "Fan", "Bus"] },
  { letter: "F", answer: "Fish", options: ["Fish", "Zoo", "Egg"] },
];

// Select random N unique letter questions
const getUniqueQuestions = (count = 5) => shuffle(allQuestions).slice(0, count);

export default function ABCGame() {
  const [questions] = useState(getUniqueQuestions(5));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [nepaliVoice, setNepaliVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const nep = voices.find((v) => v.lang.startsWith("ne")) || null;
      setNepaliVoice(nep);
    };
    speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData("text", word);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData("text");
    const q = questions[current];
    setSelected(word);

    const utter = new SpeechSynthesisUtterance(`${q.letter} for ${word}`);
    utter.lang = nepaliVoice ? nepaliVoice.lang : "en-US";
    if (nepaliVoice) utter.voice = nepaliVoice;
    speechSynthesis.speak(utter);

    if (word === q.answer) {
      setResult("✅ Correct!");
      setCorrectCount((prev) => prev + 1);
      setTimeout(() => {
        if (current + 1 < questions.length) {
          setCurrent((prev) => prev + 1);
          setResult("");
          setSelected("");
        }
      }, 2000);
    } else {
      setResult("❌ Try again!");
      setWrongCount((prev) => prev + 1);
    }
  };

  const allowDrop = (e) => e.preventDefault();

  const q = questions[current];

  return (
    <div
      style={{
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        padding: "40px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2.5em", color: "#333" }}>Drag the Word into the Blank!</h1>

      {current < questions.length ? (
        <>
          <div style={{ fontSize: "2em", margin: "40px 0" }}>
            <span>{q.letter}</span> for{" "}
            <span
              onDragOver={allowDrop}
              onDrop={handleDrop}
              style={{
                display: "inline-block",
                minWidth: "150px",
                minHeight: "50px",
                border: "2px dashed #555",
                borderRadius: "10px",
                verticalAlign: "middle",
                lineHeight: "50px",
                background: "#fff",
                padding: "0 10px",
              }}
            >
              {selected || "_____"}
            </span>
          </div>

          <div
            style={{
              fontSize: "1.5em",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {result}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {q.options.map((word, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, word)}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  padding: "20px",
                  cursor: "grab",
                  width: "120px",
                  textAlign: "center",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <img
                  src={wordToIconMap[word] || "https://img.icons8.com/ios-filled/100/000000/question-mark.png"}
                  alt={word}
                  style={{ width: "50px", height: "50px" }}
                />
                <div style={{ marginTop: "10px", fontSize: "1.1em", color: "#333" }}>{word}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2 style={{ fontSize: "2em", marginTop: "40px" }}>🎉 Game Over!</h2>
          <p style={{ fontSize: "1.2em" }}>✅ Correct: {correctCount}</p>
          <p style={{ fontSize: "1.2em" }}>❌ Incorrect Attempts: {wrongCount}</p>
        </div>
      )}
    </div>
  );
}
