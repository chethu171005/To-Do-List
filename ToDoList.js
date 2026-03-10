let todoList = [];
todoList = JSON.parse(localStorage.getItem("todoList")) || [];
displayItems();
displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todoinput");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let tododate = dateElement.value;
  if (todoItem === "" || tododate === "") {
    alert("Please enter todo and date");
    return;
  }
  todoList.push({ item: todoItem, dueDate: tododate });
  localStorage.setItem("todoList", JSON.stringify(todoList));
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}
function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="deleteTodo(${i})" class="todoDelete">
        Delete
        </button>
    `;
  }

  containerElement.innerHTML = newHtml;
}
function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayItems();
}
