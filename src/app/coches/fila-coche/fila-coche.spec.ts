import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilaCoche } from './fila-coche';

describe('FilaCoche', () => {
  let component: FilaCoche;
  let fixture: ComponentFixture<FilaCoche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilaCoche],
    }).compileComponents();

    fixture = TestBed.createComponent(FilaCoche);
    fixture.componentRef.setInput('coche', {
      id: 1,
      marca: 'Renault',
      modelo: 'Clio 3',
      matricula: '4821 KLM',
      cliente: 'Laura Gómez',
      trabajo: 'Cambio de pastillas y discos',
      estado: 'en_reparacion',
      fechaEntrada: new Date('2026-10-05'),
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
