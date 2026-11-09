import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPresupuesto } from './nuevo-presupuesto';

describe('NuevoPresupuesto', () => {
  let component: NuevoPresupuesto;
  let fixture: ComponentFixture<NuevoPresupuesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoPresupuesto],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoPresupuesto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
