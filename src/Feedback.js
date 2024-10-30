// Feedback.js
/* import React, { useState } from 'react';
import './Feedback.css';

function Feedback({ customerName }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [tailorName, setTailorName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleTailorNameChange = (e) => setTailorName(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleStarHover = (starValue) => {
    setHoverRating(starValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tailorName.trim() && feedback.trim()) {
      const newFeedback = { customerName, tailorName, text: feedback, rating };
      setFeedbackList([...feedbackList, newFeedback]);
      setTailorName('');
      setFeedback('');
      setRating(0);
    }
  };

  return (
    <div className="feedback-page">
      <h1>Customer Feedback</h1>
      
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div><strong>Logged-in Customer:</strong> {customerName}</div>
        
        <input
          type="text"
          value={tailorName}
          onChange={handleTailorNameChange}
          placeholder="Tailor's Name"
          required
        />
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Share your feedback..."
          required
        />
        
        <div className="rating">
          <label>Rate Us:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={() => setHoverRating(0)}
                className={star <= (hoverRating || rating) ? 'filled-star' : 'empty-star'}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        
        <button type="submit">Submit Feedback</button>
      </form>

      <div className="feedback-list">
        <h2>What Our Customers Say</h2>
        {feedbackList.map((item, index) => (
          <div className="feedback-item" key={index}>
            <p><strong>Customer:</strong> {item.customerName}</p>
            <p><strong>Tailor:</strong> {item.tailorName}</p>
            <p><strong>Feedback:</strong> "{item.text}"</p>
            <p>
              <strong>Rating:</strong>
              <span className="star-display">
                {Array.from({ length: item.rating }, (_, i) => (
                  <span key={i} className="filled-star">★</span>
                ))}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback; */
import React, { useState } from 'react';
import './Feedback.css';

function Feedback({ customerName }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [tailorName, setTailorName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleTailorNameChange = (e) => setTailorName(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleStarHover = (starValue) => {
    setHoverRating(starValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tailorName.trim() && feedback.trim()) {
      const newFeedback = { customerName, tailorName, text: feedback, rating };
      setFeedbackList([...feedbackList, newFeedback]);
      setTailorName('');
      setFeedback('');
      setRating(0);
    }
  };

  return (
    <div className="feedback-page">
      <h1>Customer Feedback</h1>
      
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div><strong>Logged-in Customer:</strong> {customerName}</div>
        
        <input
          type="text"
          value={tailorName}
          onChange={handleTailorNameChange}
          placeholder="Tailor's Name"
          required
        />
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Share your feedback..."
          required
        />
        
        <div className="rating">
          <label>Rate Us:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={() => setHoverRating(0)}
                className={star <= (hoverRating || rating) ? 'filled-star' : 'empty-star'}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        
        <button type="submit">Submit Feedback</button>
      </form>

      <div className="feedback-list">
        <h2>What Our Customers Say</h2>
        <div className="feedback-table">
          {feedbackList.map((item, index) => (
            <div className="feedback-item" key={index}>
              <p><strong>Customer:</strong> {item.customerName}</p>
              <p><strong>Tailor:</strong> {item.tailorName}</p>
              <p className="feedback-text"><strong>Feedback:</strong> "{item.text}"</p>
              <p>
                <strong>Rating:</strong>
                <span className="star-display">
                  {Array.from({ length: item.rating }, (_, i) => (
                    <span key={i} className="filled-star">★</span>
                  ))}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;

