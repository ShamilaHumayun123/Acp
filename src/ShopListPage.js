import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './ShopListPage.css'; // Import the CSS file for styling

// Sample data for tailor shops
const shops = [
  {
    id: 1,
    name: "Classic Tailors",
    image: "https://img.freepik.com/free-photo/workplace-seamstress-office-with-sewing-machine-table_627829-5174.jpg?t=st=1730294992~exp=1730298592~hmac=8c1912fa1b5ca992056013fd279505c86f3fddb418254fb975031dea5a8ed0b7&w=996",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Elegant Stitch",
    image: "https://content.jdmagicbox.com/comp/chennai/w5/044pxx44.xx44.190603163639.c1w5/catalogue/trendzdeck-designer-studio-boutique-and-fashion-designing-institute-valasaravakkam-chennai-blazer-retailers-881zqo8td8.jpg",
    rating: 4.2,
  },
  {
    id: 3,
    name: "The Tailor's Touch",
    image: "https://content.jdmagicbox.com/comp/belgaum/f3/9999px831.x831.170225113851.p6f3/catalogue/shalom-ladies-tailor-belgaum-sadashiv-nagar-belgaum-tailors-for-women-uepqqs4def.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Premium Suits",
    image: "https://content.jdmagicbox.com/v2/comp/bangalore/v7/080pxx80.xx80.200620130522.t8v7/catalogue/new-modern-ladies-tailor-jp-nagar-7th-phase-bangalore-boutiques-zd1dto20eo.jpg",
    rating: 4.1,
  },
  {
    id: 5,
    name: "Modern Tailors",
    image: "https://img.freepik.com/free-photo/asian-tailor-woman-working-clothes-tailoring-atelier_74952-2426.jpg",
    rating: 4.3,
  },
  {
    id: 6,
    name: "Elegant Designs",
    image: "https://img.freepik.com/free-photo/with-effort-it-will-happen-cropped-shot-female-tailor-cutting-fabric-while-working-new-garment-line-her-store-workshop-using-sewing-machine-scissors-work_176420-14570.jpg?t=st=1730294346~exp=1730297946~hmac=f4ebd97749efbcd4fe39c148678bc498e4cdeb2f980d591a0cef5d8c58bdfdec&w=996",
    rating: 4.7,
  },
];

const ShopListPage = () => {
  return (
    <div className="shop-list-container">
      <h2 className="text-center mb-4">Tailor Shops</h2>
      <Row>
        {shops.map((shop) => (
          <Col key={shop.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={shop.image} alt={shop.name} />
              <Card.Body>
                <Card.Title>{shop.name}</Card.Title>
                <Card.Text>Rating: ⭐ {shop.rating}</Card.Text>
                <Button className="view-more-btn">View More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};


export default ShopListPage;

