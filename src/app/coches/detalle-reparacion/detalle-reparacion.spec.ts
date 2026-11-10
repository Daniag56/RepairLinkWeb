import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleReparacion } from './detalle-reparacion';

describe('DetalleReparacion', () => {
  let component: DetalleReparacion;
  let fixture: ComponentFixture<DetalleReparacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleReparacion],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleReparacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
