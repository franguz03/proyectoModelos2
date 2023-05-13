import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicHost]'
})
export class DynamicHostDirective {

  constructor( public _viewContainerRef : ViewContainerRef) { }

}
