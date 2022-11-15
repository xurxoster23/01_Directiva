import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensage = "";
  registro = false;
  name:string = "";
  surname:string = "";
  cargo:string = "";
  entradas : any[];


  constructor(){
    this.entradas = [
      {titulo:"Javascript"},
      {titulo:"Python"},
      {titulo:"Java"}
    ]
  }

  registrarUsuario(): void{

    this.registro = true;
    this.mensage = "Usuario Registrado con Éxito";

  }

}

