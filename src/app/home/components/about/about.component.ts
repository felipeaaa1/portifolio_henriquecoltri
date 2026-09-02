import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Case } from '../../../core/models/case.model';
import { WorkPreview } from '../../../core/models/portfolio.model';
import { CaseService } from '../../../core/services/case.service';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RouterLink, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  previews: WorkPreview[] = [];
  cases: Case[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private caseService: CaseService
  ) { }

  ngOnInit(): void {
    this.portfolioService
      .getWorkPreviews()
      .subscribe(items => this.previews = items);

    this.caseService
      .getCases()
      .subscribe(items => {
        this.cases = items.filter(item =>
          item.detailAvailable && item.imageUrl
        );
      });
  }
}