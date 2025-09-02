import { TestBed } from '@angular/core/testing';

import { ProductLeftSidebarService } from './product-left-sidebar.service';

describe('ProductLeftSidebarService', () => {
  let service: ProductLeftSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLeftSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
