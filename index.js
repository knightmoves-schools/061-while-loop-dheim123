function markAsDone(todos) {
  let i = 0; 
  
  while (i < todos.length) {
    if (todos[i] && todos[i].description !== undefined) {
      todos[i].description = 'done - ' + todos[i].description;
    }
    i++; 
  }
  return todos;
}

