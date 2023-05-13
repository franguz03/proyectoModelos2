import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeroService } from './lista-archivos/hero.service';
import { initializeApp } from 'firebase/app';
import {getAnalytics} from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { getDatabase, ref, set,query,orderByKey,onChildAdded,onValue, onChildChanged, DataSnapshot, Database } from "firebase/database";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'modelos2';
  App: any;
  Database: any
  lista:any


  constructor(private heroservice:HeroService){

  }
  ngOnInit(): void {
    this.App=initializeApp(environment.firebase);
    this.Database=getDatabase(this.App);
    this.lista=query(ref(this.Database,"/"),orderByKey());
    
  }
    
  
  ngAfterViewInit(): void{
    this.heroservice.Disparador.emit({
      Data:this.Database,
      List:this.lista
    })
  }
}
  

  
