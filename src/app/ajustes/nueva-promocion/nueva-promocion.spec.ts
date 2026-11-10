import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaPromocion } from './nueva-promocion';

describe('NuevaPromocion', () => {
  let component: NuevaPromocion;
  let fixture: ComponentFixture<NuevaPromocion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaPromocion],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaPromocion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
