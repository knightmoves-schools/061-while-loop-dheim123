function markAsDone(todos) {
  let i = 0;

  while (i < todos.length) {
    todos[i].description =  todos[i].description + 'done - ';

    i++;
  }
  return todos;
}


