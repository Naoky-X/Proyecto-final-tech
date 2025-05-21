import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/variables.css';

function Header() {
  return (
    <Navbar expand="lg" style={{ background: "var(--verde-oscuro)" }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: "var(--verde-acento)", fontWeight: 700, fontSize: "1.5rem", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "0.7rem" }}>
          <img
            src="https://images.vexels.com/media/users/3/146691/isolated/preview/6ce5f2f9105dc8be2ee16374ddf7ddde-verde-de-advertencia-nuclear.png"
            alt="Logo Energía"
            style={{ height: "38px", borderRadius: "50%", background: "var(--blanco)", padding: "3px", boxShadow: "0 2px 8px rgba(16,185,129,0.12)" }}
          />
          Energía Nuclear
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "var(--verde-medio)" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "var(--blanco)", fontWeight: 500 }}>Inicio</Nav.Link>
            <Nav.Link href="/Estimador" style={{ color: "var(--blanco)", fontWeight: 500 }}>Estimador</Nav.Link>
            <Nav.Link href="/Graficos" style={{ color: "var(--blanco)", fontWeight: 500 }}>Estadísticas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;