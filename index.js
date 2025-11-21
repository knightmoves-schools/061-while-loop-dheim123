function markAsDone(todos) {
  
  while (i < todos.length) {
    todos[i].description =  todos[i].description + 'done - ';

    i++;
  }
  return todos;
}



