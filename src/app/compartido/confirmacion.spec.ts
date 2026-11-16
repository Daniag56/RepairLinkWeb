import { TestBed } from '@angular/core/testing';
import { Confirmacion } from './confirmacion';

describe('Confirmacion', () => {
  let service: Confirmacion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Confirmacion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
