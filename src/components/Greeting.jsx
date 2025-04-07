// src/components/Greeting.jsx
import React, { useEffect, useState } from 'react';
import './Greeting.css';
import Loader from './Loader';

const quotes = [
  '"Peace comes from within. Do not seek it without."',
  '"The mind is everything. What you think you become."',
  '"Happiness is not something ready-made. It comes from your own actions."',
  '"In the midst of movement and chaos, keep stillness inside of you."',
  '"You are what your deep, driving desire is."',
  '"Let your faith be bigger than your fear."',
  '"When you realize nothing is lacking, the whole world belongs to you."',
  '"The soul always knows what to do to heal itself."',
  '"He who lives in harmony with himself lives in harmony with the universe."',
  '"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."'
];

const Greeting = ({ onStart }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="greeting-container">
         <svg className="greeting-curve" viewBox="0 0 100 100" preserveAspectRatio="none">
  {/* First, bold curve */}
  <path
    d="M50,0 
       C70,25 30,75 50,100 
       L0,100 
       L0,0 
       Z"
    fill="rgba(188, 108, 37, 0.4)"
  />

  {/* Slightly offset second wave */}
  <path
    d="M50,0 
       C80,30 20,70 50,100 
       L0,100 
       L0,0 
       Z"
    fill="rgba(188, 108, 37, 0.25)"
  />

  {/* Faint background wave */}
  <path
    d="M50,0 
       C90,35 10,65 50,100 
       L0,100 
       L0,0 
       Z"
    fill="rgba(188, 108, 37, 0.15)"
  />
</svg>






      <div className="greeting-overlay" />
      <div className="greeting-content">
        <Loader />
        <p className="quote">{quote}</p>
        <button className="start-btn" onClick={onStart}>Get Started </button>
      </div>
    </div>
  );
};

export default Greeting;
