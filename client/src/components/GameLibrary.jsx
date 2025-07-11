import { Link } from 'react-router-dom';

export default function GamesLibrary() {
  return (
    <div className="max-w-6xl mx-auto mt-12 p-6">
      <h2 className="text-4xl font-extrabold mb-4 text-indigo-700">🎮 Games Library</h2>
      <p className="mb-8 text-gray-600 text-lg">Choose a game and start learning in a fun way!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <a
          href="/games/game3.html"
          className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
        >
          <span className="text-5xl mb-4">🧩</span>
          <h3 className="text-xl font-semibold text-indigo-800">Daily Routine Sequencing</h3>
          <p className="text-sm text-gray-500 mt-2">Arrange tasks in order</p>
        </a>

        <a
          href="/games/social_rule.html"
          className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-100 to-green-50 border border-green-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
        >
          <span className="text-5xl mb-4">🎨</span>
          <h3 className="text-xl font-semibold text-green-800">Color Sort</h3>
          <p className="text-sm text-gray-500 mt-2">Match items by color</p>
        </a>

        <a
          href="/games/Shape.html"
          className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
        >
          <span className="text-5xl mb-4">✏️</span>
          <h3 className="text-xl font-semibold text-yellow-800">WorkShape Drawing</h3>
          <p className="text-sm text-gray-500 mt-2">Draw & learn shapes</p>
        </a>

      </div>
    </div>
  );
}
