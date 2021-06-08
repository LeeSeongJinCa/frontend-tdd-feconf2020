import React, { useEffect } from "react";

function User({ onRemove, email, username, id, onToggle, active }) {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    console.log(email);
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
      console.log(email);
    };
  }, []);

  return (
    <div>
      <p
        onClick={() => onToggle(id)}
        style={{ cursor: "pointer", color: active ? "green" : "black" }}
      >
        <b>{username}</b> <span>({email})</span>
      </p>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
