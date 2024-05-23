const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");

  title = titleElement.value;
  description = descriptionElement.value;

  const todos = [];
  todos.push({ title: title, description: description });
  displayTodos(todos);
  titleElement.value = "";
  descriptionElement.value = "";
});

function displayTodos(todos) {
  todos.forEach((todo) => {
    const resultContainer = document.createElement("div");
    resultContainer.className = "todo-container";
    const todoElement = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "Complete Task";
    button.className = "del-btn";
    todoElement.textContent = `${todo.title} - ${todo.description}`;
    resultContainer.appendChild(todoElement);
    resultContainer.appendChild(button);
    document.getElementById("result").appendChild(resultContainer);
    button.onclick = () => doneButtonHandler(button);
  });
}

function doneButtonHandler(btn) {
  btn.className = "done-btn";
  btn.textContent = "Done";
}
