import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  SendMsg: FormGroup
  lstSendermsg: any = [];
  sendMsg1: boolean = true;
  @Output() SenderData = new EventEmitter();
  @Output() NewMsg = new EventEmitter();
  edit: boolean = true
  Send_Msg: any;
  @Input() chatBox;
  index = 1;
  isdeleted: boolean = true;


  sendMsg() {
    if (this.SendMsg.valid) {
      this.Send_Msg = this.SendMsg.value;
      this.Send_Msg.id = this.index++;
      this.Send_Msg.isdeleted = 0;
      if (this.sendMsg1 == true) {
        this.Send_Msg.name = 'Sender';
        this.sendMsg1 = false;
      }
      else {
        this.sendMsg1 = true;
        this.Send_Msg.name = 'Delever';
      }
      this.SenderData.emit(this.Send_Msg)
      this.SendMsg.reset();
    }
  }

  getRec(index) {
    this.edit = false;
    localStorage.setItem('index', index.id);
    if (index) {
      this.SendMsg.patchValue({
        msg: index.msg ? index.msg : null,
      });
    }
  }
  editRec(row) {
    if (this.SendMsg.valid) {
      var NewMsg = JSON.parse(localStorage.getItem('index'));
      for (var i = 0; i < row.length; i++) {
        if (row[i].id == NewMsg) {
          let body = {
            msg: row[i].msg = this.SendMsg.value.msg,
          }
          row[i].msg = body.msg;
          this.SendMsg.reset();
          this.edit = true;
        }
      }
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.SendMsg = this.fb.group({
      msg: ['', Validators.required],
    });
  }


}
