import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofProductComponent } from './listof-product.component';

describe('ListofProductComponent', () => {
  let component: ListofProductComponent;
  let fixture: ComponentFixture<ListofProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
