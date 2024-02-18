import { Todo } from "./components/Todo.js";
import {
  TODO_COMPLETE_EVENT,
  TODO_DELETE_EVENT,
  TODO_LIST_KEY,
  TODO_UPDATE_EVENT,
} from "./constant.js";
import { createTodo, deleteTodo, readTodoList, updateTodo } from "./service.js";

const addTodo = () => {
  const inputBox: HTMLInputElement | null =
    document.querySelector(".input-area input");
  if (inputBox === null || inputBox.value === "") return;

  createTodo({
    id: new Date().getTime().toString(),
    date: `${new Date().getMonth()}.${new Date().getDate()}.`,
    title: inputBox.value,
    isCompleted: false,
  });

  inputBox.value = "";
};

const displayTodoList = () => {
  const todoItems = document.querySelector(".todo-items");
  const todoList = readTodoList();
  if (todoItems === null) return;
  todoItems.innerHTML = "";
  todoList.forEach((todo) => {
    todoItems.innerHTML += Todo(todo);
  });
};

const addButton = document.querySelector(".input-area button");
if (addButton !== null) {
  addButton.addEventListener("click", (e) => {
    addTodo();
  });
}

const handleCompleteTodo = (e: CustomEvent) => {
  const todoId = e.detail;
  const [todo] = readTodoList().filter((todo) => todo.id === todoId);
  todo.isCompleted = true;
  updateTodo(todo);
};

const handleDeleteTodo = (e: CustomEvent) => {
  deleteTodo(e.detail);
};

window.addEventListener(TODO_UPDATE_EVENT, () => displayTodoList());
window.addEventListener(TODO_COMPLETE_EVENT, (e) =>
  handleCompleteTodo(e as CustomEvent)
);
window.addEventListener(TODO_DELETE_EVENT, (e) =>
  handleDeleteTodo(e as CustomEvent)
);

window.onload = () => {
  if (localStorage.getItem(TODO_LIST_KEY) === null) {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify([]));
  }
  window.dispatchEvent(new Event(TODO_UPDATE_EVENT));
};
