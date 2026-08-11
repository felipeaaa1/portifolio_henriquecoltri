import { TestBed } from '@angular/core/testing';

import { CaseService } from './case.service';

describe('CaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseService = TestBed.inject(CaseService);
    expect(service).toBeTruthy();
  });

  it('should return cases', () => {
    const service: CaseService = TestBed.inject(CaseService);
    service.getCases().subscribe(cases => expect(cases.length).toBeGreaterThan(0));
  });

  it('should return exactly three featured cases', () => {
    const service: CaseService = TestBed.inject(CaseService);
    service.getFeaturedCases().subscribe(cases => {
      expect(cases.length).toBe(3);
      expect(cases.every(item => item.featured)).toBe(true);
    });
  });
});
