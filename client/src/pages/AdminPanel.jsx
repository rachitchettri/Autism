import { useEffect, useState } from 'react';
import { getAllChildren } from '../api';

export default function AdminPanel() {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const res = await getAllChildren();
        setChildren(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load children data.');
      }
    };

    fetchChildren();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">🏫 Organization Admin Panel</h2>

      <p className="mb-6 text-gray-600">
        View all registered kids under your organization. Export reports and assign new activities.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left border">Child Name</th>
              <th className="p-3 text-left border">Parent</th>
              <th className="p-3 text-left border">Age</th>
              <th className="p-3 text-left border">Games Played</th>
            </tr>
          </thead>
          <tbody>
            {children.map((child, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 border">{child.childName || '-'}</td>
                <td className="p-3 border">{child.parentName}</td>
                <td className="p-3 border">{child.childAge || '-'}</td>
                <td className="p-3 border">{child.gamesCount || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <button
          onClick={() => alert('✅ Export as CSV coming soon!')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-4"
        >
          📥 Export CSV
        </button>

        <button
          onClick={() => alert('✅ Assign new activities coming soon!')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Assign Activity
        </button>
      </div>
    </div>
  );
}
