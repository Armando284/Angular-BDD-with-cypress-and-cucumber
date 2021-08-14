import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color-service.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styles: [
  ]
})
export class ExampleComponent implements OnInit {

  myBackground: string;

  constructor(private _color: ColorService) {
    this.myBackground = '';
    this._color.getMainColor().then(
      data => {
        this.myBackground = data;
        console.log(data);
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {

  }

}
