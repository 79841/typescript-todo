type TTodo = {
  id: string;
  date: Date;
  title: string;
  isCompleted: boolean;
};

const todoList: TTodo[] = [];

const addTodo = () => {
  const inputBox: HTMLInputElement | null =
    document.querySelector(".input-area input");
  if (inputBox === null || inputBox.value === "") return;
  todoList.push({
    id: "test_id",
    date: new Date(),
    title: inputBox.value,
    isCompleted: false,
  });
};

const displayTodoList = () => {
  const todoItems = document.querySelector(".todo-items");
  if (todoItems === null) return;
  todoItems.innerHTML = "";
  todoList.forEach((todo) => {
    todoItems.innerHTML += `
    <div class="todo-item">
      <div class="todo-info">
        <div class="todo-date">${todo.date.getMonth()}.${todo.date.getDate()}.</div>
        <div>${todo.title}</div>
      </div>
      <button><i class="fa-solid fa-check"></i></button>
    </div>`;
  });
};

const addButton = document.querySelector(".input-area button");
if (addButton !== null) {
  addButton.addEventListener("click", (e) => {
    addTodo();
    displayTodoList();
  });
}
