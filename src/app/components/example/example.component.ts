import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color-service.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styles: [
  ]
})
export class ExampleComponent implements OnInit {

  backgroundColor: string = '';

  constructor(private _color: ColorService) {
    this.getBackgroundColor();
    this._color.$emitter.subscribe(() => this.getBackgroundColor())
  }

  ngOnInit(): void {

  }

  getBackgroundColor(): void {
    this.backgroundColor = `bg-${this._color.getMainColor()}`;
  }

  ngOnDestroy(): void {
    this._color.$emitter.unsubscribe();
  }

}
