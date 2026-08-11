import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MethodStep } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-method-steps',
  standalone: true,
  imports: [NgFor, SectionTitleComponent, RevealDirective],
  templateUrl: './method-steps.component.html',
  styleUrl: './method-steps.component.scss'
})
export class MethodStepsComponent implements OnInit {
  steps: MethodStep[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getMethodSteps().subscribe(items => this.steps = items); }
}
