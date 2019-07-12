import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SenderComponent } from './sender/sender.component';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  chatBox = [];
  message: any;
  deletemsg: boolean = true;

  @ViewChild(SenderComponent) private editmsg: SenderComponent;

  sendMsg(msg) {
    if (msg) {
      this.chatBox.push(msg);
    }
  }

  editRecord(msg) {
    this.editmsg.getRec(msg);
  }

  deleteRecord(msg) {
    if (confirm(" Are you sure you want to delete this message?")) {
      let body = {
        delete : msg.isdeleted = 1,
        msg: msg.msg = 'This Message was deleted'
      }
      console.log('body', body)
      msg.msg = body.msg;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
