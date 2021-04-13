import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from '../model/Pagination';
import { shopDto } from '../model/shopDto';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class shopService {
  token = localStorage.getItem('accessToken');
  constructor(private authService: AuthService, private route: Router, protected http: HttpClient) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean{
    return this.authService.loginIn();
  }
  getList(): Observable<Pagination<shopDto>>  {
    
    var reqHeader = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    const url = `${environment.apiUrl.chatUrl}api/employees`;
    return this.http.get<Pagination<shopDto>>(url, { headers: reqHeader }).pipe();
  }
}
