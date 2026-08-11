import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ServiceItem } from '../../../core/models/service-item.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [NgFor, SectionTitleComponent, RevealDirective],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss'
})
export class ServicesGridComponent implements OnInit {
  services: ServiceItem[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getServices().subscribe(items => this.services = items); }
}
