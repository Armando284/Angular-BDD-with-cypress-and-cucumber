import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  messages: Message[];

  constructor(private _messages: MessageService) {
    this.messages = _messages.getMessages();
    this._messages.$emitter.subscribe(() => this.getMessages());
  }

  ngOnInit(): void {
  }

  getMessages(): void {
    this.messages = this._messages.getMessages();
  }

  deleteMessage(idx: number): void {
    this._messages.deleteMessage(idx);
  }

  ngOnDestroy(): void {
    this._messages.$emitter.unsubscribe();
  }

}
