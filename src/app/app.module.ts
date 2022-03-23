import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ButtonComponent } from './components/button/button.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { OrderUsersByRankingPipe } from './pipes/order-users-by-ranking.pipe';
import { OrderByNumberPipe } from './pipes/order-by-number.pipe';
import { OrderUsersPipe } from './pipes/order-users.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonComponent,
    CapitalizeFirstPipe,
    OrderUsersByRankingPipe,
    OrderUsersPipe,
    OrderByNumberPipe
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
