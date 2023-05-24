import { EventEmitter, Injectable, Output } from '@angular/core';
import { ListaArchivosComponent } from './lista-archivos.component';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { initializeApp } from 'firebase/app';
import {getAnalytics} from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { getDatabase, ref, set,query,orderByKey,onChildAdded,onValue, onChildChanged, DataSnapshot } from "firebase/database";
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

  
export class HeroService {

  lista:any;
  //query(ref(this.Td,"/"),orderByKey())
  @Output() Disparador:EventEmitter<any>=new EventEmitter();

  constructor(private firebase:AngularFireDatabase){

  }
 

    crearFirebaseProject(nombre:string,Td:any) {
      
    
    set(ref(Td, nombre), {
      username: nombre
    });
  }  
  
  listarkeysdeproyecto():Observable<Array<string>>{
       //Toma un snapshot de la query cuando se modifica un valor de la base de datos
      
    onValue(this.lista, (snapshot)=>{
      snapshot.forEach(childSnapshot=>  {
        
      } ); 
       }, {
      onlyOnce: true
    });
    const x=of();
    return x;
    
  }

  

  
}

