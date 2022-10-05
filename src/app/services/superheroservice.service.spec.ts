import { TestBed } from '@angular/core/testing';

import { SuperheroserviceService } from './superheroservice.service';

describe('SuperheroserviceService', () => {
  let service: SuperheroserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
