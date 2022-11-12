import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from 'react-bootstrap/Card';
function ButtonSave() {
  return (
    <>
      <Container>
      <div className="d-flex">
        <div className="p-2 flex-grow-1"><Button variant="success">Success</Button>{' '}</div>
        <div className="p-2"><Button variant="success">Success</Button>{' '}</div>
        <div className="p-2"><Button variant="success">Success</Button>{' '}</div>
      </div>
        
      </Container>
    </>
  );
}

export default ButtonSave;
