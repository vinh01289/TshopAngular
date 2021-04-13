import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
