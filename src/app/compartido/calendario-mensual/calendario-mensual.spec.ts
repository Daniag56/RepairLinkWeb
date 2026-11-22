import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioMensual } from './calendario-mensual';

describe('CalendarioMensual', () => {
  let component: CalendarioMensual;
  let fixture: ComponentFixture<CalendarioMensual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioMensual],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioMensual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate 42 calendar days', () => {
    expect(component.dias.length).toBe(42);
  });
});
