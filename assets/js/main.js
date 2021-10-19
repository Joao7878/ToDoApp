import button from "../components/check.js";
import buttonDelete from "../components/delete.js";
const newTask = document.querySelector("[data-form-button]");

const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  if (input.value === "") return;
  list.appendChild(task);
  const content = `<p class="content">${value}</p>`;
  task.innerHTML = content;
  task.classList.add("task");
  const btn = button();
  const bDelete = buttonDelete();
  task.appendChild(btn);
  var apertado = true;
  task.appendChild(bDelete);
  btn.addEventListener("click", () => {
    if (!apertado) {
      const task = btn.parentElement;
      task.classList.remove("done");
      apertado = true;
    } else {
      task.classList.add("done");
      apertado = false;
    }
  });
  input.value = "";
};
newTask.addEventListener("click", createTask);
