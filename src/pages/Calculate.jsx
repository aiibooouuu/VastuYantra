import React, { useState } from 'react';
import './Calculate.css';

const directions = [
  'North-West', 'North', 'North-East',
  'West', 'Center', 'East',
  'South-West', 'South', 'South-East'
];

const rooms = [
  'Not Applicable', 'Kitchen', 'Hall', 'Bedroom',
  'Bathroom', 'Washroom', 'Drawing Room', 'Pooja Room', 'Study Room'
];

const vastuRules = {
  'North-East': { 'Pooja Room': 'Ideal for spiritual energy and peace.' },
  'South-East': { 'Kitchen': 'Represents fire, best for kitchens.' },
  'South-West': { 'Bedroom': 'Brings stability and grounding for couples.' },
  'North': { 'Hall': 'Good for social interaction and natural light.' },
  'East': { 'Study Room': 'Enhances focus and clarity.' },
  'West': { 'Bathroom': 'Neutral for water-based usage.' },
  'North-West': { 'Toilet': 'Supports air flow and hygiene.' },
};

const remedies = {
  'Pooja Room': 'If not in North East, place idols facing East and burn incense daily.',
  'Kitchen': 'If not in South East, add red bulb in SE corner.',
  'Bedroom': 'If not in South West, use earthy tones and place heavy furniture in SW.',
  'Hall': 'Use mirrors on North/East walls if not facing them.',
  'Study Room': 'Desk should face East/North and use green elements.',
  'Bathroom': 'Keep clean and use sea salt in corners.',
  'Toilet': 'Keep door shut and use lemon oil or vastu pyramids.',
  'Drawing Room': 'Keep bright and declutter NE if placed elsewhere.',
};

const Calculate = () => {
  const [layout, setLayout] = useState(Array(9).fill('Not Applicable'));
  const [result, setResult] = useState(null);

  const handleChange = (index, value) => {
    const updatedLayout = [...layout];
    updatedLayout[index] = value;
    setLayout(updatedLayout);
  };

  const calculateScore = () => {
    let score = 0;
    let details = [];

    layout.forEach((room, index) => {
      const dir = directions[index];
      let remark = '';
      let isIdeal = vastuRules[dir]?.[room];

      if (room === 'Not Applicable') {
        score += 1;
        remark = 'Neutral zone.';
      } else if (isIdeal) {
        score += 10;
        remark = `✅ Ideal placement: ${isIdeal}`;
      } else {
        score += 3;
        remark = `⚠️ Not ideal. Remedy: ${remedies[room] || 'Keep it clean and balanced.'}`;
      }

      if (room !== 'Not Applicable') {
        details.push({ dir, room, remark });
      }
    });

    setResult({ score, details });
  };

  return (
    <div className="calculate-container">
      <h2 className="section-title">Vastu Score Calculator</h2>
      <p className="section-subtitle">Select where each room is located in your home:</p>

      <div className="grid-result-wrapper">
        <div className="vastu-grid">
          {directions.map((dir, index) => (
            <div key={index} className="grid-cell">
              <label>{dir}</label>
              <select
                value={layout[index]}
                onChange={(e) => handleChange(index, e.target.value)}
              >
                {rooms.map((room, idx) => (
                  <option key={idx} value={room}>{room}</option>
                ))}
              </select>
            </div>
          ))}
          <button className="calculate-button" onClick={calculateScore}>
            Calculate Vastu Score
          </button>
        </div>

        {result && (
          <div className="score-summary">
            <h3
              style={{
                color:
                  result.score >= 70
                    ? 'green'
                    : result.score >= 45
                    ? '#e6b800'
                    : 'red',
              }}
            >
              Your Vastu Score: {result.score} / 90
            </h3>
            <p>Here’s a breakdown of your layout and suggestions:</p>
            <ul>
              {result.details.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.room}</strong> is placed in <em>{item.dir}</em>:<br />
                  <span>{item.remark}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculate;
