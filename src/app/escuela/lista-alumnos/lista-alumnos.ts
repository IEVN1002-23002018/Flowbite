import { Component, OnInit } from '@angular/core';
import {IAlumnos} from '../alumnos';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-lista-alumnos',
  styleUrl: './lista-alumnos.css',
  templateUrl: './lista-alumnos.html',
})
export class ListaAlumnos implements OnInit {

  formulario!:FormGroup //! decimos que la inicializacion sera mas adelante

  alumnos:IAlumnos[]=[]
  nuevoAlumno:IAlumnos={
    matricula:'xx',
    nombre:'xx',
    correo:'xx',
    materia:'xx'
  }

ngOnInit(): void{  //Permite Inicializa objetos o propiedades de clase 
  this.cargarAlumno()
  this.formulario= new FormGroup({  //Formulario en grupo que contiene campos de control
    matricula:new FormControl(''),
    nombre:new FormControl(''),
    correo:new FormControl(''),
    materia:new FormControl(''),
  })
}

muestraAlumnos():void{
  this.nuevoAlumno.matricula=this.formulario.value.matricula
  this.nuevoAlumno.nombre=this.formulario.value.nombre
  this.nuevoAlumno.correo=this.formulario.value.correo
  this.nuevoAlumno.materia=this.formulario.value.materia
}

cargarAlumno(): void{

}
}
