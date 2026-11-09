import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAcceso } from './registro-acceso';

describe('RegistroAcceso', () => {
  let component: RegistroAcceso;
  let fixture: ComponentFixture<RegistroAcceso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAcceso],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroAcceso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
