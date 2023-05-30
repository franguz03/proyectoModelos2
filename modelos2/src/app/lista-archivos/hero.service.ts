import { EventEmitter, Injectable, Output } from '@angular/core';
import { ListaArchivosComponent } from './lista-archivos.component';
import firebase from "firebase/app";
import 'firebase/database';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

  
export class HeroService {

  lista:any;
  //query(ref(this.Td,"/"),orderByKey())
  @Output() Disparador:EventEmitter<any>=new EventEmitter();

  constructor(){

  }
 

    crearFirebaseProject(nombre:string,Td:firebase.database.Database) {
      var x=Td.ref(nombre);
      x.push({
        username:nombre
      })
    
    
  }  
  /*
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
*/
  

  
}

