import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navegacion() {
  return (
    <Navbar expand="md" bg="light" data-bs-theme="light">
      <Container>
        <NavLink className="nav-link" to="/">Conecta Cultura</NavLink>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/actividades">Actividades</NavLink>
            <NavLink className="nav-link" to="/admin/actividades">Administración</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
