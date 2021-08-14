import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private _color: ColorService) {
  }

  ngOnInit(): void {
  }

  setColor(color: string): void {
    this._color.setMainColor(color);
  }

}
