import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { shopService } from 'src/app/services/shopservice.service';
import { orderDto } from 'src/app/model/orderDto';

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
    // Conversation: Conversation;
    // show = false;
    // Content: string;
    // callingInfo = { name: '', content: '', type: '' };
    // receiverId: string;
    // showModal = false;
    // phoneNumber: string;
    // @ViewChild(ConversationComponent) conversationComponent: ConversationComponent;
    // @ViewChild(SearchComponent) searchComponent: SearchComponent;

  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router, private shopservice: shopService) { }

  ngOnInit(): void {
    // this.router.navigate(['home']);
    // let item=JSON.parse(localStorage.getItem("CURRENTUSER"));
    // console.log("item---",item);
     this.getAllList();
     this.getIdShop(this.idShop);
  }
  // listAll :any;
  // getAllList(){
  //   this.shopservice.getList().subscribe(res=>{
  //     this.listAll = res;
  //     console.log("listAll", this.listAll);
  //   })
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
}

