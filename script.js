var todoList = [];
var addTodo = function () {
    var inputBox = document.querySelector(".input-area input");
    if (inputBox === null || inputBox.value === "")
        return;
    todoList.push({
        id: "test_id",
        date: new Date(),
        title: inputBox.value,
        isCompleted: false,
    });
};
var displayTodoList = function () {
    var todoItems = document.querySelector(".todo-items");
    if (todoItems === null)
        return;
    todoItems.innerHTML = "";
    todoList.forEach(function (todo) {
        todoItems.innerHTML += "\n    <div class=\"todo-item\">\n      <div class=\"todo-info\">\n        <div class=\"todo-date\">".concat(todo.date.getMonth(), ".").concat(todo.date.getDate(), ".</div>\n        <div>").concat(todo.title, "</div>\n      </div>\n      <button><i class=\"fa-solid fa-check\"></i></button>\n    </div>");
    });
};
var addButton = document.querySelector(".input-area button");
if (addButton !== null) {
    addButton.addEventListener("click", function (e) {
        addTodo();
        displayTodoList();
    });
}
