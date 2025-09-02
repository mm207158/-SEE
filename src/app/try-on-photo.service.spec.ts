import { TestBed } from '@angular/core/testing';

import { TryOnPhotoService } from './try-on-photo.service';

describe('TryOnPhotoService', () => {
  let service: TryOnPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryOnPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
