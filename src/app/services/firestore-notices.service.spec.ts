import { TestBed } from '@angular/core/testing';

import { FirestoreNoticesService } from './firestore-notices.service';

describe('FirestoreNoticesService', () => {
  let service: FirestoreNoticesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreNoticesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
