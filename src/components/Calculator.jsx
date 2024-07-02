import React from "react";

import "../styles/calculator.css";
import { Container, Stack } from "@mui/material";
const Calculator = () => {
  return (
    // <div className="calculator">
    //   <div className="calculator__output">0</div>
    //   <div className="calculator__keys">
    //     <button className="calculator__key calculator__key--operator">+</button>
    //     <button className="calculator__key calculator__key--operator">-</button>
    //     <button className="calculator__key calculator__key--operator">
    //       &times;
    //     </button>
    //     <button className="calculator__key calculator__key--operator">÷</button>
    //     <button className="calculator__key">7</button>
    //     <button className="calculator__key">8</button>
    //     <button className="calculator__key">9</button>
    //     <button className="calculator__key">4</button>
    //     <button className="calculator__key">5</button>
    //     <button className="calculator__key">6</button>
    //     <button className="calculator__key">1</button>
    //     <button className="calculator__key">2</button>
    //     <button className="calculator__key">3</button>
    //     <button className="calculator__key">0</button>
    //     <button className="calculator__key">.</button>
    //     <button className="calculator__key">AC</button>
    //     <button className="calculator__key calculator__key--enter">=</button>
    //   </div>
    // </div>
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
        mt: {xs:3, sm:10},
        backgroundColor: "red"
      }}
    >
      <Stack
        spacing={2}
        useFlexGap
        sx={{ width: { xs: "100%", sm: "70%" } }}
      ></Stack>
    </Container>
  );
};

export default Calculator;
