import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  public tableHeaders = [
    { key: 'date', value: 'Date' },
    { key: 'death', value: 'Death' },
    { key: 'deathIncrease', value: 'Death Increase' },
    { key: 'negative', value: 'Negative' },
    { key: 'onVentilatorCurrently', value: 'Severe' },
    { key: 'positive', value: 'Positive' }
  ]
}
