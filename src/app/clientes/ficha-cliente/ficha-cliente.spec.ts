import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaCliente } from './ficha-cliente';

describe('FichaCliente', () => {
  let component: FichaCliente;
  let fixture: ComponentFixture<FichaCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaCliente],
    }).compileComponents();

    fixture = TestBed.createComponent(FichaCliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
