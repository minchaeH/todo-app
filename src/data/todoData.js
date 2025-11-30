export let todos = JSON.parse(localStorage.getItem("todos")) || [];

export function addTodo(text) {
  todos.push({
    text: text,
    done: false
  });
  save();
}

export function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  save();
}

export function removeTodo(index) {
  todos.splice(index, 1);
  save();
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
