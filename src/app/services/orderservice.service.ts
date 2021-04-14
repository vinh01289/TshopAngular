import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { orderDto } from '../model/orderDto';
import { Pagination } from '../model/Pagination';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class orderService {
  

  // getUserId: String;
  //  item = JSON.parse(localStorage.getItem("accessToken"));
  
  token = localStorage.getItem('accessToken');
  constructor(private authService: AuthService, private route: Router, protected http: HttpClient) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean{
    return this.authService.loginIn();
  }
  getListOrder(): Observable<Pagination<orderDto>>  {
    
    var reqHeader = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    const url = `${environment.apiUrl.chatUrl}api/v1/app-order/list`;
    return this.http.get<Pagination<orderDto>>(url, { headers: reqHeader }).pipe(); 
  }
}
