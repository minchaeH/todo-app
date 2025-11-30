function updateDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const text = `${year}-${month}-${day} ${hours}:${minutes}`;

  const dateEl = document.querySelector("#date-time");
  dateEl.textContent = text;
}

import { addTodo } from "./data/todoData.js";
import { render } from "./ui/todoUI.js";

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const listEl = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  addTodo(input.value);
  input.value = "";
  render(listEl);
});

// 첫 렌더링
render(listEl);
updateDateTime();
setInterval(updateDateTime, 1000); // 1초마다 업데이트
