import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../api-http.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  constructor(private _APS: ApiHttpService) { }

  public color: any;
  public headerColor: any;

  ngOnInit(): void {
    this.getColor();
  }
  changeColor() {
    this._APS.setNavigationColor(this.color);
  }

  getColor() {
    this._APS.getNavgationColor().subscribe(res => {
      this.color = res;
    })
    this._APS.getHeaderColor().subscribe(res => {
      this.headerColor = res;
    })
  }
  changeHeaderColor() {
    this._APS.setHeaderColor(this.headerColor);
  }
}
