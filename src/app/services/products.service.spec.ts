import { TestBed } from '@angular/core/testing';

import { TvService } from './tv-series.service';

describe('ProductsService', () => {
  let service: TvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
