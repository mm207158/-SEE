import { TestBed } from '@angular/core/testing';

import { TryOnVideoService } from './try-on-video.service';

describe('TryOnVideoService', () => {
  let service: TryOnVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryOnVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
