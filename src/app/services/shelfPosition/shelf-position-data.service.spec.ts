import { TestBed } from '@angular/core/testing';

import { ShelfPositionDataService } from './shelf-position-data.service';

describe('ShelfPositionDataService', () => {
  let service: ShelfPositionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelfPositionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
