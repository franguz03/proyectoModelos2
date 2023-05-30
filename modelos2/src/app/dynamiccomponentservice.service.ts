import { EventEmitter, Injectable, Output } from '@angular/core';
import firebase from "firebase/app";
import 'firebase/database';



@Injectable({
  providedIn: 'root'
})
export class DynamiccomponentserviceService {
  @Output() Disparador:EventEmitter<any>=new EventEmitter();
  constructor() { }
  public eliminarregistro(Td:firebase.database.Reference ){
    Td.remove();
    
    
  }
}
