
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { Link } from 'react-router-dom';
const Topnav=()=>{
    return(
        <>
           <Navbar style={{ backgroundColor: " rgb(90, 9, 17)"  }}  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> Bankhub  </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
           
            <Nav.Link as={Link}  to="registration"> Registration</Nav.Link>
            <Nav.Link as={Link} to="/login" > Login</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
       </>
    )
}

export default Topnav
