import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from "@angular/common/http";
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
