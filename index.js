function markAsDone(todos) {
  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].description.startsWith('done - ')) {
      todos[i].description = 'done - ' + todos[i].description;
    }
  }
  return todos;
}



