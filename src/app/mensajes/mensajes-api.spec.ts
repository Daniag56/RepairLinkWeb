import { TestBed } from '@angular/core/testing';
import { MensajesApi } from './mensajes-api';

describe('MensajesApi', () => {
  let service: MensajesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajesApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
