import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Message } from 'src/app/interfaces/message';
import { ColorService } from 'src/app/services/color-service.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html'
})
export class AddMessageComponent implements OnInit {

  backgroundColor: string = '';
  messageForm: FormGroup;
  private today: Date = new Date();

  constructor(private _message: MessageService, private _color: ColorService) {
    this.messageForm = new FormGroup({
      'author': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'content': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
    this.getBackgroundColor();
    this._color.$emitter.subscribe(() => this.getBackgroundColor())
  }

  ngOnInit(): void {
  }

  getBackgroundColor(): void {
    this.backgroundColor = `bg-${this._color.getMainColor()}`;
  }

  saveMessage(): boolean {
    if (this.messageForm.invalid) return false;
    const message: Message = {
      author: this.messageForm.value.author,
      content: this.messageForm.value.content,
      createdAt: this.today
    }
    this._message.createMessage(message);
    this.messageForm.reset();
    return true;
  }

  ngOnDestroy(): void {
    this._color.$emitter.unsubscribe();
  }
}
