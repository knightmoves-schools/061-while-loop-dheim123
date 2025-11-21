function markAsDone(todos) {
  let i = 0;

  while (i < todos.length) {
    if (!todos[i].description.startsWith('done - ')) {
      todos[i].description = 'done - ' + todos[i].description;
    }
    
    i++;
  }

  return todos;
}
