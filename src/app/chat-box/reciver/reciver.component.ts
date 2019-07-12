import { Component, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.css']
})
export class ReciverComponent implements OnInit {

  ReciveMsg: FormGroup;
  lstmsgRecive: any = [];
  reciver: any = {};

  @Output() ReciverData = new EventEmitter();


  reciveMsg() {
    if (this.ReciveMsg.valid) {
      let Recive_Msg = this.ReciveMsg.value;
      this.reciver.msg = Recive_Msg.msg;
      this.reciver.name = 'Reciver';
      this.ReciverData.emit(this.reciver);
      this.ReciveMsg.reset();
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.ReciveMsg = this.fb.group({
      msg: ['', Validators.required],
    });
  }

}
