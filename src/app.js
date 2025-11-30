import { addTodo, setQuote } from "./data/todoData.js";
import { render } from "./ui/todoUI.js";

// 요소 가져오기
const input = document.getElementById("todo-input");
const prioritySelect = document.getElementById("priority-select");
const addBtn = document.getElementById("add-btn");
const listEl = document.getElementById("todo-list");

const quoteInput = document.getElementById("quote-input");
const quoteBtn = document.getElementById("quote-btn");

// ------------------------------
// 날짜/시간 표시 기능
// ------------------------------
function updateDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const text = `${year}-${month}-${day} ${hours}:${minutes}`;

  const dateEl = document.querySelector("#date-time");
  if (dateEl) {
    dateEl.textContent = text;
  }
}

// 페이지 켜자마자 1회 실행 + 1초마다 업데이트
updateDateTime();
setInterval(updateDateTime, 1000);

// ------------------------------
// 할 일 추가
// ------------------------------
addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  addTodo(input.value, prioritySelect.value);
  input.value = "";
  render(listEl);
});

// ------------------------------
// 명언 설정
// ------------------------------
quoteBtn.addEventListener("click", () => {
  if (!quoteInput.value.trim()) return;

  setQuote(quoteInput.value);
  quoteInput.value = "";
  render(listEl);
});

// ------------------------------
// 초기 렌더링
// ------------------------------
render(listEl);
