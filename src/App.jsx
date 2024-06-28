import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { CreateUser, DeleteUser, UpdateUser, UsersList } from "./components";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [action, setAction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const onSelect = (user, action) => {
    setUser(user);
    setAction(action);
  };

  const onSubmit = () => {
    setUser(null)
    fetchUsers()
  }

  return (
    <>
      <UsersList users={users} onSelect={onSelect} />
      <CreateUser onSubmit={onSubmit}/>
      {action === "update" && (
        <UpdateUser user={user} onSubmit={onSubmit} />
      )}
      {action === "delete" && (
        <DeleteUser user={user} onSubmit={onSubmit} />
      )}
    </>
  );
};

export default App;
