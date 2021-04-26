import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chatservice';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  isActive = true;
  @Output() ConversationId = new EventEmitter<string>();
  ltsData: Array<any> = [];
  activeElement: any = null;
  @ViewChild('conversation', {read:ElementRef}) conversation: ElementRef;
  constructor(public chatService: ChatService) {
    this.chatService.changeData().subscribe(res =>{
      this.ltsData = res;
    });
   }

  ngOnInit(): void {
  }
  getIdConversation(item){
    this.activeElement = item.conversationId;
    this.ConversationId.emit(item);
  }
}
