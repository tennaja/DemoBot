import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import './Titles.css'; 
export default function Tires() {
  return (
    <Container>
    <div style={{ display: 'block', height: 230 }}>
    <div classaName="d-flex align-items-end flex-column mb-3" >
    <div classaName="p-2"><p>( ข้อมูลย้อนหลังตั้งแต่ 04 มกราคม 2543 เป็นต้นไป )</p></div>
      </div>
      
      <Row>
        <Col>
        <Card bg="secondary" style={{ height: 150}}>
      
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3 style={{color : "white"}}>
          อัตราแลกเปลี่ยนเงินตราต่างประเทศ ประจำวันที่ 11 พฤศจิกายน 2565
          </h3>
          
        </blockquote>
      </Card.Body>
    </Card>
      </Col>
       
        <Col >
        <Card bg="light" style={{ height:  150 }}>
     
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3 style={{ color : "black"}}>
          อัตราแลกเปลี่ยนถัวเฉลี่ยถ่วงน้ำหนักระหว่างธนาคาร เท่ากับ


          </h3>
          <h3 style={{ color : "green"}}>36.004 บาท ต่อ 1 ดอลลาร์ สรอ.</h3>
        </blockquote>
      </Card.Body>
    </Card>
      </Col>
      </Row>
    </div>
    </Container>
  );
}