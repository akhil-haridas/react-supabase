import React, { useState } from "react";
import { supabase } from "../supabase";

const CreateUser = ({onSubmit}) => {
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
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleCreateUser}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
