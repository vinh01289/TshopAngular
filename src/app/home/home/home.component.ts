import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { shopService } from 'src/app/services/shopservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: UserProfile = null;
  // isShowConversation = false;
    // Conversation: Conversation;
    // show = false;
    // Content: string;
    // callingInfo = { name: '', content: '', type: '' };
    // receiverId: string;
    // showModal = false;
    // phoneNumber: string;
    // @ViewChild(ConversationComponent) conversationComponent: ConversationComponent;
    // @ViewChild(SearchComponent) searchComponent: SearchComponent;

  constructor(private auth: AuthService, private router: Router, private shopservice: shopService) { }

  ngOnInit(): void {
    // this.router.navigate(['home']);
    // let item=JSON.parse(localStorage.getItem("CURRENTUSER"));
    // console.log("item---",item);
    // this.getAllList();
  }
  // listAll :any;
  // getAllList(){
  //   this.shopservice.getList().subscribe(res=>{
  //     this.listAll = res;
  //     console.log("listAll", this.listAll);
  //   })
  }

