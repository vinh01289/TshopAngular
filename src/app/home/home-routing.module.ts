import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ShopComponent } from '../shop/shop/shop.component';
import { ConversationComponent } from './conversation/conversation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', 
  component: HomeComponent,
  children: [
    // {path: 'shop', component: ShopComponent},
  ]
  },
  
  { path: 'conversation', component: ConversationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
