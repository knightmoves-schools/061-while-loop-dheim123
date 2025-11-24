function markAsDone(todos) {
  let i = 0;
  while (i < todos.length) {
    todos[i].description = 'done - ' + todos[i];
    i++;
  }
  return todos;
}
