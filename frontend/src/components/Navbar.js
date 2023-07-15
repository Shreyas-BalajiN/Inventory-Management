import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function ContainerOutsideExample() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Inventory Management</Navbar.Brand>
      </Container>
      <NavDropdown title="store-name" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}

export default ContainerOutsideExample;
