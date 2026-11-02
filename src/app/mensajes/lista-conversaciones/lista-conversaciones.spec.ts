import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaConversaciones } from './lista-conversaciones';

describe('ListaConversaciones', () => {
  let component: ListaConversaciones;
  let fixture: ComponentFixture<ListaConversaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaConversaciones],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaConversaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
