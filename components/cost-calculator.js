

import { useState } from 'react';

export default function CostCalculator() {
  const [inputs, setInputs] = useState({ 
    size: 1500, 
    materials: 'standard',
    floors: 1,
    location: 'urban'
  });

  const calculateCost = () => {
    const baseRate = inputs.materials === 'premium' ? 200 : 150;
    const locationMultiplier = inputs.location === 'urban' ? 1.2 : 1;
    return (inputs.size * baseRate * inputs.floors * locationMultiplier).toLocaleString();
  };

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <h2 className="calculator-title">BUILDING COST ESTIMATOR</h2>
        <p className="calculator-description">
          Get an instant estimate for your construction project based on your requirements
        </p>

        <div className="calculator-form">
          <div className="form-group">
            <label htmlFor="size" className="form-label">
              Floor Area (sq ft): <span className="value-display">{inputs.size}</span>
            </label>
            <input
              type="range"
              id="size"
              min="500"
              max="5000"
              step="100"
              value={inputs.size}
              onChange={(e) => setInputs({...inputs, size: e.target.value})}
              className="form-range"
            />
            <div className="range-labels">
              <span>500</span>
              <span>5000</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="floors" className="form-label">Number of Floors</label>
            <div className="floor-options">
              {[1, 2, 3].map(floor => (
                <button
                  key={floor}
                  type="button"
                  className={`floor-option ${inputs.floors === floor ? 'active' : ''}`}
                  onClick={() => setInputs({...inputs, floors: floor})}
                >
                  {floor}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="materials" className="form-label">Material Quality</label>
            <select
              id="materials"
              value={inputs.materials}
              onChange={(e) => setInputs({...inputs, materials: e.target.value})}
              className="form-select"
            >
              <option value="standard">Standard Materials ($150/sq ft)</option>
              <option value="premium">Premium Materials ($200/sq ft)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location" className="form-label">Location</label>
            <div className="location-options">
              <label className="location-option">
                <input
                  type="radio"
                  name="location"
                  value="urban"
                  checked={inputs.location === 'urban'}
                  onChange={() => setInputs({...inputs, location: 'urban'})}
                />
                <span>Urban (+20%)</span>
              </label>
              <label className="location-option">
                <input
                  type="radio"
                  name="location"
                  value="rural"
                  checked={inputs.location === 'rural'}
                  onChange={() => setInputs({...inputs, location: 'rural'})}
                />
                <span>Rural</span>
              </label>
            </div>
          </div>

          <div className="estimate-result">
            <h3>Estimated Construction Cost</h3>
            <div className="estimate-amount">${calculateCost()}</div>
            <p className="estimate-note">This is an approximate estimate based on current market rates</p>
          </div>
        </div>
      </div>
    </section>
  );
}