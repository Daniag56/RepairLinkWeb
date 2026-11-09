import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisaCorreo } from './revisa-correo';

describe('RevisaCorreo', () => {
  let component: RevisaCorreo;
  let fixture: ComponentFixture<RevisaCorreo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisaCorreo],
    }).compileComponents();

    fixture = TestBed.createComponent(RevisaCorreo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
