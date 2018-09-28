import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


// Import the DataService
import { DataService } from './../../Services/data.service';

import { Todo } from './../../Model/Todo';
export interface Department {
  value: string;
}

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  departments: Department[] = [
    { value: 'Billing' },
    { value: 'Sales' },
    { value: 'Customer Service' },
    { value: 'Retention' },
    { value: 'Scheduling' },
  ];

  todos: Array<Todo> = [];
  todo: Todo = {
    title: '',
    text: ''
  };

  constructor(private _dataService: DataService, private router: Router) {
    this._dataService.getTodos()
      .subscribe(res => this.todos = res);
  }

  onSubmit() {
    this._dataService.createTodo(this.todo)
      .subscribe(res => {
        this.router.navigate(['/']);
      });
  }

  ngOnInit() {
  }

}
