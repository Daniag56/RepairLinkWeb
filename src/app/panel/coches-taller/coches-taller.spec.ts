import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CochesTaller } from './coches-taller';

describe('CochesTaller', () => {
  let component: CochesTaller;
  let fixture: ComponentFixture<CochesTaller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CochesTaller],
    }).compileComponents();

    fixture = TestBed.createComponent(CochesTaller);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
