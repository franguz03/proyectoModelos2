import { Injectable } from '@angular/core';
import { DatabaseReference } from '@angular/fire/compat/database/interfaces';
import { remove } from 'firebase/database';



@Injectable({
  providedIn: 'root'
})
export class DynamiccomponentserviceService {

  constructor() { }
  public eliminarregistro(Td:DatabaseReference ){
    remove(Td);
    
  }
}
