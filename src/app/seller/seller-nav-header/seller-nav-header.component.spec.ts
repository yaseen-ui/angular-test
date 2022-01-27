import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerNavHeaderComponent } from './seller-nav-header.component';

describe('SellerNavHeaderComponent', () => {
  let component: SellerNavHeaderComponent;
  let fixture: ComponentFixture<SellerNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
