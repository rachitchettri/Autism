import { useEffect, useState } from 'react';
import { api } from '../api';

export default function MotivationalBox() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    api.get('/quotes/random').then(res => setQuote(res.data.text));
  }, []);

  return (
    <blockquote className="italic text-green-600 mt-4">
      "{quote}"
    </blockquote>
  );
}
