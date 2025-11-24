function markAsDone(todos) {
  for (let i = 0; i < todos.length; i++) {
    todos[i] = 'done - ' + todos[i]
  }
  return todos;
}
