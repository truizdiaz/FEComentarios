import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarComentarioComponent } from './agregar-editar-comentario.component';

describe('AgregarEditarComentarioComponent', () => {
  let component: AgregarEditarComentarioComponent;
  let fixture: ComponentFixture<AgregarEditarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
