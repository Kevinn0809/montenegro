import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavComponent } from './barra-nav.component';

describe('BarraNavComponent', () => {
  let component: BarraNavComponent;
  let fixture: ComponentFixture<BarraNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraNavComponent]
    });
    fixture = TestBed.createComponent(BarraNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
