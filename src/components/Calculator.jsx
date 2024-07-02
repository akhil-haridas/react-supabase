import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    Box,
    Container,
} from "@mui/material";
import { styled } from "@mui/system";
import { calculateExpressions } from "../utils/calculate";

const CalculatorButton = styled(Button)(({ theme }) => ({
    minWidth: "64px",
    minHeight: "64px",
    borderRadius: "50%",
    margin: theme.spacing(1),
    fontSize: "1.5rem",
}));

const Calculator = () => {

    const [lhs, setLhs] = useState("");
    const [expression, setExpression] = useState("lhs");
    const [opertaor, setOperator] = useState("+");
    const [rhs, setRhs] = useState("");
    const [result, setResult] = useState("0");

    const handleExpression = (value) => {
        if (["+", "-", "/", "*"].includes(value)) {
            setOperator(value);
            setExpression("rhs")
        } else {
            if (expression === "lhs") setLhs((prev) => prev + value);
            else if (expression === "rhs") setRhs((prev) => prev + value);
        }
    };
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
                            {calculateExpressions.map((exp, index) => (
                                <Grid item xs={3} key={index}>
                                    <CalculatorButton variant="contained" color={exp.color} onClick={() => handleExpression(exp.value)}>
                                        {exp.value}
                                    </CalculatorButton>
                                </Grid>
                            ))}
                            <CalculatorButton variant="contained" color="error" onClick={() => handleExpression()}>
                                AC
                            </CalculatorButton>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} gap={5}>
                        <Grid container gap={5} justifyContent={"space-around"}>
                            <Typography variant="h4" sx={{ cursor: 'pointer', '&:hover': { transform: 'scale(1.1)', color: 'gray' } }} onClick={() => setExpression("lhs")}>{!lhs ? 0 : lhs}</Typography>
                            <Typography variant="h4">{opertaor}</Typography>
                            <Typography variant="h4" sx={{ cursor: 'pointer', '&:hover': { transform: 'scale(1.1)', color: 'gray' } }} onClick={() => setExpression("rhs")}>{!rhs ? 0 : rhs}</Typography>
                            <Button variant="contained" disabled={!lhs || !rhs} color="success">
                                ANSWER
                            </Button>
                        </Grid>
                        <Grid container gap={5} justifyContent={"center"}>
                            <Typography variant="h1">=</Typography>
                            <Typography variant="h1">{result}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Calculator;
