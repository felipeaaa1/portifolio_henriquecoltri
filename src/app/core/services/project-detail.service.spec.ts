import { TestBed } from '@angular/core/testing';

import { ProjectDetailService } from './project-detail.service';

describe('ProjectDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should expose every published project by slug', () => {
    const service = TestBed.inject(ProjectDetailService);

    expect(service.getProjectBySlug('hardcore-game-channel')).toBeTruthy();
    expect(service.getProjectBySlug('escola-livre-porto')).toBeTruthy();
    expect(service.getProjectBySlug('jcell-imports')).toBeTruthy();
    expect(service.getProjectBySlug('bahniuk-supermercados')).toBeTruthy();
  });

  it('should return three different related projects', () => {
    const service = TestBed.inject(ProjectDetailService);
    const relatedProjects = service.getRelatedProjects('hardcore-game-channel');

    expect(relatedProjects).toHaveLength(3);
    expect(relatedProjects.some(project => project.slug === 'hardcore-game-channel')).toBe(false);
  });
});
