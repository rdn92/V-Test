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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var todo_1 = require("./todo");
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todosUrl = 'http://localhost/todos';
        this.asd = [new todo_1.Todo(1, 'naslov', false, 'high', 1), new todo_1.Todo(2, 'naslov2', true, 'normal', 2)];
    }
    // getTodos(): Promise<Todo[]> {
    //     return this.http.get(this.todosUrl)
    //         .toPromise()
    //         .then(response => response.json().data as Todo[])
    //         .catch(this.handleError);
    // }
    //
    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error);
    //     return Promise.reject(error.message || error);
    // }
    TodoService.prototype.createTodo = function (todo) {
        this.asd[this.asd.length] = new todo_1.Todo(this.asd.length + 1, todo.title, todo.done, todo.priority, todo.position);
    };
    TodoService.prototype.readTodos = function () {
        return Promise.resolve(this.asd);
    };
    TodoService.prototype.updateTodo = function (todo) {
        for (var i = 0; i < this.asd.length; i++) {
            if (this.asd[i].id === todo.id) {
                this.asd[i] = todo;
            }
        }
    };
    TodoService.prototype.deleteTodo = function (todo) {
        for (var i = 0; i < this.asd.length; i++) {
            if (this.asd[i].id === todo.id) {
                delete this.asd[i];
            }
        }
        // ovde se poziva delete
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map