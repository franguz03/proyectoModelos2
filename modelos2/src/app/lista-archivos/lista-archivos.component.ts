import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import{OnInit} from "@angular/core";
@Component({
  selector: 'app-lista-archivos',
  templateUrl: './lista-archivos.component.html',
  styleUrls: ['./lista-archivos.component.css']
})
export class ListaArchivosComponent implements OnInit{
 hola=Array<string>();
  constructor (private heroservice:HeroService){

  }
  crearContenedorEnAside() {
    console.log("helloo");
    
    // Obtener nombre del proyecto
    let nombreProyecto = prompt("¿Cómo se llama tu proyecto?");

    // Obtener referencia al elemento <aside>
    var asideElement = document.querySelector('aside');

    if (asideElement !== null && nombreProyecto!=null) {
      nombreProyecto=(nombreProyecto=="") ? "sin nombre": nombreProyecto;


      this.heroservice.crearFirebaseProject(nombreProyecto);
      this.listadekeys()
      console.log(JSON.stringify(this.hola));
      
      // Crear un nuevo contenedor
      var nuevoContenedor = document.createElement('div');

      // Agregar clases o atributos al nuevo contenedor si es necesario
      nuevoContenedor.style.backgroundColor = '#f2f2f2';
      nuevoContenedor.style.padding = '10px';
      nuevoContenedor.style.borderTop = '1px solid #d0d0d0';
      nuevoContenedor.style.borderBottom = '1px solid #d0d0d0';
      nuevoContenedor.style.height='1.5rem'
      nuevoContenedor.textContent = nombreProyecto;

      // Agregar el nuevo contenedor al aside
      asideElement.appendChild(nuevoContenedor);
    }
  }

  listarenaside():void {
   this.listadekeys();
      console.log(JSON.stringify(this.hola));
      console.log(this.hola);
  this.hola.forEach(element=>{

// Obtener referencia al elemento <aside>
var asideElement = document.querySelector('aside');

if (asideElement !== null && element!=null) {
  element=(element=="") ? "sin nombre": element;

  
  // Crear un nuevo contenedor
  var nuevoContenedor = document.createElement('div');

  // Agregar clases o atributos al nuevo contenedor si es necesario
  nuevoContenedor.style.backgroundColor = '#f2f2f2';
  nuevoContenedor.style.padding = '10px';
  nuevoContenedor.style.borderTop = '1px solid #d0d0d0';
  nuevoContenedor.style.borderBottom = '1px solid #d0d0d0';
  nuevoContenedor.style.height='1.5rem'
  nuevoContenedor.textContent = element;

  // Agregar el nuevo contenedor al aside
  asideElement.appendChild(nuevoContenedor);
}
  })
    
    
  }
  listadekeys(){
  
    this.heroservice.listarkeysdeproyecto().subscribe(lista2=>this.hola=lista2);


  }
  ngOnInit():void{
    this.listarenaside();
  }
  

}
