import { TestBed } from '@angular/core/testing';

import { ElectricCarService } from './electric-car-service';

describe('ElectricCarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectricCarService = TestBed.get(ElectricCarService);
    expect(service).toBeTruthy();
  });
});
