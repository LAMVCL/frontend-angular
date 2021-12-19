import { Component, Input, SimpleChanges } from '@angular/core';
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

  //Para limpiar el formulario
  limpiar():void{
    this.inputTarea = '';
  }

  //Agregar item a la lista TODO
  agregar(valor: string):void{

    let newTodo = {
      id:0,
      name: valor
    }
    this.api.refreshTodoList();
    this.api.addTodo(newTodo).subscribe();
    this.api.refreshTodoList();
    
  }

  //Eliminar item de la lista TODO
  eliminar(id: number):void{
    this.api.refreshTodoList();
    this.api.deleteTodo(id).subscribe();
    this.api.refreshTodoList();
  }

  //Actualizar item de la lista TODO
  actualizar(id: number, valor: string):void{
    let updatedTodo = {
      id: id,
      name: valor
    }
    this.api.refreshTodoList();
    this.api.updateTodo(updatedTodo).subscribe();
    this.api.refreshTodoList();
  }

  

}


