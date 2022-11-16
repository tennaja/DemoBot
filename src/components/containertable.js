import React, { useState, useEffect } from "react";
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
import "./container.css";
export default function FixedContainer() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://apigw1.bot.or.th/bot/public/Stat-ExchangeRate/v2/DAILY_AVG_EXG_RATE/?start_period=2022-11-10&end_period=2022-11-11",
      {
        method: "GET",
        headers: { "X-IBM-Client-Id": "6000df3c-02b9-4571-ae66-5d936a34f50e" },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        var dataexchange = [];
        for (let index in result[`result`].data.data_detail) {
          dataexchange.push({
            currency_id:
              result[`result`].data.data_detail[index]["currency_id"],
            currency_name_th:
              result[`result`].data.data_detail[index]["currency_name_th"],
            buying_transfer:
              result[`result`].data.data_detail[index]["buying_transfer"],
            selling: result[`result`].data.data_detail[index]["selling"],
          });
        }
        setItems(dataexchange);
      });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper elevation={5}>
          <TableContainer sx={{ maxHeight: 440 }}>
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
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      <h5 >{row.currency_name_th}</h5>
                    </TableCell>
                    <TableCell align="center">
                      <h5>{row.currency_id}</h5>
                    </TableCell>
                    <TableCell align="center">
                      <h5 style={{ color: "green" }}>{row.buying_transfer}</h5>
                    </TableCell>
                    <TableCell align="center">
                      <h5 style={{ color: "red" }}>{row.selling}</h5>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
