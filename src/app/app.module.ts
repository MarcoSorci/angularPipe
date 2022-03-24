import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';


import { BackgroundDirective } from './directives/background.directive';
import { ExistDirective } from './directives/exist.directive';
import { ResizeDirective } from './directives/resize.directive';
import { BlackBackgroundDirective } from './directives/legacy/black-background.directive';
import { CycleDirective } from './directives/cycle.directive';
import { ListModule } from './components/list/module/list.module';
import { SharedModule } from './shared/shared.module';






@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BlackBackgroundDirective,
    BackgroundDirective,
    ExistDirective,
    ResizeDirective,
    CycleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //app-root in index.html
})
export class AppModule { }
