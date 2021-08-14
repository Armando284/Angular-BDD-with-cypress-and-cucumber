import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private mainColor: string;

  constructor() {
    this.mainColor = 'orange';
  }

  setMainColor(color: string): void {
    this.mainColor = color;
  }

  async getMainColor(): Promise<string> {
    return await this.mainColor;
  }
}
