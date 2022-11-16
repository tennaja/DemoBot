import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as XLSX from "xlsx";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./container.css";
function Doktong() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);
        console.log(data);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <div className="d-flex justify-content-end">
      <div className="justify-content-end">
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
      </div>

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <h5>ตรวจสอบข้อมูล</h5>
          <Paper elevation={5}>
            <TableContainer sx={{ maxHeight: 400 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead style={{ color: "green" }}>
                  <TableRow>
                    <TableCell align="center">
                      <h5>ประเทศ</h5>
                    </TableCell>
                    <TableCell align="center">
                      <h5>สกุลเงิน</h5>
                    </TableCell>
                    <TableCell align="center">
                      <h5>เงินเข้า</h5>
                    </TableCell>
                    <TableCell align="center">
                      <h5>เงินออก</h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((d) => (
                    <TableRow
                      key={d.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        <h5>{d.country}</h5>
                      </TableCell>
                      <TableCell align="center">
                        <h5>{d.currency}</h5>
                      </TableCell>
                      <TableCell align="center">
                        <h5 style={{ color: "green" }}>{d.cash}</h5>
                      </TableCell>
                      <TableCell align="center">
                        <h5 style={{ color: "red" }}>{d.cashout}</h5>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <br />
          <div className="d-flex justify-content-end">
            <Button variant="success">+ insert to database</Button>{" "}
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default Doktong;
