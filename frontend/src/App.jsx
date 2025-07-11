import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 🔁 CHANGE: Use deployed backend URL
    fetch('https://f-backend-9ozd.onrender.com/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('Error fetching message:', err);
        setMessage('Error connecting to backend.');
      });
  }, []);

  return (
    <div className="h-screen bg-green-500 text-white flex flex-col items-center justify-center">
      <div className="mb-4">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-2">Vite + React</h1>
      <p className="text-xl">{message}</p>
    </div>
  );
}

export default App;
