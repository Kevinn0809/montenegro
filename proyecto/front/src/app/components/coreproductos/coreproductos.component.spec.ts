import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreproductosComponent } from './coreproductos.component';

describe('CoreproductosComponent', () => {
  let component: CoreproductosComponent;
  let fixture: ComponentFixture<CoreproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreproductosComponent]
    });
    fixture = TestBed.createComponent(CoreproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
