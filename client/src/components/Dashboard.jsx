import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { api } from '../api';

export default function Dashboard() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/games/my-progress')
      .then((res) => setRecords(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;


  const sortedRecords = [...records].sort((a, b) =>
    new Date(a.createdAt) - new Date(b.createdAt)
  );

  const labels = sortedRecords.map((r) =>
    new Date(r.createdAt).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  );

  const scores = sortedRecords.map((r) => r.score);

  const data = {
    labels,
    datasets: [
      {
        label: 'Score',
        data: scores,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">📈 Your Progress</h2>
      {scores.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <p>No progress data found.</p>
      )}
    </div>
  );
}
