// OrderDetails.js

import React from 'react';

function OrderDetails() {
  return (
    <div className="order-details-container" style={styles.container}>
      <h2 style={styles.header}>Order Details</h2>
      
      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Customer Name<span style={styles.required}>*</span></label>
          <input type="text" placeholder="Nimra" style={styles.input}  />
        </div>
        
        <div style={styles.inputGroup}>
          <label>Dress Color</label>
          <select style={styles.select}>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
          </select>
        </div>
        
        <div style={styles.inputGroup}>
          <label>Status<span style={styles.required}>*</span></label>
          <input type="text" placeholder="Ready" style={styles.input}  />
        </div>
        
        <div style={styles.inputGroup}>
          <label>Dress Image<span style={styles.required}>*</span></label>
          <button style={styles.button}>Browse</button>
        </div>
        
        <div style={styles.inputGroup}>
          <label>Discount<span style={styles.required}>*</span></label>
          <input type="text" placeholder="20%" style={styles.input}  />
        </div>
        
        <div style={styles.inputGroup}>
          <label>Delivery Fee<span style={styles.required}>*</span></label>
          <input type="text" placeholder="200RS" style={styles.input}  />
        </div>
        
        <div style={styles.inputGroup}>
          <label>Customer Address<span style={styles.required}>*</span></label>
          <input type="text" placeholder="BII 825 Gulberg Green Islamabad" style={styles.input}  />
        </div>
        
        <div style={styles.inputGroup}>
          <label>Sub Total<span style={styles.required}>*</span></label>
          <input type="text" placeholder="2500RS" style={styles.input}  />
        </div>
        
        <div style={styles.inputGroup} className="description">
          <label>Description</label>
          <textarea
            style={styles.textarea}
            placeholder="Dress is ready for delivery. You have to deliver dress at address no BII 825 at after noon 12:30PM."
            disabled
          />
        </div>
        
        <button style={styles.saveButton}>Save</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  
  },
  header: {
    textAlign: 'left',
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  inputGroup: {
    flex: '1 1 45%',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
    backgroundColor: '#f2f2f2',
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
    backgroundColor: '#f2f2f2',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
    backgroundColor: '#ccc',
    cursor: 'pointer',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
    minHeight: '80px',
    resize: 'none',
    backgroundColor: '#f2f2f2',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginTop: '90px',
  },
  required: {
    color: '#ff4d4f',
  },
};

export default OrderDetails;
