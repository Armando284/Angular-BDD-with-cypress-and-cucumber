import { EventEmitter, Injectable } from '@angular/core';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Message[];
  $emitter = new EventEmitter;

  constructor() {
    this.messages = [
      {
        author: 'Armando J. Peña Tamayo',
        content: 'I love this app\'s color effect',
        createdAt: new Date()
      }
    ];
  }

  getMessages(): Message[] {
    return this.messages;
  }

  createMessage(message: Message): Message {
    const messagesLength = this.messages.push(message);
    this.$emitter.emit();
    return this.messages[messagesLength - 1];
  }

  deleteMessage(idx: number): Message {
    this.$emitter.emit();
    return this.messages.splice(idx, 1)[0];
  }
}
