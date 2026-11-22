import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHoras } from './lista-horas';

describe('ListaHoras', () => {
  let component: ListaHoras;
  let fixture: ComponentFixture<ListaHoras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaHoras],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaHoras);

    fixture.componentRef.setInput('fecha', new Date(2026, 10, 23));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
