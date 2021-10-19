const button = () => {
  const btn = document.createElement("button");
  btn.innerText = "check";

  btn.addEventListener("click", checkTask);

  return btn;
};
const checkTask = (e) => {
  const btn = e.target;
  const task = btn.parentElement;
  task.classList.add("done");
};
export default button;
