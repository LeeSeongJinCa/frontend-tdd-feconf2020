import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ListContainer from "./ListContainer";
import InputSample from "./InputSample";
import UserApp from "./UserApp";

import { setTasks } from "./actions";

import tasks from "../fixtures/tasks";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);

  return (
    <div>
      <h1>To-do</h1>
      <ListContainer />
      <InputSample />
      <div>
        <h1>Here!</h1>
        <UserApp />
      </div>
    </div>
  );
}
