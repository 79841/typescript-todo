// todo-list crud(create, read, update, delete)
import { TODO_LIST_KEY, TODO_UPDATE_EVENT } from "./constant.js";
export const createTodo = (todo) => {
    const strTodoList = localStorage.getItem(TODO_LIST_KEY);
    if (strTodoList === null)
        return; // === 엄격한 비교 strict comparison, == 느슨한 비교 loosen comparison
    const todoList = JSON.parse(strTodoList);
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify([todo, ...todoList]));
    window.dispatchEvent(new Event(TODO_UPDATE_EVENT));
};
export const readTodoList = () => {
    const strTodoList = localStorage.getItem(TODO_LIST_KEY);
    if (strTodoList === null)
        return [];
    return JSON.parse(strTodoList);
};
export const updateTodo = (updatedTodo) => {
    const newTodoList = readTodoList().filter((todo) => todo.id !== updatedTodo.id);
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify([...newTodoList, updatedTodo]));
    window.dispatchEvent(new Event(TODO_UPDATE_EVENT));
};
export const deleteTodo = (todoId) => {
    const newTodoList = readTodoList().filter((todo) => todo.id !== todoId);
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
    window.dispatchEvent(new Event(TODO_UPDATE_EVENT));
};
