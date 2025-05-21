import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer mt-5">
      <Container>
        <Row className="text-center text-md-left">
          <Col md={6}>
            <h5 className="footer-title">Energía Nuclear</h5>
            <p>Fuente de alta eficiencia y bajas emisiones que complementa la transición hacia un sistema energético sostenible.</p>
          </Col>
          <Col md={6} className="text-md-right mt-3 mt-md-0">
            <p>&copy; {new Date().getFullYear()} Proyecto Energías Limpias. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;