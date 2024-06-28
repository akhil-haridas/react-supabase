import React from "react";
import { supabase } from "../supabase";

const DeleteUser = ({ user, onSubmit }) => {
  const handleDeleteUser = async (e) => {
    e.preventDefault();
    e.stopPropagation()
    await supabase.from("users").delete().eq("id", user.id);
    onSubmit();
  };

  return (
    <div>
      <h1>Delete User</h1>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p onClick={handleDeleteUser}>
        Delete
      </p>
    </div>
  );
};

export default DeleteUser;
