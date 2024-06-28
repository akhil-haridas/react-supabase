import React from "react";

const UsersList = ({ users ,onSelect}) => {
  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} : {user.age}
              <span onClick={()=> onSelect(user,'update')}>EDIT USER</span>
              <span onClick={()=> onSelect(user,'delete')}>Delete USER</span>
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
