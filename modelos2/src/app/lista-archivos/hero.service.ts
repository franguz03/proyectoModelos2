import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {getAnalytics} from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { getDatabase, ref, set,query,orderByKey,onChildAdded,onValue, onChildChanged, DataSnapshot } from "firebase/database";
import { ListaArchivosComponent } from './lista-archivos.component';
import { FirebaseApp, firebaseApp$ } from '@angular/fire/app';
import { AngularFireDatabase, AngularFireDatabaseModule,AngularFireList } from '@angular/fire/compat/database';
import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

  
export class HeroService {
  App= initializeApp(environment.firebase)
  Td=getDatabase(this.App)
  lista = query(ref(this.Td,"/"),orderByKey());
  lista2=Array<string>();
  constructor(private firebase:AngularFireDatabase){

  }
 

    crearFirebaseProject(nombre:string) {
      
    
    var xd= initializeApp(environment.firebase)
    var td=getDatabase(xd)
    var zd={
      username:"hola"
    }
    set(ref(this.Td, nombre), {
      username: "cualquiercosaa"
    });
    
   
   
    
    
    
     /* 
    firebase.initializeApp(environment.firebase)
    var ref = firebase.database().ref();
    ref=ref.child(nombre);
    ref.push()
    */
  }  
  
  listarkeysdeproyecto():Observable<Array<string>>{
       //Toma un snapshot de la query cuando se modifica un valor de la base de datos
      
    onValue(this.lista, (snapshot)=>{
      //Recorre cada elemento del snapshot(Los objetos en la query
      
      snapshot.forEach(childSnapshot=>  {
       this.lista2.push(childSnapshot.key?.valueOf()+"");
       
        /*console.log(keys.length)
        console.log(keys[0])
        console.log(keys)*/
        //Introduce las keys en un arreglo.
        // ...
      } ); 
       }, {
      //Remueve la propiedad onvalue despues de la primera vez que se ejecuta
      onlyOnce: true
      
    });
    const x=of(this.lista2);
    return x;
    
  }
limpiararray(array:string[]):Observable<string[]>{
while(array.length>0){
  array.pop();
}
console.log(array+"sexo");
const x=of(array);
return x;
}
  

  
}

