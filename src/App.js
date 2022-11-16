import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MyApp from "./components/Date";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Carousel } from "bootstrap";
import AdditionalContentExample from "./components/Alert";
import Tires from "./components/Title";
import ButtonAppBar from "./components/Navbar";
import FixedContainer from "./components/containertable";
import TextLinkExample from "./components/Navbar";
import Doktong, { doktong } from "./components/test";
import Table1 from "./components/Table1";
import SampleArray from "./components/Table1";
function App() {
  return (
    <>
      <TextLinkExample />
      <br />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Tires />
          {/* <Doktong /> */}
          
          <AdditionalContentExample />
          <br />
         
          <hr />
          
          <h3 >Insert File into Database</h3>
          <br/>
          <Doktong />
          <hr/>
           <container>
            <h4>อัตราแลกเปลี่ยนเงินตราประจำวัน </h4>
          </container>

          <br />
          <FixedContainer />
          <br />
          <MyApp />
          <br />

          {/* <SampleArray/> */}
        </Container>
      </React.Fragment>
    </>
  );
}

export default App;
