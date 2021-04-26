import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {  BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Constant, HandleLocalStore } from '../model/HandleLocalSore';
import {  UserProfile } from '../model/user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Conversation } from '../model/conversation';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  token = localStorage.getItem('accessToken');
  listMessage: Message[] = [];
  listConversation: BehaviorSubject<Conversation[]>;
  // jwtHelper = new JwtHelperService();
  // private currentUser = null;
  changeData(): Observable<any>{
    return this.listConversation.asObservable();
  }
  constructor(private router: Router, private http: HttpClient){
    this.listConversation = new BehaviorSubject<Conversation[]>(null);
  }
  getToken(): string {
    return localStorage.getItem('accessToken');
  }
  getMessage(id: string): Observable<any>{
    return this.http.get(`${environment.apiUrl.chatUrl}api/v1/messages/${id}`);
  }
  getConversation(): void{
    const reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
    this.http.get(`${environment.apiUrl.chatUrl}api/v1/conversation/list-shop-conversation`, { headers: reqHeader}).subscribe(
      (res:Conversation[]) => {
        this.listConversation.next(res);
      }
    );
  }
}


