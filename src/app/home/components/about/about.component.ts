import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { WorkPreview } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  previews: WorkPreview[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getWorkPreviews().subscribe(items => this.previews = items); }
}
