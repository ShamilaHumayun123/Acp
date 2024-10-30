import React from 'react';
import { Card } from 'react-bootstrap';
import './HomePage.css'; // Ensure this CSS file is created

const HomePage = () => {
  return (
    <div className="home-container">
      <Card className="text-center" style={{ height: '100vh', border: 'none' }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/free-photo/sewing-is-just-work-it-is-flair-creative-designer-working-with-sewing-machine-her-new-garment-line-being-focused-putting-efforts-make-it-look-great-while-being-her-own-workshop_176420-14563.jpg?t=st=1730294493~exp=1730298093~hmac=1f8de2a4008a2a80eaa92416955f6df4d60ed234878f30be40a8766cabb9d373&w=996" // Example image
          className="card-image"
        />
        <Card.Body className="card-body">
          <Card.Title>Custom Tailoring Services</Card.Title>
          <Card.Text>Discover quality craftsmanship and style.</Card.Text>
        </Card.Body>
      </Card>
      <div className="moving-text">Crafting Your Style, One Stitch at a Time</div>
    </div>
  );
};

export default HomePage;




