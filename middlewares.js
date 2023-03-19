const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am delaying you!");

    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }

  return next(action);
};

const fetchTodosMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/fetchTodos") {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        store.dispatch({
          type: "todos/todoLoaded",
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  }
  return next(action);
};

module.exports = {
  delayActionMiddleware,
  fetchTodosMiddleware,
};
