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
