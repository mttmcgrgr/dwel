export const fetchAllTodos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todos'
  })
);

export const createTodo = todo => (
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: {todo}
  })
);

export const deleteTodo = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${id}`,
  })
);
