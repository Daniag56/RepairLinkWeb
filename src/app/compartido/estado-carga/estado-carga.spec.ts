import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoCarga } from './estado-carga';

describe('EstadoCarga', () => {
  let component: EstadoCarga;
  let fixture: ComponentFixture<EstadoCarga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoCarga],
    }).compileComponents();

    fixture = TestBed.createComponent(EstadoCarga);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
