import { AfterViewChecked, AfterViewInit, Component, OnChanges } from '@angular/core';
import { HeroService } from './hero.service';
import{OnInit} from "@angular/core";
import { getDatabase, set,ref,query,orderByKey,onChildAdded,onValue, onChildChanged, DataSnapshot, Database } from "firebase/database";
import { Observable,of } from 'rxjs';
@Component({
  selector: 'app-lista-archivos',
  templateUrl: './lista-archivos.component.html',
  styleUrls: ['./lista-archivos.component.css']
})
export class ListaArchivosComponent implements OnInit,OnChanges,AfterViewChecked {
  Database:any
  lista:any
 hola=Array<string>();
 then=false;
  constructor (private heroservice:HeroService){

  }
  
 
 
  
  crearContenedorEnAside() {
    console.log("helloo");
    console.log(this.lista)
    
    // Obtener nombre del proyecto
    let nombreProyecto = prompt("¿Cómo se llama tu proyecto?");

    // Obtener referencia al elemento <aside>
    var asideElement = document.querySelector('aside');

    if (asideElement !== null && nombreProyecto!=null) {
      nombreProyecto=(nombreProyecto=="") ? "sin nombre": nombreProyecto;


     // this.heroservice.crearFirebaseProject(nombreProyecto);
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

  listarenaside(element:string):Observable<string[]>{
// Obtener referencia al elemento <aside>
var asideElement = document.querySelector('aside');
//Observer x
const x=of(this.hola);
if (asideElement !== null && element!=null) {
  element=(element=="") ? "sin nombre": element;
this.hola.push(element);
  
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
return x;
    
    
  }
  listadekeys(){
    if(this.hola.length==0){
      this.heroservice.listarkeysdeproyecto().subscribe(lista2=>this.hola=lista2);
    }
    


  }
  ngOnInit(){
   this.heroservice.Disparador.subscribe(data=>{
    this.Database=data.Data;
    this.lista=data.List;
    
   })
   
   
    
  }
 ngOnChanges(){
  console.log(this.Database());
 }
 
ngAfterViewChecked(): void {
  if(this.hola.length==0 && this.lista!=undefined && this.then==false){
    
    onValue(this.lista,snapshot=>{
      snapshot.forEach(childsnapshot=>{
        
        this.listarenaside(childsnapshot.key+"");
        console.log(this.hola.length);
      
      }
        )
    },{
      onlyOnce: true
    })
    this.then=true;
  }
  
};

}


