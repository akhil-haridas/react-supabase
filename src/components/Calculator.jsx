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
  ".",
  "0",
  "/",
];

const CalculatorButton = styled(Button)(({ theme }) => ({
  minWidth: "64px",
  minHeight: "64px",
  borderRadius: "50%",
  margin: theme.spacing(1),
  fontSize: "1.5rem",
//   color:"black",
//   backgroundColor:"#fff",
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
      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={4}>
            <Grid container>
              {EXPRESSIONS.map((value) => (
                <Grid item xs={3} key={value}>
                  <CalculatorButton variant="contained">
                    {value}
                  </CalculatorButton>
                </Grid>
              ))}
              <CalculatorButton variant="contained" color="warning">AC</CalculatorButton>
            </Grid>
          </Grid>
          <Grid container xs={6} gap={5}>
            <Grid container gap={5} justifyContent={"space-around"}>
              <Typography variant="h4">11</Typography>
              <Typography variant="h4">+</Typography>
              <Typography variant="h4">22</Typography>
              <Button variant="contained" color="primary">
                ANSWER
              </Button>
            </Grid>
            <Grid container gap={5} justifyContent={"center"}>
              <Typography variant="h1">=</Typography>
              <Typography variant="h1">33</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Calculator;
