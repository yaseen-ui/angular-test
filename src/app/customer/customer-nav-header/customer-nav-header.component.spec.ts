import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNavHeaderComponent } from './customer-nav-header.component';

describe('CustomerNavHeaderComponent', () => {
  let component: CustomerNavHeaderComponent;
  let fixture: ComponentFixture<CustomerNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
