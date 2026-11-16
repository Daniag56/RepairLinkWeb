import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajeErro } from './mensaje-error';

describe('MensajeErro', () => {
  let component: MensajeErro;
  let fixture: ComponentFixture<MensajeErro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeErro],
    }).compileComponents();

    fixture = TestBed.createComponent(MensajeErro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
