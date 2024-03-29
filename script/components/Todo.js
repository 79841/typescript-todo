export const Todo = (todo) => `
<div id=${todo.id} class="todo-item ${todo.isCompleted ? "todo-completed" : ""}">
  <div class="todo-info">
    <div class="todo-date">${todo.date}</div>
    <div class="todo-title">${todo.title}</div>
  </div>
  <div class="todo-buttons">
    <button class="button-complete" onclick="window.dispatchEvent(new CustomEvent('todoCompleted', {detail:'${todo.id}'}));"><i class="fa-solid fa-check"></i></button>
    <button class="button-delete" onclick="window.dispatchEvent(new CustomEvent('todoDelete', {detail:'${todo.id}'}));"><i class="fa-solid fa-x"></i></button>
  </div>
</div>`;
