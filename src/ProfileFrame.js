import React, { useState } from 'react';
import './ProfileFrame.css';
import { FaUpload } from 'react-icons/fa'; // Importing upload icon from react-icons

const ProfileFrame = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [certifications, setCertifications] = useState('');
  const [servicesOffered, setServicesOffered] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [appointmentSystem, setAppointmentSystem] = useState('');
  const [customerRating, setCustomerRating] = useState(0);
  const [certFile, setCertFile] = useState(null); // State for certificate file

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCertChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRatingChange = (rating) => {
    setCustomerRating(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate mandatory fields
    if (!name || !gender || !address || !phone || !email || !experience || !workingHours) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    // Handle form submission logic here
    // For example, send the data to the server
    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-frame">
      <h1>Tailor Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="image-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="upload"
          />
          <label htmlFor="upload" className="image-upload-label">
            {image ? (
              <img src={image} alt="Profile" className="profile-picture" />
            ) : (
              <div className="placeholder">Upload Picture</div>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="input-field" required>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-field"
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <label>Experience (in years):</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="input-field"
            placeholder="Enter years of experience"
            required
          />
        </div>
        <div className="form-group">
          <label>Specialization:</label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="input-field"
            placeholder="Enter your specialization(e:g in fancy or simple clothes)"
          />
        </div>
        <div className="form-group">
          <label>Portfolio Link:</label>
          <input
            type="text"
            value={portfolioLink}
            onChange={(e) => setPortfolioLink(e.target.value)}
            className="input-field"
            placeholder="Enter portfolio link(e:g anyother page where you upload all your stitched dresses)"
          />
        </div>
        <div className="form-group">
          <label>Certifications:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCertChange}
            style={{ display: 'none' }}
            id="cert-upload"
          />
          <label htmlFor="cert-upload" className="cert-upload-label">
            <FaUpload className="upload-icon" /> Upload Certificate
          </label>
          {certFile && <img src={certFile} alt="Certificate" className="cert-preview" />}
          <input
            type="text"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
            className="input-field"
            placeholder="Enter certifications"
          />
        </div>
        <div className="form-group">
          <label>Services Offered:</label>
          <input
            type="text"
            value={servicesOffered}
            onChange={(e) => setServicesOffered(e.target.value)}
            className="input-field"
            placeholder="Enter services offered(e:g if work with famous fashion designers"
          />
        </div>
        <div className="form-group">
          <label>Working Hours:</label>
          <input
            type="text"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
            className="input-field"
            placeholder="Enter working hours"
            required
          />
        </div>
        <div className="form-group">
          <label>Appointment System:</label>
          <input
            type="text"
            value={appointmentSystem}
            onChange={(e) => setAppointmentSystem(e.target.value)}
            className="input-field"
            placeholder="Enter appointment system(e:g Availbility time"
/>
        </div>
        <div className="form-group">
          <label>Customer Rating:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${customerRating >= star ? 'filled' : ''}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
          <div>{customerRating} out of 5 stars</div>
        </div>
        <button type="submit" className="submit-button">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileFrame;







