import { TestBed } from '@angular/core/testing';

import { WorkService } from './work.service';

describe('WorkService', () => {

  let workService: WorkService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [WorkService] });
    workService = TestBed.get(WorkService);
  });

  it('should be created', () => {
    expect(workService).toBeTruthy();
  });

  it('should have four works', () => {
    expect(workService.getWorks().length).toBe(4);
  });
});
