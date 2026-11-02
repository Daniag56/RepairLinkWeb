import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AceptarCoche } from './aceptar-coche';

describe('AceptarCoche', () => {
  let component: AceptarCoche;
  let fixture: ComponentFixture<AceptarCoche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceptarCoche],
    }).compileComponents();

    fixture = TestBed.createComponent(AceptarCoche);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
