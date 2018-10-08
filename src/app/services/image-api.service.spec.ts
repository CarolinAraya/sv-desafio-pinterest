import { TestBed } from '@angular/core/testing';

import { ImageApiService } from './image-api.service';

describe('ImageApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageApiService = TestBed.get(ImageApiService);
    expect(service).toBeTruthy();
  });
});
