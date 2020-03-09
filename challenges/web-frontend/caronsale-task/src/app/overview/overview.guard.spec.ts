import { TestBed } from '@angular/core/testing';

import { OverviewGuard } from './overview.guard';

describe('OverviewGuard', () => {
  let guard: OverviewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OverviewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
