import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, OnChanges, ViewChild } from '@angular/core';
import { HeroService } from './hero.service';
import{OnInit} from "@angular/core";
import firebase from "firebase/app";
import 'firebase/database';
import * as monaco from 'monaco-editor';
import { Observable,of } from 'rxjs';
import { DynamicHostDirective } from '../directives/dynamic-host.directive';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { ViewContainerRef, ElementRef } from '@angular/core';
import { DynamiccomponentserviceService } from '../dynamiccomponentservice.service';
import * as firepad from '@hackerrank/firepad';

@Component({
  selector: 'app-lista-archivos',
  templateUrl: './lista-archivos.component.html',
  styleUrls: ['./lista-archivos.component.css']
})
export class ListaArchivosComponent implements OnInit,OnChanges,AfterViewChecked {
  Database:any
  lista!:firebase.database.Query;
 hola=Array<string>();
 then=false;
 editor!:monaco.editor.IStandaloneCodeEditor;
 firepad!:firepad.IFirepad;

//componente dinamico
@ViewChild(DynamicHostDirective) public dynamicHost!:DynamicHostDirective;
@ViewChild('dynamicContainer', { read: ElementRef }) dynamicContainer!: ElementRef;



  constructor (private heroservice:HeroService, private _componentFactoryResolver: ComponentFactoryResolver,private servirvicio:DynamiccomponentserviceService){}
  
  public createComponent(nombre = "sin nombre"): void {
    console.log(this.lista)

    let nombreProyecto = prompt("¿Cómo se llama tu proyecto?");
    if (nombreProyecto!=null ) {
      
      nombre = nombreProyecto !== "" ? nombreProyecto : nombre;
      
      // this.heroservice.crearFirebaseProject(nombreProyecto);
      console.log(JSON.stringify(this.hola));
      if(this.hola.includes(nombre)==false){
        this.heroservice.crearFirebaseProject(nombre,this.Database);
     /* const component = this._componentFactoryResolver.resolveComponentFactory(DynamicComponent);
      const dynamicComponentRef = this.dynamicHost._viewContainerRef.createComponent(component);
      dynamicComponentRef.instance.hola=this.hola;
      dynamicComponentRef.instance.textoContenedor = nombre;
      dynamicComponentRef.instance.referencia=this.Database.ref(nombre);      */
      }
    }
  }
  
  listarenaside(element:string):Observable<string[]>{
// Obtener referencia al elemento <aside>
var asideElement = document.querySelector('aside');
//Observer x
const x=of(this.hola);
if (asideElement !== null && element!=null && this.hola.includes(element)==false) {
  element=(element=="") ? "sin nombre": element;
  
this.hola.push(element);
  


const component = this._componentFactoryResolver.resolveComponentFactory(DynamicComponent);
const dynamicComponentRef = this.dynamicHost._viewContainerRef.createComponent(component);
dynamicComponentRef.instance.hola=this.hola;
dynamicComponentRef.instance.textoContenedor = element;
dynamicComponentRef.instance.referencia=this.Database.ref(element);    
dynamicComponentRef.instance.editor=this.editor;
dynamicComponentRef.instance.komponentref=dynamicComponentRef;

// var a=CodeMirror(b,{ lineWrapping: true });

  
}
return x;
    
    
  }
  listadekeys(){
    /*if(this.hola.length==0){
      this.heroservice.listarkeysdeproyecto().subscribe(lista2=>this.hola=lista2);
    }*/
    


  }
  ngOnInit(){
    //
   this.heroservice.Disparador.subscribe(data=>{
    this.Database=data.Data;
    this.lista=data.List;
    
   }

   )
   //
   this.servirvicio.Disparador.subscribe(data=>{

    var b=document.getElementById('virtus')!;
   
    if(this.editor!=undefined){
      
      this.editor.dispose();
    
    }
  this.editor= monaco.editor.create(b,{
    language: 'javascript', // Lenguaje del editor (puede ser 'plaintext' para texto sin formato)
    automaticLayout: true, // Diseño automático del editor en función del tamaño del contenedor
    wordWrap: 'on', // Ajuste de línea automático
    readOnly: false, // Modo solo lectura
    fontFamily: 'Consolas, "Courier New", monospace', // Fuente del texto
    fontSize: 14, // Tamaño de fuente
    theme: 'vs', // Tema del editor (puede ser 'vs' para el tema por defecto)
    minimap: {
      enabled: true, // Habilitar el minimapa
    },
    scrollbar: {
      // Configuración de la barra de desplazamiento
      vertical: 'auto', // 'auto' para mostrar automáticamente la barra de desplazamiento vertical
      horizontal: 'auto', // 'auto' para mostrar automáticamente la barra de desplazamiento horizontal
    },
    // Otras opciones personalizadas que desees configurar
  });
    
    if(data.referencia !="eliminar"){
      
      this.firepad=firepad.fromMonaco(data.referencia,this.editor,{
     
      });
    }else{
      b.innerHTML="";
    }
   
  
   })
   
     
   
   
    
  }
 ngOnChanges(){
  console.log(this.Database());
 }
 receiveMessage() {
  
}
 
ngAfterViewChecked(): void {
  if(this.hola.length==0 && this.lista!=undefined && this.then==false){
    
    
    this.lista.on('value',(snapshot)=>{
      snapshot.forEach(childsnapshot=>{
       
        this.listarenaside(childsnapshot.key+"");
        console.log(this.hola.length);
        

      })
    })
    /*onValue(this.lista,snapshot=>{
      snapshot.forEach(childsnapshot=>{
        
        this.listarenaside(childsnapshot.key+"");
        console.log(this.hola.length);
      
      }
        )
    },{
      onlyOnce: true
    })
    this.then=true;
    */
  }
  
};

}


