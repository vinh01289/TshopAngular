import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './home/conversation/conversation.component';
import { HomeComponent } from './home/home/home.component';
import { AuthloginService } from './services/authloginservice.service';
// import { ShopComponent } from './shop/shop/shop.component';

const routes: Routes = [
  { path: '', pathMatch : 'full', redirectTo: '/login' },
  { 
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule),
  },
  {
    path: 'home',
    canActivate: [AuthloginService],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {path: 'home',
    canActivate: [AuthloginService],
    component: HomeComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      // { path: 'shop', component: ShopComponent },
      { path: 'conversation', component: ConversationComponent},
      //{ path: 'ChangePW', component: ChangePasswordComponent }
    //  {path: 'Department', component: DepartmentComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
