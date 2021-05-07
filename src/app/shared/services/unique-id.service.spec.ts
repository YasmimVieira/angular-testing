import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
    const service = new UniqueIdService();
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});
