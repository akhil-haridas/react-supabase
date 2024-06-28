import React from "react";
import { supabase } from "../supabase";

const DeleteUser = ({ user, onSubmit }) => {
  const handleDeleteUser = async (e) => {
    e.preventDefault();
    await supabase.from("users").delete().eq("id", user.id);
    onSubmit(null);
  };

  return (
    <div>
      <h1>Delete User</h1>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <button type="button" onClick={handleDeleteUser}>
        Delete
      </button>
    </div>
  );
};

export default DeleteUser;
