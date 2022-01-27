import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }
  public getUSersList(url: string) {
    return this.http.get(url);
  }
  private backgroundColor = new BehaviorSubject<any>('white');
  private headerColor = new BehaviorSubject<any>('pink');

  setNavigationColor(color: any) {
    this.backgroundColor.next(color);
  }

  getNavgationColor(): Observable<any> {
    return this.backgroundColor.asObservable()
  }

  setHeaderColor(color: any) {
    this.headerColor.next(color);
  }

  getHeaderColor(): Observable<any> {
    return this.headerColor.asObservable()
  }

  //'https://api.publicapis.org/entries'
}
