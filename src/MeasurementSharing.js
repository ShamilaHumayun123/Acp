
import React, { useState } from 'react';
import './MeasurementSharing.css';
import image from './Images/Measurements.PNG';

const MeasurementSharing = () => {
  const [selectedType, setSelectedType] = useState('');
  const [measurements, setMeasurements] = useState({});

  const clothingTypes = {
    "Shalwar Kameez": ["Kameez Length", "Kameez Width", "Kameez Shoulder", "Arm Hole", "Shalwar Length", "Shalwar Width", "Shalwar Waist", "Shalwar Asaan", "Shalwar Pouncha"],
    "Frock Pajama": ["Frock Length", "Frock Width", "Frock Shoulder", "Frock Waist", "Pajama Length", "Pajama Width", "Pajama Waist", "Pajama Asaan"],
    "Kurta": ["Kurta Length", "Kurta Width", "Kurta Shoulder", "Kurta Sleeve Length", "Pajama Length", "Pajama Width", "Pajama Waist", "Pajama Asaan"],
    "Shirt": ["Shirt Length", "Shirt Width", "Shirt Shoulder", "Shirt Sleeve Length", "Waist", "Hip"],
  };

  const units = ["cm", "m", "inches"];

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setMeasurements({});
  };

  const handleMeasurementChange = (event) => {
    const { name, value } = event.target;
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [name]: { ...prevMeasurements[name], value: value || '', unit: prevMeasurements[name]?.unit || 'cm' },
    }));
  };

  const handleUnitChange = (event, measurement) => {
    const { value } = event.target;
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [measurement]: { ...prevMeasurements[measurement], unit: value },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Measurements:", measurements);
    alert("Measurements submitted successfully!");
    setMeasurements({});
  };

  return (
    <div className="measurement-sharing-container">
      <div className="image-header">
        <div className="image-overlay">Measurement Sharing</div>
        <img src={image} alt="Measuring" />
      </div>
      <div className="form-section">
        
        <label htmlFor="clothingType">Select Clothing Type: </label>
        <select id="clothingType" value={selectedType} onChange={handleTypeChange}>
          <option value="">--Select--</option>
          {Object.keys(clothingTypes).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {selectedType && (
          <form onSubmit={handleSubmit}>
            <h2>{selectedType} Measurements</h2>
            <table>
              <thead>
                <tr>
                  <th>Measurement</th>
                  <th>Value</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {clothingTypes[selectedType].map((measurement) => (
                  <tr key={measurement}>
                    <td>{measurement}</td>
                    <td>
                      <input
                        type="number"
                        name={measurement}
                        value={measurements[measurement]?.value || ''}
                        onChange={handleMeasurementChange}
                        placeholder="Enter measurement"
                      />
                    </td>
                    <td>
                      <select
                        value={measurements[measurement]?.unit || 'cm'}
                        onChange={(event) => handleUnitChange(event, measurement)}
                      >
                        {units.map((unit) => (
                          <option key={unit} value={unit}>
                            {unit}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="submit" className="submit-button">Submit Measurements</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MeasurementSharing;
 

