import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuiaEstilos } from './guia-estilos';

describe('GuiaEstilos', () => {
  let component: GuiaEstilos;
  let fixture: ComponentFixture<GuiaEstilos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaEstilos],
    }).compileComponents();

    fixture = TestBed.createComponent(GuiaEstilos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
