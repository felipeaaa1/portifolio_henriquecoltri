import { Component, OnInit } from '@angular/core';
import { MethodStep } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
@Component({ selector: 'app-method-steps', templateUrl: './method-steps.component.html', styleUrls: ['./method-steps.component.scss'] })
export class MethodStepsComponent implements OnInit {
  steps: MethodStep[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getMethodSteps().subscribe(items => this.steps = items); }
}
