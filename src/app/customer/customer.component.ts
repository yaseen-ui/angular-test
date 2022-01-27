import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from './../api-http.service';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public tableData: any = {
    headerContent: [],
    bodyContent: []
  }
  public color: any;
  public headerColor: any;
  public api = 'https://api.covidtracking.com/v1/us/daily.json';
  constructor(public http: ApiHttpService, public _CS: CustomerService) { }
  ngOnInit(): void {
    this.getAPIResponse();
    this.getColor();
  }
  getAPIResponse() {
    this.http.getUSersList(this.api).subscribe((data) => {
      this.formatTableData(data);
    })
  }
  formatTableData(data: any) {
    this.tableData = {
      headerContent: this._CS.tableHeaders,
      bodyContent: data.map((body: { [x: string]: any; }) => {
        const obj: any = {};
        this._CS.tableHeaders.forEach(header => {
          if (header.key === 'date') {
            body[header.key] = new Date(body[header.key] * 1000).toISOString();
          }
          obj[header.key] = body[header.key];
        })
        return obj;
      })
    };
    console.log(this.tableData);
  }
  getColor() {
    this.http.getNavgationColor().subscribe(res => {
      this.color = res;
    })
    this.http.getHeaderColor().subscribe(res => {
      this.headerColor = res;
    })
  }
}
