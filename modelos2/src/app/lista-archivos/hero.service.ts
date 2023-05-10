import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {getAnalytics} from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { getDatabase, ref, set } from "firebase/database";
import { ListaArchivosComponent } from './lista-archivos.component';
import { FirebaseApp, firebaseApp$ } from '@angular/fire/app';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


@Injectable({
  providedIn: 'root'
})

  
export class HeroService {
  

    crearFirebaseProject(nombre:string) {
    
    var xd= initializeApp(environment.firebase)
    var td=getDatabase(xd)
    
    set(ref(td, nombre), {
      username: "cualquiercosa"
    });

    var ft = ref(td,"cd")

    console.log(ft)
    
     /* 
    firebase.initializeApp(environment.firebase)
    var ref = firebase.database().ref();
    ref=ref.child(nombre);
    ref.push()
    */
    

  }  

  
}

