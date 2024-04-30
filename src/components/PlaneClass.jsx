// src/components/RadioButtons.js
import React, { useState } from 'react';

const PlaneClass = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h2>Class</h2>
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="Economy"
            checked={selectedOption === 'Economy'}
            onChange={handleRadioChange}
          />
          Economy
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="Premium Economy"
            checked={selectedOption === 'Premium Economy'}
            onChange={handleRadioChange}
          />
          Premium Economy
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="Business"
            checked={selectedOption === 'Business'}
            onChange={handleRadioChange}
          />
          Business
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
