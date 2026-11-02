import { TestBed } from '@angular/core/testing';
import { AjustesApi } from './ajustes-api';

describe('AjustesApi', () => {
  let service: AjustesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjustesApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
