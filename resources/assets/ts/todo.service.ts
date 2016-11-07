import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Todo} from "./todo";

@Injectable()
export class TodoService {

    private todosUrl = 'http://localhost/todos';

    asd = [new Todo(1, 'naslov', false, 'high', 1), new Todo(2, 'naslov2', true, 'normal', 2)];

    constructor(private http: Http) { }

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

    createTodo(todo: Todo) {
        this.asd[this.asd.length] = new Todo(this.asd.length + 1, todo.title, todo.done, todo.priority, todo.position);
    }

    readTodos(): Promise<Todo[]> {
        return Promise.resolve(this.asd);
    }

    updateTodo(todo: Todo) {
        for (var i = 0; i < this.asd.length; i++) {
            if (this.asd[i].id === todo.id) {
                this.asd[i] = todo;
            }
        }
    }

    deleteTodo(todo: Todo) {
        for (var i = 0; i < this.asd.length; i++) {
            if (this.asd[i].id === todo.id) {
                delete this.asd[i];
            }
        }
        // ovde se poziva delete
    }


}