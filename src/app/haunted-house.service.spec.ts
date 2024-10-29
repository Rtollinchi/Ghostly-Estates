import { TestBed } from '@angular/core/testing';

import { HauntedHouseService } from './haunted-house.service';

describe('HauntedHouseService', () => {
  let service: HauntedHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HauntedHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
