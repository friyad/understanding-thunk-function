const fetchTodos = async (dispatch, getStates) => {
  //   console.log("I am inside of fetchTodos Thunk function");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=4"
    );
    const data = await response.json();

    dispatch({
      type: "todos/todoLoaded",
      payload: data,
    });
    // console.log("I just dispatch the todoLoaded action successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchTodos,
};
