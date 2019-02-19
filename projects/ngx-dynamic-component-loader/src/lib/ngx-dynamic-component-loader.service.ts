import { DynamicComponent } from './DynamicComponent';
import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxDynamicComponentLoaderService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) { }

  private loadComponent(component: any) {

    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component);

    return componentRef;

  }

  private loadView(componentRef) {

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    return domElem;
  }

  private loadParams(component, params) {
    Object.keys(params).map(key => {
      component.instance[key] = params[key];
    });
  }

  getComponent(component, params) {
    return new Promise(resolve => {
      setTimeout(() => {
        const componentRef = this.loadComponent(component).create(this.injector);
        this.loadParams(componentRef, params);
        const componentView = this.loadView(componentRef);

        const res = new DynamicComponent(componentRef, componentView);

        resolve(res);
      });
    });
  }
}
