import { TestBed } from '@angular/core/testing';

import { MeteoService } from './weather.service';

describe('WeatherService', () => {
  let service: MeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
