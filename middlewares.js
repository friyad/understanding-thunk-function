const todosMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    // console.log("I am inside of middleware");

    return action(store.dispatch, store.getState);
  }

  return next(action);
};

module.exports = {
  todosMiddleware,
};
