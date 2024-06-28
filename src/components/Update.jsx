import React, { useState } from "react";
import { supabase } from "../supabase";

const UpdateUser = ({ user,onSubmit }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!name || !age) {
      window.alert("Please fill the required fields");
      return;
    }
    await supabase.from("users").update({ name, age }).eq("id", user.id);
    onSubmit(null)
  };

  return (
    <form onSubmit={handleUpdateUser}>
      <h1>Update User</h1>
      <input
        type="text"
        placeholder="Please enter the new name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Please enter the new age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUser;
