import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReversePipe} from '../pipes/reverse.pipe';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    ReversePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
