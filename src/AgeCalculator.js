// AgeCalculator.js

import React, { useState } from 'react';

function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dateOfBirth) {
      const dob = new Date(dateOfBirth);
      const today = new Date();
      const ageInMilliseconds = today - dob;
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      setAge(ageInYears);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        placeholder="Date of Birth"
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is approximately {age} years.</p>}
    </div>
  );
}

export default AgeCalculator;