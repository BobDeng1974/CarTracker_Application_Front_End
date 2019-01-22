import { TestBed } from '@angular/core/testing';

import { GasCarServiceService } from './gas-car-service.service';

describe('GasCarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GasCarServiceService = TestBed.get(GasCarServiceService);
    expect(service).toBeTruthy();
  });
});
