const buttonDelete = () => {
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteTask);
  return button;
};
const deleteTask = (e) => {
  const target = e.target;
  const delet = target.parentElement;
  delet.remove();
};
export default buttonDelete;
