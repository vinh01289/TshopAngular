import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthloginService } from './services/authloginservice.service';

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
  {
    path: 'shop',
    // canActivate: [AuthloginService],
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
