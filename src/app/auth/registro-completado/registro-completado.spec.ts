import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroCompletado } from './registro-completado';

describe('RegistroCompletado', () => {
  let component: RegistroCompletado;
  let fixture: ComponentFixture<RegistroCompletado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCompletado],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroCompletado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
