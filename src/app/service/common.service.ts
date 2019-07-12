import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sendData() {
    return [
      { "id": 1, "msg": "hii" },
    ]
  }

  ReciveData() {
    return [
      { "id": 1, "msg": "hello" },
    ]
  }

  constructor() { }
}
