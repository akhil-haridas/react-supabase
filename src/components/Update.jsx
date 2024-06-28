import React, { useState } from "react";
import { supabase } from "../supabase";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

const UpdateUser = ({ user,onSubmit, onClose }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!name || !age) {
      window.alert("Please fill the required fields");
      return;
    }
    await supabase.from("users").update({ name, age }).eq("id", user.id);
    onSubmit();
    setName("")
    setAge("")
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
    <DialogTitle>Update User</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Please enter the new name and age for {user.name}.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        label="Name"
        type="text"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Age"
        type="number"
        fullWidth
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button type="submit" onClick={handleUpdateUser} variant="contained">
        Update
      </Button>
    </DialogActions>
  </Dialog>
  );
};

export default UpdateUser;
