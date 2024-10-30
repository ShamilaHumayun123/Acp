// Orders.js

import React from 'react';

function Orders() {
  return (
    <div style={styles.container}>
      

      <div style={styles.content}>
        
        <h2 style={styles.header}>Orders</h2>

        <div style={styles.actionButtons}>
          <button style={styles.importButton}>Import Orders</button>
          <button style={styles.newOrderButton}>+ New Orders</button>
        </div>

        <div style={styles.searchBar}>
          <input type="text" placeholder="Search order ID" style={styles.searchInput} />
          <button style={styles.iconButton}>📅</button>
          <button style={styles.iconButton}>Sales</button>
          <button style={styles.iconButton}>Status</button>
          <button style={styles.iconButton}>Filter</button>
        </div>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th><input type="checkbox" /></th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Order Type</th>
                <th>Destination</th>
                <th>Items</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
             
              <tr style={styles.tableRow}>
                <td><input type="checkbox" /></td>
                <td>#2</td>
                <td>10/25/2024</td>
                <td>Shamila</td>
                <td>Online</td>
                <td>RWP</td>
                <td>8</td>
                <td><span style={styles.completedStatus}>Completed</span></td>
              </tr> <tr style={styles.tableRow}>
                <td><input type="checkbox" /></td>
                <td>#3</td>
                <td>01/30/2024</td>
                <td>Nimra</td>
                <td>Online</td>
                <td>RWP</td>
                <td>2</td>
                <td><span style={styles.pendingStatus}>Pending</span></td>
              </tr> <tr style={styles.tableRow}>
                <td><input type="checkbox" /></td>
                <td>#4</td>
                <td>06/20/2024</td>
                <td>Hudda</td>
                <td>Online</td>
                <td>RWP</td>
                <td>1</td>
                <td><span style={styles.completedStatus}>Completed</span></td>
              </tr> <tr style={styles.tableRow}>
                <td><input type="checkbox" /></td>
                <td>#5</td>
                <td>06/30/2022</td>
                <td>Faiza</td>
                <td>Online</td>
                <td>RWP</td>
                <td>2</td>
                <td><span style={styles.pendingStatus}>Pending</span></td>
              </tr> <tr style={styles.tableRow}>
                <td><input type="checkbox" /></td>
                <td>#6</td>
                <td>11/30/2024</td>
                <td>Wahaj</td>
                <td>Online</td>
                <td>RWP</td>
                <td>5</td>
                <td><span style={styles.pendingStatus}>Pending</span></td>
              </tr> 
             
            </tbody>
          </table>
        </div>
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
  sidebar: {
    width: '80px',
    backgroundColor: '#FF4D4F',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
    color: '#fff',
  },
  sidebarItem: {
    padding: '15px 0',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  importButton: {
    padding: '10px 15px',
    backgroundColor: '#FFB6C1',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  newOrderButton: {
    padding: '10px 15px',
    backgroundColor: '#FF4D4F',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  searchInput: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  iconButton: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  tableWrapper: {
    overflowX: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  tableHeaderRow: {
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  tableRow: {
    borderBottom: '1px solid #e0e0e0',
    transition: 'background-color 0.2s',
    height:50,
  },
  tableRowHover: {
    backgroundColor: '#f9f9f9',
  },
  completedStatus: {
    color: '#fff',
    backgroundColor: '#28a745',
    padding: '5px 10px',
    borderRadius: '15px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500',
  },
  pendingStatus: {
    color: '#fff',
    backgroundColor: '#ffc107',
    padding: '5px 10px',
    borderRadius: '15px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default Orders;
