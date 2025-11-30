import { todos, removeTodo } from "../data/todoData.js";

export function render(listEl) {
  listEl.innerHTML = "";

  todos.forEach((text, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    li.innerHTML = `
      <span>${text}</span>
      <button class="delete-btn" data-index="${index}">삭제</button>
    `;

    listEl.appendChild(li);
  });

  // 삭제 버튼 이벤트 설정
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      removeTodo(i);
      render(listEl);
    });
  });
}
