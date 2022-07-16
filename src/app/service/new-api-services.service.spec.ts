import { TestBed } from '@angular/core/testing';

import { NewApiServicesService } from './new-api-services.service';

describe('NewApiServicesService', () => {
  let service: NewApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
