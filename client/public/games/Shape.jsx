import React, { useEffect, useRef, useState } from 'react';
import * as tmImage from '@teachablemachine/image';

const modelURLs = {
  1: "https://teachablemachine.withgoogle.com/models/abc123/",
  2: "https://teachablemachine.withgoogle.com/models/abc456/",
  3: "https://teachablemachine.withgoogle.com/models/abc789/"
};

const WorkShapeGame = () => {
  const canvasRef = useRef(null);
  const [level, setLevel] = useState(1);
  const [model, setModel] = useState(null);
  const [status, setStatus] = useState("Loading model...");
  const [result, setResult] = useState("");
  const [drawing, setDrawing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const canvas = canvasRef.current;
  const ctx = canvas?.getContext('2d');

  // Load model when level changes
  useEffect(() => {
    const load = async () => {
      setStatus("⏳ Loading AI model...");
      const modelURL = modelURLs[level];
      try {
        const loadedModel = await tmImage.load(modelURL + "model.json", modelURL + "metadata.json");
        setModel(loadedModel);
        setStatus("✅ Model ready!");
        clearCanvas(); // clear on level change
        setResult("");
        setIsComplete(false);
      } catch (err) {
        setStatus("❌ Failed to load model.");
      }
    };
    load();
  }, [level]);

  // Drawing handlers
  const startDraw = (e) => {
    setDrawing(true);
    const [x, y] = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!drawing) return;
    e.preventDefault();
    const [x, y] = getPos(e);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#16a34a';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const endDraw = () => {
    setDrawing(false);
    ctx.closePath();
  };

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
      return [
        e.touches[0].clientX - rect.left,
        e.touches[0].clientY - rect.top
      ];
    }
    return [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
  };

  const clearCanvas = () => {
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    setResult("");
  };

  const checkShape = async () => {
    if (!model) return alert("Model not ready yet.");
    const tempImg = new Image();
    tempImg.src = canvas.toDataURL("image/png");

    tempImg.onload = async () => {
      const prediction = await model.predict(tempImg);
      prediction.sort((a, b) => b.probability - a.probability);
      const best = prediction[0];

      const res = `✅ It looks like a ${best.className}!`;
      setResult(res);

      const speak = new SpeechSynthesisUtterance(`Great! You drew a ${best.className}!`);
      window.speechSynthesis.speak(speak);

      // Advance level after success
      setTimeout(() => {
        if (level < 3) {
          setLevel(prev => prev + 1);
        } else {
          setIsComplete(true);
          setResult("🎉 You've completed all levels!");
          const completeMsg = new SpeechSynthesisUtterance("Awesome! You've completed all shape levels.");
          window.speechSynthesis.speak(completeMsg);
        }
      }, 2500);
    };
  };

  return (
    <div className="min-h-screen bg-[#d3ffd6] flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-white border-4 border-[#a7eeb3] p-8 rounded-3xl shadow-2xl w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#16a34a]">✏️ WorkShape: Level {level}</h1>
        <p className="mb-4 text-gray-700">Draw a shape and let AI guess it!</p>

        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="mb-4 border-4 border-[#16a34a] rounded-xl bg-white touch-none"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />

        <div className="flex gap-4 justify-center mb-4">
          <button
            onClick={checkShape}
            className="px-6 py-3 bg-[#16a34a] text-white rounded-full shadow hover:bg-green-700"
            disabled={isComplete}
          >
            Check Shape ✅
          </button>
          <button
            onClick={clearCanvas}
            className="px-6 py-3 bg-gray-400 text-white rounded-full shadow hover:bg-gray-500"
          >
            Clear 🔄
          </button>
        </div>

        <p className="text-2xl font-bold text-black mt-2">{result}</p>
        <p className="text-green-700 font-semibold mt-2">{status}</p>

        <div className="mt-6 space-x-3">
          {[1, 2, 3].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`px-4 py-2 rounded-full border ${
                lvl === level
                  ? 'bg-[#16a34a] text-white'
                  : 'bg-white text-[#16a34a] border-[#16a34a]'
              }`}
            >
              Level {lvl}
            </button>
          ))}
        </div>

        {isComplete && (
          <button
            onClick={() => setLevel(1)}
            className="mt-6 px-6 py-2 bg-[#16a34a] text-white rounded-full shadow hover:bg-green-700"
          >
            🔁 Restart Game
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkShapeGame;
