import { supabase } from "./supabase";
import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  console.log("USERS::", users);

  const fetchUsers = async () => {
    const { data } = supabase.from("users").select("*");
    setUsers(data);
  };

  return <div>App</div>;
};

export default App;
