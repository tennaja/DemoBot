import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

function TextLinkExample() {
  return (
    <Navbar style={{backgroundColor :"#000080"}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:"#fff"}}>
Currency Exchange</Navbar.Brand>
        <Navbar.Toggle />
        {/* <Button variant="danger">+ insert to database</Button>{" "} */}
        
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;