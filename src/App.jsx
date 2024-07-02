import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { AppWrapper, DeleteUser, UpdateUser, UsersList } from "./components";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import Calculator from "./components/Calculator";

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
    onClose();
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
        <Calculator/>
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
