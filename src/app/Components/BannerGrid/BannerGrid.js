"use client";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import "./BannerGrid.css";

export default function BannerGrid() {
  const banners = [
    { src: "/images/banner2.jpg", alt: "Special Offer 1" },
    { src: "/images/banner3.png", alt: "Special Offer 2" },
    { src: "/images/banner4.jpg", alt: "Special Offer 3" }
  ];

  return (
    <section className="banner-grid-section">
      <Container>
        <Row className="g-3 g-md-4 justify-content-center">
          {banners.map((banner, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <div className="banner-card h-100">
                <a href="#" className="d-block h-100">
                  <Image
                    className="zoom-img img-fluid"
                    src={banner.src}
                    alt={banner.alt}
                    width={400}
                    height={500}
                    quality={90}
                    priority={index === 0}
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}