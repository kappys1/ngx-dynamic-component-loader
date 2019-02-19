import { TestBed } from '@angular/core/testing';

import { NgxDynamicComponentLoaderService } from './ngx-dynamic-component-loader.service';

describe('NgxDynamicComponentLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDynamicComponentLoaderService = TestBed.get(NgxDynamicComponentLoaderService);
    expect(service).toBeTruthy();
  });
});
