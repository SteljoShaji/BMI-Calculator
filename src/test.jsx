import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h2>Your BMI:</h2>
          <p>{bmi}</p>
        </div>
      )}
    </div>
  );
}

export default App;
