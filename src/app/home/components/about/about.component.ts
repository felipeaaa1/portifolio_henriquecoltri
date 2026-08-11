import { Component, OnInit } from '@angular/core';
import { WorkPreview } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
@Component({ selector: 'app-about', templateUrl: './about.component.html', styleUrls: ['./about.component.scss'] })
export class AboutComponent implements OnInit {
  previews: WorkPreview[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getWorkPreviews().subscribe(items => this.previews = items); }
}
