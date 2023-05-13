import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, OnChanges, ViewChild } from '@angular/core';
import { HeroService } from './hero.service';
import{OnInit} from "@angular/core";
import { getDatabase, set,ref,query,orderByKey,onChildAdded,onValue, onChildChanged, DataSnapshot, Database } from "firebase/database";
import { Observable,of } from 'rxjs';
import { DynamicHostDirective } from '../directives/dynamic-host.directive';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { ViewContainerRef, ElementRef } from '@angular/core';
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

//componente dinamico
@ViewChild(DynamicHostDirective) public dynamicHost!:DynamicHostDirective;
@ViewChild('dynamicContainer', { read: ElementRef }) dynamicContainer!: ElementRef;



  constructor (private heroservice:HeroService, private _componentFactoryResolver: ComponentFactoryResolver){}
  
  public createComponent(nombre = "sin nombre"): void {
    console.log(this.lista)

    let nombreProyecto = prompt("¿Cómo se llama tu proyecto?");
    if (nombreProyecto!=null ) {
      
      nombre = nombreProyecto !== "" ? nombreProyecto : nombre;
      
      // this.heroservice.crearFirebaseProject(nombreProyecto);
      this.listadekeys()
      console.log(JSON.stringify(this.hola));
      const component = this._componentFactoryResolver.resolveComponentFactory(DynamicComponent);
      const dynamicComponentRef = this.dynamicHost._viewContainerRef.createComponent(component);
      dynamicComponentRef.instance.textoContenedor = nombre;
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


const component = this._componentFactoryResolver.resolveComponentFactory(DynamicComponent);
const dynamicComponentRef = this.dynamicHost._viewContainerRef.createComponent(component);
dynamicComponentRef.instance.textoContenedor = element;
  
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


