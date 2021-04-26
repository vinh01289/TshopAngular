import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { DemoNgZorroAntdModule } from 'src/shared/ng-zoro-antd.module';
import { ShopOrderComponent } from './shop-order/shop-order.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConversationComponent } from './conversation/conversation.component';
@NgModule({
  declarations: [
    HomeComponent,
    ShopOrderComponent,
    ConversationComponent
  ],
  
  exports:[HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DemoNgZorroAntdModule,
    NzIconModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
