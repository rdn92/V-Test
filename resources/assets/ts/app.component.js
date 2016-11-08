"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('./todo.service');
var AppComponent = (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.readTodos()
            .then(function (todos) { return _this.todos = todos; });
    };
    AppComponent.prototype.toggleDone = function (todo) {
        var _this = this;
        todo.done = !todo.done;
        this.todoService.updateTodo(todo).then(function (todo) { return _this.todos.filter(function (t) { return t.id === todo.id; })[0] = todo; });
    };
    AppComponent.prototype.removeTodo = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo.id).then(function () { return _this.todos = _this.todos.filter(function (t) { return t !== todo; }); });
    };
    AppComponent.prototype.addTodo = function (title) {
        var _this = this;
        this.todoService.createTodo(title).then(function (todo) { return _this.todos.push(todo); });
    };
    AppComponent.prototype.setPriority = function (todo, priority) {
        var _this = this;
        todo.priority = priority;
        this.todoService.updateTodo(todo).then(function (todo) { return _this.todos.filter(function (t) { return t.id === todo.id; })[0] = todo; });
    };
    AppComponent.prototype.renameTodo = function (todo) {
        var _this = this;
        this.todoService.updateTodo(todo).then(function (todo) { return _this.todos.filter(function (t) { return t.id === todo.id; })[0] = todo; });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-app',
            templateUrl: 'app.component.html',
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map