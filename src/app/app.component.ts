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
  public lista: any[] = [];
  //Constructor para traer la API
  constructor(private api: ApiService){
      
  }

  //Metodo para traer TODO's
  getLista():void{
    this.api.getTodoList().subscribe(
      (data: any[]) => {
        this.lista = data;
      }
    );
  }

  //Al iniciar traemos la lista de TODO's
  ngOnInit(){
    this.getLista();
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
    this.api.addTodo(newTodo).subscribe();
    
  }

  //Eliminar item de la lista TODO
  eliminar(id: number):void{
    this.api.deleteTodo(id).subscribe();
  }

  //Actualizar item de la lista TODO
  actualizar(id: number, valor: string):void{
    let updatedTodo = {
      id: id,
      name: valor
    }
    this.api.updateTodo(updatedTodo).subscribe();
  }

  

}


