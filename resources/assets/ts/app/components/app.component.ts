import { Component, OnInit } from '@angular/core'

import { TodoService } from './todo.service'
import { Todo }        from "./todo";

@Component({
    //moduleId: module.id,
    selector: 'todo-app',
    template: require('./app.component.html'),
    providers:    [ TodoService ]
})

export class AppComponent implements OnInit {

    todos: Todo[];

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todoService.readTodos()
            .then(todos => this.todos = todos);
    }

    toggleDone(todo: Todo): void {
        todo.done = !todo.done;
        this.todoService.updateTodo(todo).then(todo => this.todos.filter(t => t.id === todo.id)[0] = todo);
    }

    removeTodo(todo: Todo): void {
        this.todoService.deleteTodo(todo.id).then(() => this.todos = this.todos.filter(t => t !== todo));
    }

    addTodo(title: string): void {
        this.todoService.createTodo(title).then(todo => this.todos.push(todo));
    }

    setPriority(todo: Todo, priority: string): void {
        todo.priority = priority;
        this.todoService.updateTodo(todo).then(todo => this.todos.filter(t => t.id === todo.id)[0] = todo);
    }

    renameTodo(todo: Todo): void {
        this.todoService.updateTodo(todo).then(todo => this.todos.filter(t => t.id === todo.id)[0] = todo);
    }
}