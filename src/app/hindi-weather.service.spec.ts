import { TestBed } from '@angular/core/testing';

import { HindiWeatherService } from './hindi-weather.service';

describe('HindiWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HindiWeatherService = TestBed.get(HindiWeatherService);
    expect(service).toBeTruthy();
  });
});
