"use strict";
var Todo = (function () {
    // id: number;
    // title: string = '';
    // done: boolean = false;
    // priority: string = "";
    // position: number;
    function Todo(id, title, done, priority, position) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.priority = priority;
        this.position = position;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map