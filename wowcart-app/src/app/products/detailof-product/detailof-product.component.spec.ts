import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailofProductComponent } from './detailof-product.component';

describe('DetailofProductComponent', () => {
  let component: DetailofProductComponent;
  let fixture: ComponentFixture<DetailofProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailofProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailofProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
