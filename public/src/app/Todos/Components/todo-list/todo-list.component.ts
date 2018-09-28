import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

// Import the DataService
import { DataService } from './../../Services/data.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<any> = [];
  private todo: any;

  constructor(private _dataService: DataService) {
    this._dataService.getTodos()
      .subscribe(res => this.todos = res);
  }

  ngOnInit() {}

  onTodoUpdate(todoId: String, status: String) {
    this._dataService.updateTodo(todoId, status)
    .subscribe(res => {
      this.todos[this.todos.findIndex((element: any) => element._id === todoId)].status = status;
    });
  }

  onTodoDelete(todoId: String) {
    this._dataService.deleteTodo(todoId)
      .subscribe(res => {
        this.todos = this.todos.filter( (todo: any) => {
          return todo._id != todoId;
        });
        console.log(res)
      });
  }

}
