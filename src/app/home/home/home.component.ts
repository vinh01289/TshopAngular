import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserProfile } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { shopService } from 'src/app/services/shopservice.service';
import { orderDto } from 'src/app/model/orderDto';
import { Conversation } from 'src/app/model/conversation';
import { ConversationComponent } from '../conversation/conversation.component';
import { ChatService } from 'src/app/services/chatservice';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: UserProfile;
  isCollapsed = false;
  listAll : any;
  lsOrder:orderDto[]=[];
  idShop: string
  // isShowConversation = false;
  Conversation: Conversation;
    // show = false;
  Content: string;
    // callingInfo = { name: '', content: '', type: '' };
    // receiverId: string;
    // showModal = false;
    // phoneNumber: string;
  @ViewChild(ConversationComponent) conversationComponent: ConversationComponent;
    // @ViewChild(SearchComponent) searchComponent: SearchComponent;

  constructor(private auth: AuthService, public chatService: ChatService,private socketService: SocketService, private route: ActivatedRoute, private router: Router, private shopservice: shopService) { }

  ngOnInit(): void {
     this.getAllList();
     this.getIdShop(this.idShop);
     this.chatService.getConversation();
     this.p_getChat();
  }
  getAllList(){
    this.shopservice.getList().subscribe(res=>{
      this.listAll = res;
      console.log("listAll", this.listAll);
    })
  }
  getIdShop(idShop: string){
    this.idShop = idShop;
    
    console.log('idShop',this.idShop);
  }
  private p_getChat(){
    this.socketService.listen('chat').subscribe(data=>{

    })
  }
}

