import React, { useState } from "react";
import { supabase } from "../supabase";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

const logoStyle = {
  width: "25px",
  height: "auto",
  marginLeft: "10px",
  cursor: "pointer",
};

const CreateUser = ({ onSubmit, mode, toggleColorMode }) => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!name || !age) {
      window.alert("Please fill the required fields");
      return;
    }

    await supabase.from("users").insert({ name, age });
    onSubmit();
    setName("");
    setAge("");
  };

  return (
    // <div>
    //   <h1>Create User</h1>
    //   <form onSubmit={handleCreateUser}>
    //     <label>Name</label>
    //     <input
    //       type="text"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <label>Age</label>
    //     <input
    //       type="number"
    //       value={age}
    //       onChange={(e) => setAge(e.target.value)}
    //     />
    //     <button type="submit">Create</button>
    //   </form>
    // </div>

    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <img
                src={
                  "https://companieslogo.com/img/orig/supabase-554aca1c.png?t=1701239800"
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Box sx={{ maxWidth: "32px" }}>
                <Button
                  variant="text"
                  onClick={toggleColorMode}
                  size="small"
                  aria-label="button to toggle theme"
                  sx={{ minWidth: "32px", height: "32px", p: "4px" }}
                >
                  {mode === "dark" ? (
                    <WbSunnyRoundedIcon fontSize="small" />
                  ) : (
                    <ModeNightRoundedIcon fontSize="small" />
                  )}
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default CreateUser;
