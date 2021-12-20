import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FRONT-END TODO LIST';
  public inputTarea: string = '';
  //Constructor para traer la API
  constructor(public api: ApiService){
      
  }

  //Al iniciar traemos la lista de TODO's
  ngOnInit(){
    this.api.refreshTodoList();
  }

  //Agregar item a la lista TODO
  agregar(valor: string):void{
    let newTodo = {
      id:0,
      name: valor
    }
    if(this.inputTarea.length < 25){
      this.api.addTodo(newTodo).subscribe();
      this.inputTarea = '';
    }else{
      alert('La tarea no puede tener mas de 25 caracteres');
      this.inputTarea = '';
    }
    this.api.refreshTodoList();
    this.api.refreshTodoList();
  }

  //Eliminar item de la lista TODO
  eliminar(id: number):void{
    this.api.deleteTodo(id).subscribe();
    this.api.refreshTodoList();
    this.api.refreshTodoList();
  }

  //Actualizar item de la lista TODO
  actualizar(id: number, valor: string):void{
    let updatedTodo = {
      id: id,
      name: valor
    }
    if(this.inputTarea.length === 0 || this.inputTarea.length > 25){
      alert('La tarea no puede estar vacia o ser mayor a 25 caracteres');
      this.inputTarea = '';
    }else{
      this.api.updateTodo(updatedTodo).subscribe();
      this.inputTarea = '';
      this.api.refreshTodoList();
      this.api.refreshTodoList();
    }
    
  }

  

}


