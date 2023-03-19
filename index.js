const { createStore, applyMiddleware } = require("redux");
const {
  delayActionMiddleware,
  fetchTodosMiddleware,
} = require("./middlewares");

// define a initial state
const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(delayActionMiddleware, fetchTodosMiddleware)
);

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState().todos);
});

// disptach actions
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learn Redux from LWS",
// });

store.dispatch({
  type: "todos/fetchTodos",
});
