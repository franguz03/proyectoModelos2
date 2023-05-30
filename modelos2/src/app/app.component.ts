import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeroService } from './lista-archivos/hero.service';
import { environment } from 'src/environments/environment';
import firebase from "firebase/app";
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'modelos2';
  App!: firebase.app.App
  Database!: firebase.database.Database
  lista!:firebase.database.Query


  constructor(private heroservice:HeroService){

  }
  ngOnInit(): void {
    this.App=firebase.initializeApp(environment.firebase);
    this.Database=this.App.database();
    this.lista=this.Database.ref().orderByKey();
    console.log(this.lista);
    //query(ref(this.Database,"/"),orderByKey());
    
  }
    
  
  ngAfterViewInit(): void{
    this.heroservice.Disparador.emit({
      Data:this.Database,
      List:this.lista
    })
  }
}
  

  
