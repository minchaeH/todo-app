import { todos, toggleTodo, removeTodo, quote } from "../data/todoData.js";

export function render(listEl) {
  listEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const textStyle = todo.done ? "text-decoration: line-through; color:#aaa;" : "";

    let priorityClass = "";
    if (todo.priority === "high") priorityClass = "priority-high";
    if (todo.priority === "medium") priorityClass = "priority-medium";
    if (todo.priority === "low") priorityClass = "priority-low";

    li.innerHTML = `
      <input 
        type="checkbox" 
        class="todo-check" 
        data-index="${index}" 
        ${todo.done ? "checked" : ""}
      >
      <span class="${priorityClass}" style="${textStyle}">
        ${todo.text}
      </span>
      <button class="delete-btn" data-index="${index}">삭제</button>
    `;

    listEl.appendChild(li);
  });

  document.querySelectorAll(".todo-check").forEach(box => {
    box.addEventListener("change", (e) => {
      toggleTodo(e.target.dataset.index);
      render(listEl);
    });
  });

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      removeTodo(e.target.dataset.index);
      render(listEl);
    });
  });

  const quoteEl = document.querySelector("#quote");
  if (quoteEl) {
    quoteEl.textContent = quote ? `오늘의 문구: "${quote}"` : "";
  }
}
