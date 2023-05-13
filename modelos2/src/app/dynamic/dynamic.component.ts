import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})

export class DynamicComponent {
  @Input() textoContenedor: string = 'Nombre del proyecto';
}
