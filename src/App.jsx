import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { CreateUser, UpdateUser, UsersList } from "./components";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
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

  return (
    <>
      <UsersList users={users} onClick={(user)=> setUser(user)}/>
      <CreateUser/>
      {user && <UpdateUser user={user} onUpdate={()=> setUser(null)}/>}
    </>
  );
};

export default App;
