import React from "react";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} : {user.age}
            </li>
          ))}
        </ul>
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};

export default UsersList;
