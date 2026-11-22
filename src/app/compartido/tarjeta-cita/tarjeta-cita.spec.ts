import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCita } from './tarjeta-cita';

describe('TarjetaCita', () => {
  let component: TarjetaCita;
  let fixture: ComponentFixture<TarjetaCita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaCita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCita);

    fixture.componentRef.setInput('hora', '09:00');
    fixture.componentRef.setInput('cliente', 'Carlos Méndez');
    fixture.componentRef.setInput('vehiculo', 'Peugeot 208');
    fixture.componentRef.setInput('motivo', 'Neumáticos');
    fixture.componentRef.setInput('estado', 'En taller');

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
