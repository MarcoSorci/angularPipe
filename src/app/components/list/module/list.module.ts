import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list.component';
import { OrderByNumberPipe } from 'src/app/pipes/order-by-number.pipe';
import { OrderUsersByRankingPipe } from 'src/app/pipes/order-users-by-ranking.pipe';
import { OrderUsersPipe } from 'src/app/pipes/order-users.pipe';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
    OrderByNumberPipe,
    OrderUsersByRankingPipe,
    OrderUsersPipe,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListComponent  //this way you link the module to app module, and export the component 
  ]
})
export class ListModule { }
