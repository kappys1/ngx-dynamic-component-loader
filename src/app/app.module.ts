import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDynamicComponentLoaderModule } from 'projects/ngx-dynamic-component-loader/src/public_api';
import { ExampleComponentComponent } from './components/example-component/example-component.component';
import { ExampleSecondComponentComponent } from './components/example-second-component/example-second-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    ExampleSecondComponentComponent
  ],
  entryComponents: [
    ExampleComponentComponent,
    ExampleSecondComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDynamicComponentLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
