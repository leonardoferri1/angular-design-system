import { TestBed } from '@angular/core/testing';

import { AngularDesignSystemService } from './angular-design-system.service';

describe('AngularDesignSystemService', () => {
  let service: AngularDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
