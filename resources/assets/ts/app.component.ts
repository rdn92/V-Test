import { Component, OnInit } from '@angular/core'

import { TodoService } from './todo.service'
import { Todo }        from "./todo";

@Component({
    moduleId: module.id,
    selector: 'todo-app',
    templateUrl: 'app.component.html',
    providers:    [ TodoService ]
})

export class AppComponent implements OnInit {

    todos: Todo[] = [];
    newTodo: Todo = new Todo(null, '', false, '', 0);

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todoService.readTodos()
            .then(todos => this.todos = todos);
    }

    toggleDone(todo: Todo): void {
        todo.done = !todo.done;
        this.todoService.updateTodo(todo);
        this.ngOnInit(); // refresh
    }

    removeTodo(todo: Todo): void {
        this.todoService.deleteTodo(todo);
        this.ngOnInit(); // refresh
    }

    addTodo(): void {
        this.todoService.createTodo(this.newTodo);
    }

    setPriority(todo: Todo, priority: string): void {
        todo.priority = priority;
        this.todoService.updateTodo(todo);
        this.ngOnInit(); // refresh
    }
}