import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MethodStepsComponent } from './method-steps.component';

describe('MethodStepsComponent', () => {
  let component: MethodStepsComponent;
  let fixture: ComponentFixture<MethodStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodStepsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
