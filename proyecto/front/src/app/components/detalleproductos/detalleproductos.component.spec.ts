import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleproductosComponent } from './detalleproductos.component';

describe('DetalleproductosComponent', () => {
  let component: DetalleproductosComponent;
  let fixture: ComponentFixture<DetalleproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleproductosComponent]
    });
    fixture = TestBed.createComponent(DetalleproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
