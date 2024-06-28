import React, { useState } from "react";
import { supabase } from "../supabase";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

const DeleteUser = ({ user, onSubmit, onClose }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDeleteUser = async (e) => {
    setIsDeleting(true);
    e.preventDefault();
    await supabase.from("users").delete().eq("id", user.id);
    setIsDeleting(false);
    onSubmit();
  };

  return (
    // <div>
    //   <h1>Delete User</h1>
    //   <p>Name: {user.name}</p>
    //   <p>Age: {user.age}</p>
    //   <button type="button" onClick={handleDeleteUser}>
    //     Delete
    //   </button>
    // </div>
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Confirm Delete User</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the user "{user.name}"? This action
          cannot be undone.
        </DialogContentText>
        {isDeleting && (
          <Typography variant="body2" color="text.secondary">
            Deleting user...
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={isDeleting}>
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={handleDeleteUser}
          variant="contained"
          color="error"
          disabled={isDeleting}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUser;
