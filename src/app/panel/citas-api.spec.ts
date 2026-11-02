import { TestBed } from '@angular/core/testing';
import { CitasApi } from './citas-api';

describe('CitasApi', () => {
  let service: CitasApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
