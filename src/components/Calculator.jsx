import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";

const EXPRESSIONS = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  "0",
  ".",
  "/",
  "AC",
];

const CalculatorButton = styled(Button)(({ theme }) => ({
  minWidth: "64px",
  minHeight: "64px",
  margin: theme.spacing(1),
  fontSize: "1.5rem",
}));

const Calculator = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "100px", width: "100%" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", borderRadius: "15px" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Supabase - Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={4}>
            <Grid container spacing={1}>
              {EXPRESSIONS.map((value) => (
                <Grid item xs={3} key={value}>
                  <CalculatorButton variant="contained">
                    {value}
                  </CalculatorButton>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              //   fullWidth
              placeholder="Enter expression"
            />
            <Grid item xs={2}>
              <CalculatorButton variant="contained" color="primary">
                ANSWER
              </CalculatorButton>
            </Grid>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              placeholder="Enter expression"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Calculator;
