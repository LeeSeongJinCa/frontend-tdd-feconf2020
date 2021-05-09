import React from "react";

export default function List({ tasks, onClick }) {
  if (tasks.length === 0) {
    return <p>할 일이 없어요</p>;
  }

  return (
    <ul>
      {tasks.map(({ id, title }) => (
        <li key={id}>
          {title}
          <button type="button" onClick={() => onClick(id)}>
            완료
          </button>
        </li>
      ))}
    </ul>
  );
}
