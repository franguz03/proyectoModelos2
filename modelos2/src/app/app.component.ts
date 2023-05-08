import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modelos2';

  crearContenedorEnAside() {
    console.log("helloo");
    
    // Obtener nombre del proyecto
    let nombreProyecto = prompt("¿Cómo se llama tu proyecto?");

    // Obtener referencia al elemento <aside>
    var asideElement = document.querySelector('aside');

    if (asideElement !== null && nombreProyecto!=null) {
      nombreProyecto=(nombreProyecto=="") ? "sin nombre": nombreProyecto;
      // Crear un nuevo contenedor
      var nuevoContenedor = document.createElement('div');

      // Agregar clases o atributos al nuevo contenedor si es necesario
      //nuevoContenedor.className = 'mi-contenedor';
      nuevoContenedor.style.backgroundColor = '#f2f2f2';
      nuevoContenedor.style.padding = '10px';
      nuevoContenedor.style.borderTop = '1px solid #d0d0d0';
      nuevoContenedor.style.borderBottom = '1px solid #d0d0d0';
      nuevoContenedor.style.height='1.5rem'
      nuevoContenedor.textContent = nombreProyecto;

      // Agregar el nuevo contenedor al aside
      asideElement.appendChild(nuevoContenedor);
    }
  }
}