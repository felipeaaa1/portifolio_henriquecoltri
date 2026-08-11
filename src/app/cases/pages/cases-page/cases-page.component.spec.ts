import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { CasesPageComponent } from './cases-page.component';
import { CaseService } from '../../../core/services/case.service';

describe('CasesPageComponent', () => {
  let component: CasesPageComponent;
  let fixture: ComponentFixture<CasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesPageComponent],
      providers: [{ provide: CaseService, useValue: {
        getCases: () => of([{ id: 1, title: 'Case', slug: 'case', summary: 'Resumo', featured: true, accent: '#fff' }])
      } }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cases from the service', () => {
    expect(component.cases.length).toBe(1);
  });
});
