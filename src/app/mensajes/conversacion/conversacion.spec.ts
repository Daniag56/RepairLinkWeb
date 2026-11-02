import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Conversacion } from './conversacion';

describe('Conversacion', () => {
  let component: Conversacion;
  let fixture: ComponentFixture<Conversacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conversacion],
    }).compileComponents();

    fixture = TestBed.createComponent(Conversacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
