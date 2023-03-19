const { createStore, applyMiddleware } = require("redux");
const { todosMiddleware } = require("./middlewares");
const { fetchTodos } = require("./thunkFunctions");

// define a initial state
const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(todosMiddleware));

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState().todos);
});

store.dispatch(fetchTodos);
