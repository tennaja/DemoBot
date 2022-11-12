import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }

  render() {
    return (
      <Container>
        <div className="d-flex">
          <div className="p-2 flex-grow-1"><Button variant="success">Export File Exel</Button>{" "}</div>
          <div className="p-2 ">วันที่</div>
          <div className="p-2">
          <form onSubmit={this.onFormSubmit}><i BsEyeFill></i>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            name="startDate"
            dateFormat="MM/dd/yyyy"
          />
        </form>{" "}
          </div>
          <div className="p-2">
            <Button variant="danger">chosse</Button>{" "}
          </div>
        </div>

       
      </Container>
    );
  }
}

export default MyApp;
