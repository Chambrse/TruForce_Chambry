import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getTodos() {
    return this._http.get('/api/v1/todos')
      .pipe(map(result => result.json().data));
  }

  createTodo(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/todo', body, options)
      .pipe(map((res: Response) => res.json()));
  }

  deleteTodo(todoId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.delete('/api/v1/todo/'+todoId, options)
      .pipe(map((res: Response) => res.json()));
  }

  updateTodo(todoId, status) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.put('/api/v1/todo/'+todoId, { status: status }, options)
      .pipe(map((res: Response) => res.json()));
  }

}
