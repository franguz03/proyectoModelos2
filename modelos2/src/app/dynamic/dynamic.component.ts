import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { DatabaseReference } from '@angular/fire/compat/database/interfaces';
import { DynamiccomponentserviceService } from '../dynamiccomponentservice.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import * as CodeMirror from 'codemirror';
import Firepad from 'firepad';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})

export class DynamicComponent {
  @Input() textoContenedor: string = 'Nombre del proyecto';
   
  referencia:any
  mostrar=true;
  
  constructor(private servicio:DynamiccomponentserviceService){

  }
  public Eliminar(){
    console.log(this.referencia);
   this.servicio.eliminarregistro(this.referencia);
    this.mostrar=false;
  }
  public firepad(){
    var b=document.getElementById('virtus')!;
 var a=CodeMirror(b,{ lineWrapping: true });
 console.log(a);    
   
   
   
  }
}
