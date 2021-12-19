import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Nos permitiran manejar peticiones asincronas
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly URL_API = 'http://127.0.0.1:8000/api/';

  public todoList: any[] = [];

  constructor(private http: HttpClient) { 

  }

  refreshTodoList(): void{
    this.http.get(this.URL_API).subscribe(res => {
      this.todoList = [...res as []];
    });
  }

  getTodoList(): Observable<any[]>{
    //retornamos la solicitud http
    return this.http.get<any[]>(this.URL_API);
  }

  addTodo(todo: object){
    //Añadimos la nueva tarea a la lista de todos
    return this.http.post(this.URL_API, todo);
  }

  updateTodo(todo: object){
    //Añadimos la nueva tarea a la lista de todos
    return this.http.put(this.URL_API, todo);
  }

  deleteTodo(id: number){
    //Añadimos la nueva tarea a la lista de todos
    return this.http.delete(this.URL_API + id);
  }
}
