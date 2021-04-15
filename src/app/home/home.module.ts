import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { DemoNgZorroAntdModule } from 'src/shared/ng-zoro-antd.module';
import { ShopOrderComponent } from './shop-order/shop-order.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShopOrderComponent
  ],
  
  exports:[HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DemoNgZorroAntdModule,
  ]
})
export class HomeModule { }
