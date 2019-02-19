# NgxDynamicComponentLoaderLib

> Library for loader your component from controller, service, etc...

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![npm version](https://badge.fury.io/js/ngx-dynamic-component-loader.svg)](https://badge.fury.io/js/ngx-dynamic-component-loader)
![Ngx](https://img.shields.io/badge/ngx-SUCCESS-blue.svg?style=flat)
![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)


# Install 👷🏼

```
npm install ngx-dynamic-component-loader --save
```
## Examples  👯‍

[Here](https://kappys1.github.io/ngx-dynamic-component-loader/)

## Usage 🧙

1. Add Module

```
  @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDynamicComponentLoaderModule
  ],
  entryComponents: [SampleComponent],
  providers: [],
  bootstrap: [AppComponent]
})

**Don't forguet to add your Dynamic Components in entryComponents**

```

2. You can use in your component

```
  constructor(private dynamicComponentLoaderService: NgxDynamicComponentLoaderService) {

  }


  loadComponent(){
    const component = SampleComponent;
    const params = {} // params for initialize this component.

    this.loaderComponentService.getComponent(component, params).then((val: DynamicComponent) => {
      document.appendChild(val.componentView); // you have the DOM element and you can append in anywhere
    })
  }


```


## DynamicComponent Model 🕵🏼

Result when your get the component.
```
DynamicComponent {
  componentRef: ComponentRef<any>; // --> Component Reference
  componentView: any; // --> DOM Reference
  destroy() // --> Destroy the element from DOM and Ref.
}

```


### Author
Alex Marcos Gutierrez

### License
MIT
