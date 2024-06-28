import React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const UsersList = ({ users, onSelect }) => {
  // return (
  //   <div>
  //     {users.length > 0 ? (
  //       <ul>
  //         {users.map((user) => (
  //           <li key={user.id}>
  //             {user.name} : {user.age}
  //             <span onClick={()=> onSelect(user,'update')}>EDIT USER</span>
  //             <span onClick={()=> onSelect(user,'delete')}>Delete USER</span>
  //           </li>
  //         ))}
  //       </ul>
  //     ) : (
  //       <div>No users found</div>
  //     )}
  //   </div>
  // );

  return (
    <Box
    id="image"
    sx={(theme) => ({
      mt: { xs: 8, sm: 10 },
      alignSelf: "center",
      height: { xs: 200, sm: 700 },
      width: "100%",
      backgroundImage:
        theme.palette.mode === "light"
          ? 'url("/static/images/templates/templates-images/hero-light.png")'
          : 'url("/static/images/templates/templates-images/hero-dark.png")',
      backgroundSize: "cover",
      borderRadius: "10px",
      outline: "1px solid",
      outlineColor:
        theme.palette.mode === "light"
          ? alpha("#BFCCD9", 0.5)
          : alpha("#9CCCFC", 0.1),
      boxShadow:
        theme.palette.mode === "light"
          ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
          : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
    })}
  />
  );
};

export default UsersList;
