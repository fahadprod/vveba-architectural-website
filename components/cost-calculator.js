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
    <section className="cost-calculator-section">
      <div className="cost-calculator-container">
        <h2 className="cost-calculator-title">BUILDING COST ESTIMATOR</h2>
        <p className="cost-calculator-description">
          Get an instant estimate for your construction project based on your requirements
        </p>

        <div className="cost-calculator-form">
          <div className="cost-form-group">
            <label htmlFor="size" className="cost-form-label">
              Floor Area (sq ft): <span className="cost-value-display">{inputs.size}</span>
            </label>
            <input
              type="range"
              id="size"
              min="500"
              max="5000"
              step="100"
              value={inputs.size}
              onChange={(e) => setInputs({...inputs, size: e.target.value})}
              className="cost-form-range"
            />
            <div className="cost-range-labels">
              <span>500</span>
              <span>5000</span>
            </div>
          </div>

          <div className="cost-form-group">
            <label htmlFor="floors" className="cost-form-label">Number of Floors</label>
            <div className="cost-floor-options">
              {[1, 2, 3].map(floor => (
                <button
                  key={floor}
                  type="button"
                  className={`cost-floor-option ${inputs.floors === floor ? 'cost-active' : ''}`}
                  onClick={() => setInputs({...inputs, floors: floor})}
                >
                  {floor}
                </button>
              ))}
            </div>
          </div>

          <div className="cost-form-group">
            <label htmlFor="materials" className="cost-form-label">Material Quality</label>
            <select
              id="materials"
              value={inputs.materials}
              onChange={(e) => setInputs({...inputs, materials: e.target.value})}
              className="cost-form-select"
            >
              <option value="standard">Standard Materials ($150/sq ft)</option>
              <option value="premium">Premium Materials ($200/sq ft)</option>
            </select>
          </div>

          <div className="cost-form-group">
            <label htmlFor="location" className="cost-form-label">Location</label>
            <div className="cost-location-options">
              <label className="cost-location-option">
                <input
                  type="radio"
                  name="location"
                  value="urban"
                  checked={inputs.location === 'urban'}
                  onChange={() => setInputs({...inputs, location: 'urban'})}
                />
                <span>Urban (+20%)</span>
              </label>
              <label className="cost-location-option">
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

          <div className="cost-estimate-result">
            <h3>Estimated Construction Cost</h3>
            <div className="cost-estimate-amount">${calculateCost()}</div>
            <p className="cost-estimate-note">This is an approximate estimate based on current market rates</p>
          </div>
        </div>
      </div>
    </section>
  );
}