import { ComponentRef } from '@angular/core/src/render3';


export class DynamicComponent {

  componentRef: ComponentRef<any>;
  componentView: any;

  constructor(component, view) {
    this.componentRef = component;
    this.componentView = view;
  }
  destroy() {
    this.componentRef.destroy();
  }
}
