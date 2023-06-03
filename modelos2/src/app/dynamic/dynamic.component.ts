import { Component, Input, ContentChild, TemplateRef,AfterViewInit, Output, EventEmitter, ViewContainerRef, ComponentRef } from '@angular/core';
import { DynamiccomponentserviceService } from '../dynamiccomponentservice.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { useRef,useState} from 'react';
import * as firepad from '@hackerrank/firepad';
import loader from '@monaco-editor/loader';
import * as monaco from 'monaco-editor';
import firebase from "firebase/app";
import 'firebase/database';


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})

export class DynamicComponent implements AfterViewInit {
  @Input() textoContenedor: string = 'Nombre del proyecto';
  hola!:Array<string>;
  referencia!:firebase.database.Reference;
  mostrar=true;
  editor!:monaco.editor.IStandaloneCodeEditor;
  b:any
  komponentref:any;

  
  constructor(private servicio:DynamiccomponentserviceService){

  }
  ngAfterViewInit(): void {
    
    this.b=document.getElementById('virtus')!;
    
  }
  public Eliminar(){
    console.log(this.referencia);
   this.servicio.eliminarregistro(this.referencia);
   console.log(this.hola.indexOf(this.referencia.key+""));
   this.hola.splice(this.hola.indexOf(this.referencia.key+""),1);
    this.mostrar=false;
    this.komponentref.destroy();
    this.servicio.Disparador.emit({
      referencia:"eliminar"
    })
   
   
  }
  public firepad(){
    
    this.servicio.Disparador.emit({
      referencia:this.referencia
    })
    
    
    //firepad.fromMonaco(this.referencia,this.editor).dispose();
  /*  loader.init().then(monaco => {
      this.editor=monaco.editor.create(this.b, {
        value: "sexo",
        language: 'javascript',
      });
      console.log(this.editor);
      //firepad.fromMonaco(this.referencia,this.editor);
    }).catch(xd=>{
      console.log("rejected");
    })*/
    
    
    
   
   
   
   
   
  }
}
