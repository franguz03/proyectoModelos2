
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArchivosComponent } from './lista-archivos/lista-archivos.component';
//import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { DynamicHostDirective } from './directives/dynamic-host.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';





@NgModule({
  declarations: [
    AppComponent,
    ListaArchivosComponent,
    DynamicHostDirective,
    DynamicComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   MonacoEditorModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    //AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
