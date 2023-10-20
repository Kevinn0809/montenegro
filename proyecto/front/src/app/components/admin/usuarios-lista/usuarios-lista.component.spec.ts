import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListaComponent } from './usuarios-lista.component';

describe('UsuariosListaComponent', () => {
  let component: UsuariosListaComponent;
  let fixture: ComponentFixture<UsuariosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosListaComponent]
    });
    fixture = TestBed.createComponent(UsuariosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
