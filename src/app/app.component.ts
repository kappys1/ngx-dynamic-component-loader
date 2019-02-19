import { ExampleSecondComponentComponent } from './components/example-second-component/example-second-component.component';
import { DynamicComponent } from './../../projects/ngx-dynamic-component-loader/src/lib/DynamicComponent';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxDynamicComponentLoaderService } from 'projects/ngx-dynamic-component-loader/src/public_api';
import { ExampleComponentComponent } from './components/example-component/example-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-dynamic-component-loader-lib';
  year = new Date().getFullYear();

  @ViewChild('content1') content: ElementRef;
  @ViewChild('content2') content2: ElementRef;
  inputValue = '';
  constructor(private dynamicComponentLoaderService: NgxDynamicComponentLoaderService) {

  }

  loadComponent1() {
    const component = ExampleComponentComponent;
    const params = {}; // params for initialize this component.

    this.dynamicComponentLoaderService.getComponent(component, params).then((val: DynamicComponent) => {
      val.componentRef.instance.removeComponent = () => {console.log('click'); val.destroy() };
      this.content.nativeElement.appendChild(val.componentView); // you have the DOM element and you can append in anywhere
    });
  }

  loadComponent2() {
    const component = ExampleSecondComponentComponent;
    const params = {value : this.inputValue}; // params for initialize this component.

    this.dynamicComponentLoaderService.getComponent(component, params).then((val: DynamicComponent) => {
      val.componentRef.instance.removeComponent = () => {console.log('click'); val.destroy() }; // Add Value into component in hot.
      this.content2.nativeElement.appendChild(val.componentView); // you have the DOM element and you can append in anywhere
    });
  }
}
