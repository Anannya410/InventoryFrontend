import { TestBed } from '@angular/core/testing';

import { ShelfDataService } from './shelf-data.service';

describe('ShelfDataService', () => {
  let service: ShelfDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelfDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
