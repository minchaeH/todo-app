import { todos, toggleTodo, removeTodo } from "../data/todoData.js";

export function render(listEl) {
  listEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    // 완료 시 스타일 적용
    const textStyle = todo.done ? "text-decoration: line-through; color:#aaa;" : "";

    li.innerHTML = `
      <input type="checkbox" class="todo-check" data-index="${index}" ${todo.done ? "checked" : ""}>
      <span style="${textStyle}">${todo.text}</span>
      <button class="delete-btn" data-index="${index}">삭제</button>
    `;

    listEl.appendChild(li);
  });

  // 체크박스 이벤트
  document.querySelectorAll(".todo-check").forEach(box => {
    box.addEventListener("change", (e) => {
      const i = e.target.dataset.index;
      toggleTodo(i);
      render(listEl);
    });
  });

  // 삭제 이벤트
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      removeTodo(i);
      render(listEl);
    });
  });
}

