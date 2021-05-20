import React, { useState } from "react";

const userList = [
  {
    id: 1,
    name: "user1",
    email: "user1@user.com",
  },
  {
    id: 2,
    name: "user2",
    email: "user2@user.com",
  },
  {
    id: 3,
    name: "user3",
    email: "user3@user.com",
  },
];

export default function UserList() {
  const [users, setUsers] = useState(userList);

  return (
    <ul>
      <li>
        <p>id : {users[0].id}</p>
        <p>name : {users[0].name}</p>
        <p>email : {users[0].email}</p>
      </li>
      <li>
        <p>id : {users[1].id}</p>
        <p>name : {users[1].name}</p>
        <p>email : {users[1].email}</p>
      </li>
      <li>
        <p>id : {users[2].id}</p>
        <p>name : {users[2].name}</p>
        <p>email : {users[2].email}</p>
      </li>
      {users.map(({ id, name, email }) => {
        return (
          <li key={id}>
            <p>id : {id}</p>
            <p>name : {name}</p>
            <p>email : {email}</p>
          </li>
        );
      })}
    </ul>
  );
}
