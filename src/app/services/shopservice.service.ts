import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { orderDto } from '../model/orderDto';
import { Pagination } from '../model/Pagination';
import { ProductByShopDto } from '../model/productDto';
import { shopDto } from '../model/shopDto';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class shopService {
  

  // getUserId: String;
  //  item = JSON.parse(localStorage.getItem("accessToken"));
  
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
    const url = `${environment.apiUrl.chatUrl}api/v1/app-shops`;
    return this.http.get<Pagination<shopDto>>(url, { headers: reqHeader }).pipe(); 
  }
  // getListOrder(idShop:string): Observable<orderDto[]>  {
    
  //   var reqHeader = new HttpHeaders({
  //     // 'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.token}`
  //     //'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjA1OTA5N0U4RDlGQTlDMDQ5MDBGQjg3NkZEOEIzQzIyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MTgzOTgwNzMsImV4cCI6MTY0OTkzNDA3MywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNTciLCJhdWQiOiJUU2hvcEFwcCIsImNsaWVudF9pZCI6IlRTaG9wQXBwTW9iaWxlIiwic3ViIjoiODk2MDE5OTg5MDcxODUwNSIsImF1dGhfdGltZSI6MTYxODM5ODA3MywiaWRwIjoibG9jYWwiLCJwaG9uZV9udW1iZXIiOiIrODQzNjY4OTgyMDgiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOiJUcnVlIiwiZW1haWwiOiJ2aW5oaGhhZGFkQGdtYWlsLmNvbSIsImlhdCI6MTYxODM5ODA3Mywic2NvcGUiOlsiZW1haWwiLCJvcGVuaWQiLCJwaG9uZSIsInByb2ZpbGUiLCJUU2hvcEFwcCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.bqOnbTRnh8SRyMfAlEmIz168iMVKlCZgatKJWuM5oa7-wMEcrk5leoQFdyD3ftBrkVccwJq-OtVDLvrtKaeElBCIJvE25zAJMF5dHzo7HvlaB-R_ug8k2Pd0bnN2bfw_jDm-t2Kg3VFzqhyw1UrmvC5Sf_Y0nG0XTt1BfryxWm2uTL0fAfpV-49LHlCNYvZy9RQkz1oJViastYTSGUfob2ooju881fAYXx3Hn5_JYBDP4RX2Bu1fbjRIa7Y8ZtN-cDeQGmk1i6F2viVMJa_RVijIk6Dgec_rCv_aLnqwFuFJTSDqNTtprN4Gi_oqBl5kud3HhdTp9d7kXsXhxdswZg'
  //   });
  //   const url = `${environment.apiUrl.chatUrl}api/v1/app-order/list`;
  //   console.log(idShop);
  //   let filterDto = {ShopIds: [idShop]};
  //   return this.http.post<orderDto[]>(url, filterDto,{ headers: reqHeader, params: filterDto}); 
  // }

  // getProductByShop(idShop: string): Observable<ProductByShopDto>{
  //   var reqHeader = new HttpHeaders({
  //     // 'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.token}`
  //     //'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjA1OTA5N0U4RDlGQTlDMDQ5MDBGQjg3NkZEOEIzQzIyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MTgzOTgwNzMsImV4cCI6MTY0OTkzNDA3MywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNTciLCJhdWQiOiJUU2hvcEFwcCIsImNsaWVudF9pZCI6IlRTaG9wQXBwTW9iaWxlIiwic3ViIjoiODk2MDE5OTg5MDcxODUwNSIsImF1dGhfdGltZSI6MTYxODM5ODA3MywiaWRwIjoibG9jYWwiLCJwaG9uZV9udW1iZXIiOiIrODQzNjY4OTgyMDgiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOiJUcnVlIiwiZW1haWwiOiJ2aW5oaGhhZGFkQGdtYWlsLmNvbSIsImlhdCI6MTYxODM5ODA3Mywic2NvcGUiOlsiZW1haWwiLCJvcGVuaWQiLCJwaG9uZSIsInByb2ZpbGUiLCJUU2hvcEFwcCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.bqOnbTRnh8SRyMfAlEmIz168iMVKlCZgatKJWuM5oa7-wMEcrk5leoQFdyD3ftBrkVccwJq-OtVDLvrtKaeElBCIJvE25zAJMF5dHzo7HvlaB-R_ug8k2Pd0bnN2bfw_jDm-t2Kg3VFzqhyw1UrmvC5Sf_Y0nG0XTt1BfryxWm2uTL0fAfpV-49LHlCNYvZy9RQkz1oJViastYTSGUfob2ooju881fAYXx3Hn5_JYBDP4RX2Bu1fbjRIa7Y8ZtN-cDeQGmk1i6F2viVMJa_RVijIk6Dgec_rCv_aLnqwFuFJTSDqNTtprN4Gi_oqBl5kud3HhdTp9d7kXsXhxdswZg'
  //   });
  //   const url = `${environment.apiUrl.chatUrl}api/v1/app-products/list-by-shopid`;
  //   console.log(idShop);
  //   let filterDto = {ShopIds: [idShop]};
  //   return this.http.post<ProductByShopDto>(url, filterDto,{ headers: reqHeader, params: filterDto}); 
  // }

}