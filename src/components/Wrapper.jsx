import React, { useState } from "react";
import { supabase } from "../supabase";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { alpha } from "@mui/material";
import Button from "@mui/material/Button";

import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import { MenuItem, Stack, TextField, Typography } from "@mui/material";

const logoStyle = {
  width: "25px",
  height: "auto",
  marginLeft: "10px",
  cursor: "pointer",
};

const AppWrapper = ({ onSubmit, mode, toggleColorMode, children }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

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

  const handleEdgeFuncCall = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.functions.invoke("hello-world", {
        body: { name: "Check Functions" },
      });
      if (error) throw error;
      console.log("Response:", data);
      window.alert("Hello World From Edge Functions💖")
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 7,
          mb: 5,
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
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography variant="body2" color="text.primary">
                    Supabase Demo
                  </Typography>
                </MenuItem>
              </Box>
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
                  {mode === "light" ? (
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
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: { xs: "100%", sm: "70%" } }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                fontSize: "clamp(3.5rem, 10vw, 4rem)",
              }}
            >
              Crud App Using&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "clamp(3rem, 10vw, 4rem)",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "primary.main"
                      : "primary.main",
                }}
              >
                SUPABASE
              </Typography>
            </Typography>
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
            >
              Learn how to create a Supabase project, add some sample data to
              your database, and query the data from a React app
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                aria-label="Enter "
                placeholder="Enter the name"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                aria-label="Enter your email address"
                placeholder="Enter your age"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={handleCreateUser}
              >
                Create
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={handleEdgeFuncCall}
              >
                Hello World
              </Button>
            </Stack>
          </Stack>
          {children}
        </Container>
      </Box>
    </div>
  );
};

export default AppWrapper;
