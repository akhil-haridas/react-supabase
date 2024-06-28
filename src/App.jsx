import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { AppWrapper, DeleteUser, UpdateUser, UsersList } from "./components";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [action, setAction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [mode, setMode] = React.useState("dark");
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase.from("users").select("*");
      if (error) throw error;
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading)
    return (
      <div
        style={{
          backgroundColor: "transparent",
          zIndex: 1,
          width: "100%",
          height: "100vh",
          display:'flex',
          alignContent:'center',
          justifyContent:'center',
        }}
      >
        <CircularProgress style={{ backgroundColor: "transparent" }} />;
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  const onSelect = (user, action) => {
    setUser(user);
    setAction(action);
  };

  const onSubmit = () => {
    setUser(null);
    setAction(null);
    fetchUsers();
  };

  const onClose = () => {
    setUser(null);
    setAction(null);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppWrapper
        onSubmit={onSubmit}
        mode={mode}
        toggleColorMode={toggleColorMode}
      >
        <UsersList users={users} onSelect={onSelect} />
      </AppWrapper>
      {action === "update" && (
        <UpdateUser user={user} onSubmit={onSubmit} onClose={onClose} />
      )}
      {action === "delete" && (
        <DeleteUser user={user} onSubmit={onSubmit} onClose={onClose} />
      )}
    </ThemeProvider>
  );
};

export default App;

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none",
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: "20px", mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};
