import { TestBed } from '@angular/core/testing';

import { DieselCarServiceService } from './diesel-car-service.service';

describe('DieselCarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DieselCarServiceService = TestBed.get(DieselCarServiceService);
    expect(service).toBeTruthy();
  });
});
