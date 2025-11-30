export let todos = JSON.parse(localStorage.getItem("todos")) || [];

export let quote = localStorage.getItem("quote") || "";

export function addTodo(text, priority) {
  todos.push({
    text: text,
    done: false,
    priority: priority
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

export function setQuote(newQuote) {
  quote = newQuote;
  localStorage.setItem("quote", quote);
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
