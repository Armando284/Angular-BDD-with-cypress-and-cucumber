import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private mainColor: string;
  $emitter = new EventEmitter;

  constructor() {
    this.mainColor = 'orange';
  }

  setMainColor(color: string): string {
    this.mainColor = color;
    console.log(this.mainColor);
    this.$emitter.emit();
    return this.mainColor;
  }

  getMainColor(): string {
    return this.mainColor;
  }
}
