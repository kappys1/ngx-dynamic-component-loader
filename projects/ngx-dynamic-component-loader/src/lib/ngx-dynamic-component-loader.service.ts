import { DynamicComponent } from './DynamicComponent';
import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxDynamicComponentLoaderService {

  rootViewContainer;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) { }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

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

  getComponent(dynamicComponent, params , viewContainer = this.rootViewContainer) {

    return new Promise(resolve => {
      const view = !viewContainer ? viewContainer : this.injector;
      const factory = this.loadComponent(dynamicComponent)
      const component = viewContainer ? factory.create(view.parentInjector) :  factory.create(view)
      this.loadParams(component, params);

      if(viewContainer) {
        viewContainer.insert(component.hostView)
      }
      else {
        this.appRef.attachView(component.hostView);
      }

      const domElem = (component.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;

      const res = new DynamicComponent(component, domElem);

      resolve(res);
    });

  }
}
