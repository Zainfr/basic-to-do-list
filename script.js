const toDoList = [
  {
    name: "",
    dueDate: "",
  },
];

function RenderToDo() {
  let toDoListHtml = "";

  for (let i = 0; i < toDoList.length; i++) {
    const todoObejct = toDoList[i];

    const name = todoObejct.name;
    const dueDate = todoObejct.dueDate;
    const html = `
    <p class = "para">
    ${name}${dueDate}
    <button onclick="    
    toDoList.splice(${i},1);
    RenderToDo();" class="buton">Delete</button>
    </p>
    `;
    toDoListHtml += html;
  }
  document.querySelector(".js-todo-list").innerHTML = toDoListHtml;
}

function AddToDO() {
  const inputElement = document.querySelector(".to-do-input");
  const dueDateInputElement = document.querySelector(".js-due-date");
  const name = inputElement.value;
  const dueDate = dueDateInputElement.value;
  toDoList.push({
    name: name,
    dueDate: dueDate,
  });

  console.log(toDoList);
  inputElement.value = "";
  RenderToDo();
}
