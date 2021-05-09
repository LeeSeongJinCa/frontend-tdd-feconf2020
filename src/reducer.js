const initialState = {
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === "setTasks") {
    const { tasks } = action.payload;
    return {
      ...state,
      tasks,
    };
  }
  if (action.type === "deleteTask") {
    return {
      ...state,
      tasks: state.tasks.filter(({ id: _id }) => _id !== action.payload.id),
    };
  }
  return state;
}
