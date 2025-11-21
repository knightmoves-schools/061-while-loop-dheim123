function markAsDone(todos) {
  let i = 0;
  
  while (i < todos.length; i++) {
    todos[i].description =  todos[i].description + 'done - ';
  }
  return todos;
}




