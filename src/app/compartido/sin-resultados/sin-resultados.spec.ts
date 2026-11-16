import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinResultados } from './sin-resultados';

describe('SinResultados', () => {
  let component: SinResultados;
  let fixture: ComponentFixture<SinResultados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinResultados],
    }).compileComponents();

    fixture = TestBed.createComponent(SinResultados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
