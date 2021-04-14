import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isload = false;
  constructor(public auth: AuthService, private router: Router){

}
ngOnInit(){
  const that = this;
  if (that.auth.loginIn())
  {
    that.auth.logOut();
    this.router.navigate(['login']);
    this.router.navigate(['shop']);
  }
}
}
