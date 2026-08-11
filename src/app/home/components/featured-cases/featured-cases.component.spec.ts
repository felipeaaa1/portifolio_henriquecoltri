import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideRouter } from '@angular/router';

import { FeaturedCasesComponent } from './featured-cases.component';

describe('FeaturedCasesComponent', () => {
  let component: FeaturedCasesComponent;
  let fixture: ComponentFixture<FeaturedCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCasesComponent],
      providers: [provideRouter([])],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
